import { Public } from '@/layouts'
import styles from '@styles/ecreea/Aprende.module.scss'
import type { NextPage } from 'next'
import { LinkRedirect, Contenedores, DropMenu } from '@/pages/ecreea/components'

const Aprende: NextPage = () => {
  const firstParagraph = {
    title: 'Aprende Incanzable',
    text: 'Invierte en tu futuro'
  }
  return (
    <Public isFixed={false} titlePage="Aprende con Nosotros">
      <DropMenu/>
      <div className={styles.Section}>
        <Contenedores title={firstParagraph.title} text={firstParagraph.text} fontSizeTitle={'clamp(2.7rem,9vw,9rem)'} fontSizeText={'clamp(1.13rem, 5vw ,5rem)'} gap={'1rem'}/>
      </div>

      <div className={styles.Section2}>
        <div className={styles.Container}>
          <h1 className={styles.Container__title}>Plataformas de Aprendizaje Continuo</h1>
          <h1 className={styles.Container__subtitle}>Trabajamos con el futuro de la educación</h1>
        </div>
        <p className={styles.Section2__parrafo}>Cada talento participa de nuestro programa Ecreeador X, el objetivo es facilitar que los talentos adquieran nuevas habilidades en plataformas lideres en educación: Platzi, Crehana y Udemy, que les ayuden a desarrollar su carrera, ya sea en ecreea o en cualquier otro lugar.</p>
        <LinkRedirect
          text="Da el primer paso"
          colorText="var(--text-font-color)"
          url='/contacto'
          disabled= {false}
        />
      </div>

      <div className={styles.Section3}>
        <p className={styles.Section3__title}>¡Nunca pares de aprender!</p>
        <LinkRedirect
          text="Aprende con nosotros"
          colorText="white"
          url='/contacto'
          disabled= {false}
        />
      </div>
    </Public>
  )
}

export default Aprende
