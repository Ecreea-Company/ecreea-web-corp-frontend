import { Job } from '@/models'
import React from 'react'

interface searchItemProps {
  hit: Job
  components: any
}

function SearchItem ({ hit, components }: searchItemProps) {
  return (
    <a className="aa-ItemLink" href={`/busqueda-de-oportunidades/${hit.slug}`}>
      <div className="aa-ItemContent">
        <div className="aa-ItemContentBody">
          <div className="aa-ItemContentTitle">
            <components.Highlight hit={hit} attribute="nombre_puesto" />
          </div>
        </div>
      </div>
    </a>
  )
};

export default SearchItem
