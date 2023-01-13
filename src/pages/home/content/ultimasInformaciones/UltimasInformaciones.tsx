// styles
import styles from './UltimasInformaciones.module.scss'

import { CardBlog, LoadingPages } from '@/components'
import useSWR from 'swr'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { getArticulosForSWR } from '@/services'
import { cardBlogAdapter } from '@/adapters'
import { CardBlogProps } from '@/models'

const urlBlogs = `${process.env.NEXT_PUBLIC_API_URL}/posts?sort[0]=id%3Adesc&pagination[page]=1&pagination[pageSize]=3&fields[0]=slug&fields[1]=titulo&fields[2]=publishedAt&populate[0]=imagen&populate[1]=categoria`

const UltimasInformaciones = (): JSX.Element => {
  const { data: dataApi } = useSWR(urlBlogs, getArticulosForSWR)

  if (!dataApi) return <LoadingPages />

  const data = cardBlogAdapter(dataApi)

  return (
    <section className={styles.Section}>
      <h1 className={styles.Section__title}>Últimas informaciones</h1>
      <section className={styles.Section__blogs}>
        {data.map((post: CardBlogProps) => (
          <CardBlog key={post.slug} post={post} />
        ))}
      </section>
      <Link href="/blog">
        <a className={styles.Section__link}>
          <p>Ver más Noticias</p>
          <i>
            <MdKeyboardArrowRight />
          </i>
        </a>
      </Link>
    </section>
  )
}

export default UltimasInformaciones
