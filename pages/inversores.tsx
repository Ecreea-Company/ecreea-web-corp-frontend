import { Footer } from '@/contents'
import { Public } from '@/layouts'
import { Costo, CrecimientoSostenible, Fuerza, Huella, ModeloNegocio, Proyeccion, Somos } from '@/pages/inversores/content'
import type { NextPage } from 'next'

const Creadores: NextPage = () => {
  return (
    <Public titlePage="Inversores">
      <ModeloNegocio />
      <CrecimientoSostenible />
      <Somos />
      <Proyeccion />
      <Fuerza />
      <Costo />
      <Huella />
      <Footer />

    </Public>
  )
}

export default Creadores
