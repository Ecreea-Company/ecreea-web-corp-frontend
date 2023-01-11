import { Public } from '@/layouts'
import {
  CreacionDeImpacto,
  CrearParaCrear,
  Ecreadores,
  InspirarCrear,
  NuestraEsencia,
  Transformamos,
  UltimasInformaciones
} from '@/pages/home/content'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Public titlePage="Home">
      <InspirarCrear />
      <CrearParaCrear />
      <Transformamos />
      <CreacionDeImpacto />
      <Ecreadores />
      <NuestraEsencia />
      <UltimasInformaciones />

    </Public>
  )
}

export default Home
