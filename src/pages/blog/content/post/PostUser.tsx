/* eslint-disable react/no-children-prop */
import styles from './PostUser.module.scss'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Redes } from '../../components'
import remarkGfm from 'remark-gfm'

function PostUser ({ data }: any): JSX.Element {
  const unixdate = Date.parse(data.fecha_publicacion)
  const dateObject = new Date(unixdate)
  const humanDateFormat = dateObject.toLocaleString('es-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  return (
    <section className={styles.Section}>
      <div className={styles.Section__initial}>
        <h3>{`${data.categoria} |`}</h3>
        <h3>{humanDateFormat}</h3>
      </div>

      <h1>{data.titulo}</h1>

      <div className={styles.Section__redesTop}>
        <Redes id={data.id} />
      </div>

      <div className={styles.Autor}>
        <div className={styles.Autor__avatar}>
          <Image src={data.autor.avatar} layout="fill" objectFit="cover" />
        </div>
        <div className={styles.Autor__info}>
          <h5>{`${data.autor.nombre} ${data.autor.apellido}`}</h5>
          <p>{data.autor.area}</p>
        </div>
      </div>

      <div className={styles.ImagenPost}>
        <div className={styles.ImagenPost__hero}>
          <Image src={data.imagen} layout="fill" objectFit="cover" />
        </div>
        <p className={styles.ImagenPost__descrip}>{data.descripcion_imagen}</p>
      </div>

      <ReactMarkdown className={styles.ContentPost} remarkPlugins={[remarkGfm]}>
        {data.contenido}
      </ReactMarkdown>
    </section>
  )
}

export default PostUser
