import { Public } from '@/layouts'
import type { NextPage } from 'next'
import { Dropdowns, HeadDropdowns } from '@/components'
import { DataCookies } from '@/data'

const Legal: NextPage = () => {
  const PolitCookie = DataCookies[0]
  const ContentDrop = DataCookies.slice(1)

  return (
    <Public titlePage="Cookies">
      <HeadDropdowns title='Política de Cookies' content={PolitCookie.data}></HeadDropdowns>

      {ContentDrop.map((item, index) => (
        <Dropdowns key={index} title={item.title} content={item.data} />
      ))}
    </Public>
  )
}

export default Legal
