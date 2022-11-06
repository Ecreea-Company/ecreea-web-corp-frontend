import { Footer } from '@/contents'
import { Public } from '@/layouts'
import { CrecimientoSostenible, ModeloNegocio } from '@/pages/inversores/content'
import type { NextPage } from 'next'

const Creadores: NextPage = () => {
  return (
    <Public titlePage="Inversores">
      <ModeloNegocio />
      <CrecimientoSostenible />
      <Footer />
    </Public>
  )
}

export default Creadores
