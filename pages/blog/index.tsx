import { cardBlogAdapter } from '@/adapters'
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
    </Public>
  )
}

export default Blog

export const getServerSideProps: GetServerSideProps<{ data: any }> = async ({
  query: { page = 1 }
}) => {
  const dataApi: any = await getArticulosByPage(page)

  const data = cardBlogAdapter(dataApi)

  const meta = {
    ...dataApi.meta
  }

  return {
    props: {
      data,
      meta
    }
  }
}
