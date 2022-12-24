import { Footer } from '@/contents'
import { Public } from '@/layouts'
import { Header } from '@/pages/blog/components'
import { AllPosts, Hero } from '@/pages/blog/content'
import { getArticulosByPage } from '@/services'
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
  query: { page = 1 }, res
}) => {
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  const dataCrudo: any = await getArticulosByPage(page)

  const data = dataCrudo.data.map((obj: any) => {
    return {
      slug: obj.attributes.slug,
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
