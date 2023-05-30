import './Textfield.module.scss'
import { Autocomplete } from '../autocomplete/Autocomplete.component'
import { getAlgoliaResults } from '@algolia/autocomplete-js'
import SearchItem from '../search-item/SearchItem.component'
import algoliasearch from 'algoliasearch'

const searchClient = algoliasearch(
  'AQS72RFZ2Q',
  'e31895120604407ae53189e47a8bcccb'
)

const TextField = ({ dropJobs }: any): JSX.Element => {
  return (
      <Autocomplete
        openOnFocus={false}
        detachedMediaQuery='none'
        placeholder="Encuentra tu oportunidad"
        getSources={({ query }: any) => [
          {
            sourceId: 'jobs',
            getItems () {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'production_job',
                    query
                  }
                ]
              })
            },
            templates: {
              item ({ item, components }: any) {
                return <SearchItem hit={item} components={components} />
              }
            }
          }
        ]}
      />
  )
}

export default TextField
