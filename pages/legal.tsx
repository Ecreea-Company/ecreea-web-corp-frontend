import { Public } from '@/layouts'
import type { NextPage } from 'next'
import { Dropdowns, HeadDropdowns } from '@/components'
import { DataLegal } from '@/data'

const Legal: NextPage = () => {
  return (
    <Public titlePage="Legal">
      <HeadDropdowns title='Legal Ecreea' content={'Los términos y condiciones que más adelante se indican (las &quot;Condiciones Generales&quot;) regulan el acceso y el uso a todas y cada una de las páginas web localizables bajo el dominio &quot;ecreea.com&quot;, y sus respectivos subdominios y subdirectorios (el &quot;Sitio Web&quot;), propiedad de Ecreea Company S.A., corporación empresarial con domicilio en La Libertad, Perú, constituida por tiempo indefinido en virtud de escritura pública e inscrita en el Registro público de Trujillo, teniendo como N° de partida registral 10234567890987654.\n\nEl acceso al Sitio Web y la utilización de sus contenidos y servicios implica la adhesión plena y sin reservas a las Condiciones Generales que se exponen en la versión publicada en el momento que el usuario acceda al mismo.\n\nLa última versión de las Condiciones Generales podrá ser consultada siempre que lo desee en la dirección electrónica www.ecreaa.com. Si el usuario decide no aceptar las Condiciones vigentes deberá abstenerse de acceder al Sitio Web y/o utilizar los contenidos y/o servicios en él disponibles.'}></HeadDropdowns>

      {DataLegal.map((item, index) => (
        <Dropdowns key={index} title={item.title} content={item.data} />
      ))}
    </Public>
  )
}

export default Legal
