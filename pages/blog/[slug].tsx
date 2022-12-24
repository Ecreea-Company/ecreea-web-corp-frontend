import { Footer } from '@/contents'
import { Public } from '@/layouts'
import { Header } from '@/pages/blog/components'
import { PostUser, ShareSocial } from '@/pages/blog/content'
import RecomendPost from '@/pages/blog/content/recomendPosts/RecomendPost'
import { getArticulos, getArticuloBySlug } from '@/services'

import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

const Post: NextPage = ({ data }: any) => {
  return (
    <Public titlePage={data.titulo}>
      <Head>
        <meta
          name="author"
          content={`${data.autor.nombre} ${data.autor.apellido}`}
        />
        <meta property="og:description" content={data.contenido} />
        <meta property="og:image" content={data.imagen} />
        <meta property="og:title" content={data.titulo} />
        <meta property="og:type" content="blog" />
        <meta
          property="og:url"
          content={`https://www.ecreea.com/blog/${data.id}`}
        />
      </Head>
      <Header />
      <PostUser data={data} />
      {/* <StandLibro /> */}
      <ShareSocial slug={data.slug} />
      <RecomendPost />
      <Footer />
    </Public>
  )
}

export default Post

export const getStaticProps: GetStaticProps<{ data: any }> = async ({
  params
}) => {
  const post = await getArticuloBySlug(params?.slug)

  const dataCruda = post.data[0]

  const postAdapter = {
    slug: dataCruda.attributes.slug,
    categoria: dataCruda.attributes.categoria.data.attributes.nombre,
    fecha_publicacion: dataCruda.attributes.publishedAt,
    titulo: dataCruda.attributes.titulo,
    autor: {
      nombre: dataCruda.attributes.createdBy.data.attributes.firstname,
      apellido: dataCruda.attributes.createdBy.data.attributes.lastname,
      area: dataCruda.attributes.rol_empresa,
      avatar:
      dataCruda.attributes.createdBy.data.attributes.username
    },
    imagen: dataCruda.attributes.imagen.data.attributes.url,
    descripcion_imagen: dataCruda.attributes.descripcion_imagen,
    contenido: dataCruda.attributes.contenido
  }

  return {
    props: {
      data: postAdapter

    },
    revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articules = await getArticulos()
  const paths = articules.data.map((obj: any) => ({
    params: { slug: obj.attributes.slug.toString() }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}
