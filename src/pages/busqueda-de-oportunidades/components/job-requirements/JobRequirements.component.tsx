import React from 'react'
import styles from './JobRequirements.module.scss'
import { useWindowSize } from '@/hooks'
import Dropdown from '@/components/dropdowns/Dropdowns.component'
import { ContentJob } from '@/pages/busqueda-de-oportunidades/components'
import { RequirementItem } from '@/models'

interface JodRequirementsProps {
  itemsJobs: RequirementItem[]
}

const JobRequirements = ({ itemsJobs }: JodRequirementsProps): JSX.Element => {
  const { width } = useWindowSize()

  return (
    <>
    {width < 960
      ? (
      <>
        {itemsJobs.map((item) => (
          <Dropdown
            className={styles.contentJobDrop}
            key={item.title}
            title={item.title}
            items={item.dataJob}
          />
        ))}
      </>
        )
      : (
      <section className={styles.contentjob}>
        {itemsJobs.map((item) => (
          <ContentJob key={item.title} title={item.title} items={item.dataJob} />
        ))}
      </section>
        )}
    </>
  )
}

export default JobRequirements
