import { Footer } from '@/contents'
import { Public } from '@/layouts'
import { Header } from '@/pages/blog/components'
import { AllPosts, Hero } from '@/pages/blog/content'
import { getArticulos } from '@/services'
import type { NextPage, GetServerSideProps } from 'next'

const Blog: NextPage = ({ data, meta }: any) => {
  return (
    <Public titlePage="Blog">
      <Header />
      <Hero data={data[0]} />
      <AllPosts data={data} meta={meta} />
      <Footer />
    </Public>
  )
}

export default Blog

export const getServerSideProps: GetServerSideProps<{ data: any }> = async ({
  query: { page = 1 }
}) => {
  const dataCrudo: any = await getArticulos(page)

  const data = dataCrudo.data.map((obj: any) => {
    return {
      id: obj.id,
      title: obj.attributes.titulo,
      fecha_publicacion: obj.attributes.publishedAt,
      categoria: obj.attributes.categoria.data.attributes.nombre,
      imagen: obj.attributes.imagen.data.attributes.url
    }
  })

  const meta = {
    ...dataCrudo.meta
  }

  return {
    props: {
      data,
      meta
    }
  }
}
