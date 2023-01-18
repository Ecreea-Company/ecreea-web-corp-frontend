import type { NextPage } from 'next'
import { useStateMode } from '@/hooks'
import { Public } from '@/layouts'
import {
  Costo,
  CrecimientoSostenible,
  Fuerza,
  Huella,
  ModeloNegocio,
  Proyeccion,
  Somos
} from '@/pages/inversores/content'
import Skeleton from 'react-loading-skeleton'

const Creadores: NextPage = () => {
  const mode = useStateMode()

  if (mode === '') return <Skeleton height={100} />

  return (
    <Public titlePage="Inversores">
      <ModeloNegocio />
      <CrecimientoSostenible mode={mode} />
      <Somos mode={mode}/>
      <Proyeccion mode={mode} />
      <Fuerza />
      <Costo mode={mode}/>
      <Huella />
    </Public>
  )
}

export default Creadores
