import styles from '@styles/ecreea/Trabajo.module.scss'
import { Public } from '@/layouts'
import type { NextPage } from 'next'
import { LinkRedirect, Flecha, Menu, Contenedores } from '@/pages/ecreea/components'
import { UCV, UPAO, UPN } from '@/assets/logos'
import { useWindowSize } from '@/hooks'
import { centralMenuItems } from '@/pages/ecreea/data'

const Trabajo: NextPage = () => {
  const { width } = useWindowSize()

  const firstParagraph = {
    title: 'El futuro le pertenece a quienes crean',
    text: 'Ven a crear cosas grades con nosotros'
  }

  const secondParagraph = {
    title: 'Únete a nosotros y ama tus sueños',
    text: 'Ten la valentía de amar tus sueños y perseguirlos, si aún no estás seguro que amas hacer ¡sirve!, el camino hallará tu propósito y harás “eso” por lo cual viniste a la tierra.'
  }
  return (
    <Public titlePage='El trabajo en Ecreea'>
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
                  customStyle={{ padding: 'clamp(2rem, 7vw, 5.5rem)' }}
                  direction= 'row'
              />
            )}
        <Contenedores title={firstParagraph.title} text={firstParagraph.text} fontSizeTitle={'clamp(2.7rem,9vw,9rem)'} fontSizeText={'clamp(1.13rem, 5vw ,5rem)'} gap={'1rem'} padding={'clamp(2rem, 7vw, 5.5rem)'}/>
        <Contenedores title={secondParagraph.title} text={secondParagraph.text} fontSizeTitle={'clamp(2.7rem,9vw,9rem)'} fontSizeText={'clamp(1.13rem, 3vw ,3.13rem)'} gap={'1rem'} padding={'clamp(2rem, 7vw, 5.5rem)'}/>
      </div>

      <div className={styles.Section2}>
        <div className={styles.Container}>
          <h1 className={styles.Container__title}>Oportunidades para Gradudados</h1>
          <h1 className={styles.Container__subtitle}>Siempre hay espacio para crear</h1>
        </div>
        <p className={styles.Section2__parrafo}>Trabajar en ecreea nunca será cómodo, este es el punto donde la ingeniería, tecnología y arte danzan, tienes que no estar preparado para ello, dejarte llevar por lo que amas hacer es primordial, así es como se desata la genialidad. Por eso nunca nos cansamos de buscar apasionados en todos las diciplinas, hay tanto que hacer, descubrir y oportunidades que desarrollar que lo que sobra es espacio para crear.</p>
        <p className={styles.Section2__parrafo2}>Déjate descubrir. Preséntate y nos pondremos en contacto contigo si hay una oportunidad para tu perfil.</p>
        <LinkRedirect
          text="Da el primer paso"
          colorText="var(--text-font-color)"
          url='/contacto'
          disabled={true}
        />
      </div>

      <div className={styles.Section3}>
        <p className={styles.Section3__parrafo}>Cuando entras a ecreea como estudiante, tus opiniones tienen mucho valor para nosotros, tanto como cualquiera del equipo, todos pueden crear y este es solo uno de tantos motivos por los que tu trabajo aquí, dejará huella.</p>
        <p className={styles.Section3__parrafo}>Aprenderás en proyectos reales de gran escala, colaborando con grandes talentos y de seguro aprenderemos mucho de ti.</p>
      </div>

      <div className={styles.Section4}>
        <div className={styles.Container}>
          <h1 className={styles.Container__title}>Oportunidades para Estudiantes</h1>
          <h1 className={styles.Container__subtitle}>Prácticas para estudiantes de Pre-Grado y Post-Grado</h1>
        </div>
        <p className={styles.Section4__parrafo}>En ecreea cada estudiante es diamante en bruto, con gran talento para crear, ya sea en prácticas o curso entero. El aprendizaje será el eje de todo, donde grandes creadores, que hoy marcan el rumbo de la compañía, estarán para enseñarte y servir en tu desarrollo.</p>
        <p className={styles.Section4__parrafo2}>Desarrollamos convenios con las mejores Universidades del Perú para el desarrollo de prácticas y proyectos universitarios de nuevos talentos.</p>
        <div className={styles.Imagenes}>
          <div className={styles.centrado}>
            <UCV/>
          </div>
          <div className={styles.centrado}>
            <UPN/>
          </div>
          <div className={styles.centrado}>
            <UPAO/>
          </div>
        </div>
        <LinkRedirect
          text="Ven a descubrirte"
          colorText="var(--text-font-color)"
          url='/contacto'
          disabled={true}
        />
      </div>
    </Public>
  )
}

export default Trabajo
