import { CardRecomend } from '../../components'
import styles from './RecomendPost.module.scss'

function RecomendPost ({ data }: any): JSX.Element {
  return (
    <section className={styles.Section}>
      <h3>Últimas noticias</h3>
      <div className={styles.Section__posts}>
        {data.map((post: any) => (
          <CardRecomend
            key={post.id}
            id={post.id}
            img={post.imagen}
            categoria={post.categoria}
            titulo={post.titulo}
            fecha={post.fecha_publicacion}
          />
        ))}
      </div>
    </section>
  )
}

export default RecomendPost
