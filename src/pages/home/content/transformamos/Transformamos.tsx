import { useState } from 'react'
import { ImageFill, TitleDegradado } from '@/components'
import { Carousel, WindowCardConstruccion, WindowCardEnergia, WindowCardIndustrial } from '../../components'
import styles from './Transformamos.module.scss'

const cards = [
  {
    component: (
      <ImageFill src="/pages/home/tab_industrial.png" alt="E2B-Ecreea" />
    ),
    title: 'Transformamos adquisiciones industriales',
    // Use styles para inyectar BackgroundClipText
    styles: styles.Title__industrial,
    card: (<WindowCardIndustrial />)
  },
  {
    component: (
      <ImageFill src="/pages/home/tab_energia.png" alt="Energix-Ecreea" />
    ),
    title: 'Transformamos la energía',
    // Use styles para inyectar BackgroundClipText
    styles: styles.Title__energia,
    card: (<WindowCardEnergia />)
  },
  {
    component: (
      <ImageFill src="/pages/home/tab_construccion.png" alt="Building-Ecreea" />
    ),
    title: 'Transformamos la construcción',
    // Use styles para inyectar BackgroundClipText
    styles: styles.Title__construccion,
    card: (<WindowCardConstruccion />)
  }
]

function Transformamos (): JSX.Element {
  const [centerIndex, setCenterIndex] = useState(0)
  const components = cards.map((card) => card.component)

  return (
    <section className={styles.Section}>
      <TitleDegradado
        text={cards[centerIndex].title}
        degradado={cards[centerIndex].styles}
      />

      <Carousel
        cards={components}
        index={centerIndex}
        changeIndex={setCenterIndex}
        windowCard={cards[centerIndex].card}
      />
    </section>
  )
}

export default Transformamos
