import { useState, useEffect } from 'react'
import { Public } from '@/layouts'
import type { NextPage } from 'next'
import styles from '@styles/ecreea/Ecreea.module.scss'
import { LinkRedirect, CarlosMobile, CarlosDesktop, Flecha, Menu, Contenedores } from '@/pages/ecreea/components'
import { useWindowSize } from '@/hooks'
import { centralMenuItems } from '@/pages/ecreea/data'
import TextTransition, { presets } from 'react-text-transition'

const Ecreea: NextPage = () => {
  const { width } = useWindowSize()

  const firstParagraph = {
    title: 'Clientes',
    text: 'Esto es para los creadores, para los que tienen miedos y para los que conquistan esos miedos, para los que siempre intentan, para los que fallan intentando y los que fallan en grande, los que se ríen en una caída, para los que sueñan con lápiz en mano, para los que se inspiran y aspiran lo imposible, para los que nunca paran, para todos los que pueden creer, crean!'
  }

  const secondParagraph = {
    title: '¡Ecreea!',
    text: 'Bienvenido a ecreear'
  }

  const TEXTS = [
    'Centrados en el cliente y sus necesidades, trabajamos en base a este principio, permitiéndonos servir sosteniblemente todos sus deseos.',
    'Ver más allá de lo establecido, ver lo que no todos pueden ver, inspirados en grandes metas y trabajar incanzablemente para lograrlo.',
    'Los líderes se direccionan a estándares altos, para muchos “Imposibles". Nuestro equipo crea servicios integrales, que les permiten tener  el poder de hacer la diferencia.',
    'Los líderes buscamos nuevas ideas, experiencias y retos que nos impulsen a trazar un camino que no existe. Creamos  nuestro  propio significado de innovación.'
  ]

  const [index, setIndex] = useState(0)
  const conditionInterval = () => { index === TEXTS.length - 1 ? setIndex(0) : setIndex(index + 1) }
  useEffect(() => {
    const intervalId = setInterval(() =>
      conditionInterval(),
    9000)
    return () => {
      clearTimeout(intervalId)
    }
  }, [index])

  return (
    <Public titlePage='Ecreea'>
      <>
      <div className={styles.Section}>
          {width < 960
            ? (
              <>
              <div className={styles.Container}>
              <Flecha/>
              </div>
              </>
              )
            : (
                <Menu
                  itemsList={centralMenuItems}
                  customStyle={{ paddingRight: 'clamp(2rem, 7vw, 5.5rem)', paddingBottom: '2rem' }}
                  direction= 'row'
              />
              )}
        <Contenedores text={firstParagraph.text} fontSizeText={'clamp(1.13rem, 4vw ,4.06rem)'} padding={'clamp(2rem, 7vw, 5.5rem)'}/>
        <Contenedores title={secondParagraph.title} text={secondParagraph.text} fontSizeTitle={'clamp(3.7rem,16vw,18.75rem)'} fontSizeText={'clamp(1.13rem, 4vw ,4.06rem)'} padding={'clamp(2rem, 7vw, 5.5rem)'} />
      </div>

      <div className={styles.Section2}>
        <div className={styles.Container}>
          <h1 className={styles.Container__title}>Sé Artista</h1>
          <h1 className={styles.Container__title}>Sé Apasionado</h1>
          <h1 className={styles.Container__title}>Sé un Creador</h1>
          <h1 className={styles.Container__subtitle}>Cree en ti y en tu poder creativo, eres capaz de crear lo que quieras.</h1>
        </div>
      </div>

      <div className={styles.Section3}>
        <h1 className={styles.Section3__title}>El trabajo en Ecreea</h1>
        <h1 className={styles.Section3__frase}>Únete a nosotros y ama tus sueños</h1>
        <p className={styles.Section3__paragraph}>Descubre cómo puedes crear, conoce nuestra filosofía, forma de trabajar y oportunidades de desarrollo.</p>
        <LinkRedirect
          text="Conoce como es trabajar en Ecreea"
          colorText="var(--text-font-color)"
          url='/contacto'
          disabled={false}
        />
      </div>

      {width < 960
        ? (
          <CarlosMobile/>
          )
        : (
          <CarlosDesktop/>
          )}

      <div className={styles.Section5}>
        <div className={styles.Container}>
          <h1 className={styles.Container__title}>Aprende incanzablemente</h1>
          <h1 className={styles.Container__subtitle}>Invierte en tu futuro</h1>
          <LinkRedirect
          text="Aprende con nosotros"
          colorText="white"
          url='/ecreea/aprende-con-nosotros'
          disabled={false}
        />
        </div>
        <h1 className={styles.Section5__title}>Nuestros valores se centran en todo lo que creamos</h1>
      </div>

      <div className={styles.Section6}>
        <div className={styles.Container}>
          <h1 className={styles.Container__title}>Sin valor no hay creación</h1>
          <h1 className={styles.Container__subtitle}>Eres lo que creas</h1>
        </div>

        <ul className={styles.Section6__frase}>
          <li className={styles.MaquinaEscribir__item}>
            <span>Obsesión por el cliente</span>
          </li>
          <li className={styles.MaquinaEscribir__item}>
            <span>Visionarios</span>
          </li>
          <li className={styles.MaquinaEscribir__item}>
            <span>Excelencia operativa</span>
          </li>
          <li className={styles.MaquinaEscribir__item}>
            <span>Pasión por la Innovación</span>
          </li>
        </ul>

        <div className={styles.Section6__paragraph}>
          <TextTransition springConfig={presets.wobbly} direction={'down'}>
          {TEXTS[index]}
        </TextTransition>
        </div>

        <LinkRedirect
          text="Buscar oportunidades"
          colorText="white"
          url='/buscar-oportunidades'
          disabled={true}
        />
      </div>
      </>
    </Public>
  )
}

export default Ecreea
