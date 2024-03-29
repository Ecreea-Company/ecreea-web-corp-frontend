/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { CardBlog } from '@/components'
import styles from './AllPosts.module.scss'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import { useRouter } from 'next/router'
import { CardBlogProps } from '@/models'

function AllPosts ({ data, meta }: any): JSX.Element {
  const router = useRouter()

  return (
    <section className={styles.Section}>
      <div className={styles.Section__posts}>
        {data.map((post: CardBlogProps) => (
          <CardBlog key={post.slug} post={post} />
        ))}
      </div>
      <div className={styles.Section__controls}>
        <button
          className={styles.Control}
          disabled={meta.pagination.page === 1}
          onClick={async () =>
            await router.push(`/blog?page=${meta.pagination.page - 1}`)
          }
        >
          <span>
            <MdArrowBackIos size={'1.5rem'} />
          </span>
          <span className={styles.Control__text}>Artículos recientes</span>
        </button>
        <button
          className={styles.Control}
          disabled={meta.pagination.pageCount === meta.pagination.page}
          onClick={async () =>
            await router.push(`/blog?page=${meta.pagination.page + 1}`)
          }
        >
          <span className={styles.Control__text}>Artículos anteriores</span>
          <span>
            <MdArrowForwardIos size={'1.5rem'} />
          </span>
        </button>
      </div>
    </section>
  )
}

export default AllPosts
