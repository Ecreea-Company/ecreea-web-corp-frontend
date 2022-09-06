import { Public } from '@/layouts'
import type { NextPage } from 'next'
import InspirarCrear from '../src/pages/home/content/InspirarCrear'

const Home: NextPage = () => {
  return (
    <Public titlePage='Home'>
      <InspirarCrear/>
      <div style={{ minHeight: '100vh', background: 'gray' }}></div>
      <div style={{ minHeight: '100vh', background: 'orange' }}></div>
      <div style={{ minHeight: '100vh', background: 'gray' }}></div>
      <div style={{ minHeight: '100vh', background: 'orange' }}></div>
      <div style={{ minHeight: '100vh', background: 'gray' }}></div>
      <div style={{ minHeight: '100vh', background: 'orange' }}></div>
    </Public>
  )
}

export default Home
