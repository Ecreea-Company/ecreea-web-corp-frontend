import { Public } from '@/layouts'
import type { NextPage } from 'next'
import { Dropdowns, HeadDropdowns } from '@/components'
import { DataPrivacidad } from '@/data'

const Legal: NextPage = () => {
  return (
    <Public titlePage="Politica de Privacidad">
      <HeadDropdowns title='Política de Privacidad' content='Ecreaa está comprometida con tu privacidad. Lea nuestra Política de privacidad del cliente para obtener una explicación clara de cómo recopilamos, usamos, divulgamos, transferimos y almacenamos su información.'></HeadDropdowns>

      {DataPrivacidad.map((item, index) => (
        <Dropdowns key={index} dataTable={item.dataTable} title={item.title} content={item.data} content2={item.data2} />
      ))}
    </Public>
  )
}

export default Legal
