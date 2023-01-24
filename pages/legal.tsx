import { Public } from '@/layouts'
import type { NextPage } from 'next'
import { Dropdowns, HeadDropdowns } from '@/components'
import { DataLegal } from '@/data'

const Legal: NextPage = () => {
  const TermYCond = DataLegal[0]
  const ContentDrop = DataLegal.slice(1)

  return (
    <Public titlePage="Legal">
      <HeadDropdowns title='Legal Ecreea' content={TermYCond.data}></HeadDropdowns>

      {ContentDrop.map((item, index) => (
        <Dropdowns key={index} title={item.title} content={item.data} />
      ))}
    </Public>
  )
}

export default Legal
