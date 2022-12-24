import { getArticulosBySize } from '@/services'
import { useEffect, useState } from 'react'
import { CardRecomend } from '../../components'
import styles from './RecomendPost.module.scss'

const recomendPostAdapter = (data: any) => {
  const newData = data.map((post: any) => {
    return {
      slug: post.attributes.slug,
      img: post.attributes.imagen.data.attributes.url,
      categoria: post.attributes.categoria,
      titulo: post.attributes.titulo,
      fecha: post.attributes.publishedAt
    }
  }
  )
  return newData
}

function RecomendPost (): JSX.Element {
  const [posts, setPosts] = useState([] as any)

  useEffect(() => {
    getArticulosBySize(3)
      .then((posts) => recomendPostAdapter(posts.data))
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <section className={styles.Section}>
      <h3>Últimas noticias</h3>
      <div className={styles.Section__posts}>
        {posts.map((post: any) => (
          <CardRecomend
            key={post.slug}
            slug={post.slug}
            img={post.img}
            categoria={post.categoria}
            titulo={post.titulo}
            fecha={post.fecha}
          />
        ))}

      </div>
    </section>
  )
}

export default RecomendPost
