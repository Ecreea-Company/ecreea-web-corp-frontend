import { Public } from '@/layouts'
import type { NextPage } from 'next'
import { Dropdowns, HeadDropdowns } from '@/components'
import { DataCookies } from '@/data'

const Legal: NextPage = () => {
  return (
    <Public titlePage="Cookies">
      <HeadDropdowns title='Política de Cookies' content={'En esta Política de Cookies encontrarás información sobre el uso que realizamos de las cookies y dispositivos similares que se instalan en los terminales de nuestros clientes y usuarios.'}></HeadDropdowns>

      {DataCookies.map((item, index) => (
        <Dropdowns key={index} title={item.title} content={item.data} />
      ))}
    </Public>
  )
}

export default Legal
