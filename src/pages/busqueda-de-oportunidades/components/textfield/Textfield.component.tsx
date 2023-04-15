import { BsSearch } from 'react-icons/bs'
import styles from './Textfield.module.scss'
import useSWR from 'swr'
import { getFetcherSWR } from '@/services'
import { useState } from 'react'
import { TextfieldApiProps } from '@/models'
import { TextfieldDropdown } from '..'

const useEndpointData = (endpoint: string) => {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`, getFetcherSWR)
  return data?.data.map((item: any): TextfieldApiProps => ({
    id: item.id,
    slug: item.attributes.slug,
    name: item.attributes.nombre_puesto,
    tipo_contrato: item.attributes.tipo_contrato.data.attributes.nombre
  }))
}

const TextField = (): JSX.Element => {
  const jobs = useEndpointData('jobs?populate=*')

  const [filteredData, setFilteredData] = useState<TextfieldApiProps[]>([])

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase()
    const filtered = query
      ? jobs.filter((item: any) =>
        item.name.toLowerCase().startsWith(query)
      )
      : []
    setFilteredData(filtered)
  }

  return (
    <>
      <div className={styles.textField}>
        <div className={styles.textPad}>
          <span className={styles.iconContainer}>
            <BsSearch/>
          </span>
          <input type="text" placeholder="Encuentra tu oportunidad" onChange={handleChange}/>
        </div>
      </div>
      <TextfieldDropdown filteredData={filteredData} />
    </>
  )
}

export default TextField
