import { Public } from '@/layouts'
import type { NextPage } from 'next'
import { Dropdowns, HeadDropdowns } from '@/components'
import { DataPrivacidad } from '@/data'

const Legal: NextPage = () => {
  const ParrafoPriv = DataPrivacidad[0]
  const ContentDrop = DataPrivacidad.slice(1)

  return (
    <Public titlePage="Politica de Privacidad">
      <HeadDropdowns title='Política de Privacidad' content={ParrafoPriv.data}></HeadDropdowns>

      {ContentDrop.map((item, index) => (
        <Dropdowns key={index} dataTable={item.dataTable} title={item.title} content={item.data} content2={item.data2} />
      ))}
    </Public>
  )
}

export default Legal
