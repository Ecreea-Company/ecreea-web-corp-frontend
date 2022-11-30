import { Footer } from '@/contents'
import { Public } from '@/layouts'
import { Header, StandLibro } from '@/pages/blog/components'
import { PostUser, ShareSocial } from '@/pages/blog/content'
import RecomendPost from '@/pages/blog/content/recomendPosts/RecomendPost'
import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

const Post: NextPage = ({ data, dataRecomend }: any) => {
  return (
    <Public titlePage={data.titulo}>
      <Head>
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
      <ShareSocial id={data.id} />
      <RecomendPost data={dataRecomend} />
      <Footer />
    </Public>
  )
}

export default Post

export const getStaticProps: GetStaticProps<{ data: any }> = async ({
  params
}) => {
  const res = await fetch(
    `https://strapi-production-d105.up.railway.app/api/articulos/${params?.id}?populate[autor][populate][0]=area&populate[autor][populate][1]=fotoPerfil&populate[imagen][populate][2]=*&populate[categoria][populate][3]=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }
  )
  const dataCrudo: any = await res.json()
  const data = {
    id: dataCrudo.data.id,
    categoria: dataCrudo.data.attributes.categoria.data.attributes.nombre,
    fecha_publicacion: dataCrudo.data.attributes.publishedAt,
    titulo: dataCrudo.data.attributes.titulo,
    autor: {
      nombre: dataCrudo.data.attributes.autor.data.attributes.nombre,
      apellido: dataCrudo.data.attributes.autor.data.attributes.apellido,
      area: dataCrudo.data.attributes.autor.data.attributes.area.data.attributes
        .nombre,
      avatar:
        dataCrudo.data.attributes.autor.data.attributes.fotoPerfil.data
          .attributes.url
    },
    imagen: dataCrudo.data.attributes.imagen.data.attributes.url,
    descripcion_imagen: dataCrudo.data.attributes.descripcion_imagen,
    contenido: dataCrudo.data.attributes.contenido
  }

  const resRecomend = await fetch(
    'https://strapi-production-d105.up.railway.app/api/articulos?sort[0]=id%3Adesc&pagination[pageSize]=3&fields[0]=titulo&fields[1]=publishedAt&populate[0]=categoria&populate[1]=imagen',
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }
  )

  const dataCrudoRecomend: any = await resRecomend.json()

  const dataRecomend = dataCrudoRecomend.data.map((obj: any) => {
    return {
      id: obj.id,
      titulo: obj.attributes.titulo,
      fecha_publicacion: obj.attributes.publishedAt,
      categoria: obj.attributes.categoria.data.attributes.nombre,
      imagen: obj.attributes.imagen.data.attributes.url
    }
  })
  return {
    props: {
      data,
      dataRecomend
    },
    revalidate: 10
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://strapi-production-d105.up.railway.app/api/articulos',
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`
      }
    }
  )
  const paths = await res.json()
  const data = paths.data.map((obj: any) => ({
    params: { id: obj.id.toString() }
  }))

  return {
    paths: data,
    fallback: 'blocking'
  }
}
