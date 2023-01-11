import { Public } from '@/layouts'
import { ComoLoHacemos, PorqueLoHacemos, SomosArtistas, Transformamos, TransformamosObjetivos, TransformamosValores } from '@/pages/creadores/content'
import type { NextPage } from 'next'

const Creadores: NextPage = () => {
  return (
    <Public titlePage="Creadores">
      <SomosArtistas/>
      <PorqueLoHacemos/>
      <ComoLoHacemos/>
      <Transformamos/>
      <TransformamosValores/>
      <TransformamosObjetivos/>
    </Public>
  )
}

export default Creadores
