import { Public } from '@/layouts'
import {
  Comercio,
  Energia,
  InnovarEsCrear,
  Logistica,
  ViajeCreativo
} from '@/pages/innovacion/content'
import type { NextPage } from 'next'

const Creadores: NextPage = () => {
  return (
    <Public titlePage="Innovación">
      <InnovarEsCrear />
      <ViajeCreativo />
      <Comercio />
      <Energia />
      <Logistica />
    </Public>
  )
}

export default Creadores
