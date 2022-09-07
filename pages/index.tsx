import { Public } from '@/layouts'
import { CrearParaCrear, InspirarCrear } from '@/pages/home/content'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Public titlePage='Home'>
      <InspirarCrear/>
      <CrearParaCrear/>
      <div style={{ minHeight: '100vh', background: 'orange' }}></div>
      <div style={{ minHeight: '100vh', background: 'gray' }}></div>
      <div style={{ minHeight: '100vh', background: 'orange' }}></div>
      <div style={{ minHeight: '100vh', background: 'gray' }}></div>
      <div style={{ minHeight: '100vh', background: 'orange' }}></div>
    </Public>
  )
}

export default Home
