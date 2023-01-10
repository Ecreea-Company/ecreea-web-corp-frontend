import { Public } from '@/layouts'
import styles from '@styles/sostenibilidad/Sostenibilidad.module.scss'
import { Contenedores } from '@/pages/sostenibilidad/components'
import type { NextPage } from 'next'

const Sostenibilidad: NextPage = () => {
  const firstParagraph = {
    text: 'Cada creador hace de ecreea un gran lugar de desarrollo, existimos por cada uno de nuestros artistas, nos aseguramos que se desarrollen sosteniblemente con un gran propósito alineado a su vida, el de ser mejor cada día, por cada uno, por su familia, su equipo, su país y el mundo.'
  }

  const secondParagraph = {
    title: 'Clientes',
    text: 'Apasionados por nuestra razón de existir, el cliente es nuestro centro y eje de todos nuestra pasión y creatividad. Nos debemos a ellos cada día en esforzarnos para ganarnos su confianza y mantenerla.'
  }

  const thirdParagraph = {
    title: 'Proveedores y Socios',
    text: 'Comprometidos con nuestros socios estratégicos, generamos relaciones basadas en la confianza y lealtad, nos esforzamos por crecer sosteniblemente con mejores prácticas, procesos y tecnología. Nuestro crecimiento es el de nuestros proveedores, luchamos incansablemente por aumentar la productividad, calidad de productos y/o servicios.'
  }
  return (
    <Public titlePage="Sostenibilidad">
      <>
      <div className={styles.Section}>
        <h1 className={styles.Section__title}>
          Comprometidos
        </h1>
        <h1 className={styles.Section__title}>
          & apasionados
        </h1>
      </div>

      <div className={styles.Section2}>
        <p className={styles.Section2__paragraph}>
          Nos comprometemos a crear una corporacion sostenible para nuestros clientes, nuestros equipo y las comunidades a las que pertenecen. Avanzamos hacia un futuro con cero emisiones netas de carbono, en el que todas las personas que forman parte de nuestra cadena de valor sean tratadas con dignidad y respeto.
        </p>
      </div>

      <div className={styles.Section3}>
        <div className={styles.Section3__fondo}>
          <div className={styles.Description}>
            <h1 className={styles.Description__title}>Con nuestro equipo</h1>
            <p className={styles.Description__subtitle}>Creadores de éxito</p>
          </div>
          <Contenedores text={firstParagraph.text} widthN={'clamp(19rem,80vw,75rem)'} alignItems={'flex-end'} paddingBot={'clamp(6rem,15vw,15rem)'}/>
        </div>
      </div>

      <div className={styles.Section4}>
        <div className={styles.Section4__title}>
          <h1>Con el aprendizaje</h1>
          <p>¡Nunca pares de aprender!</p>
        </div>
        <div className={styles.Section4__paragraph}>
          <h1>Plataformas de Aprendizaje Continuo</h1>
          <p>Cada talento participa de nuestro programa Ecreeador X, el objetivo es facilitar que los talentos  adquiriran nuevas habilidades en plataformas lideres en educacion: Platzi, Crehana y Udemy, que les ayuden a desarrollar su carrera, ya sea en ecreea o en cualquier otro lugar.</p>
        </div>
        <div className={styles.Section4__paragraph}>
          <h1>Prácticas Pre - Profesionales</h1>
          <p>Desarrollamos convenios con las mejores Univesidades del Perú para el desarrollo de practicas y proyectos universitarios de nuevos talentos.</p>
        </div>
      </div>

      <div className={styles.Section5}>
        <div className={styles.Description}>
          <h1 className={styles.Description__title}>Con nuestras operaciones</h1>
          <p className={styles.Description__subtitle}>Apasionados y Comprometidos </p>
        </div>
        <div className={styles.Grid1}>
          <Contenedores title={secondParagraph.title} text={secondParagraph.text} widthN={'clamp(19rem,40vw,50rem)'} alignItems={'flex-end'}/>
        </div>
        <div className={styles.Grid2}>
          <Contenedores title={thirdParagraph.title} text={thirdParagraph.text} widthN={'clamp(22rem,80vw,75rem)'} alignItems={'flex-start'}/>
        </div>
      </div>

      <div className={styles.Section6}>
        <div className={styles.Description}>
          <h1 className={styles.Description__title}>“Servir es nuestro verdadero proposito”</h1>
          <p className={styles.Description__subtitle}>Amarás a tu prójimo como a ti mismo (Mt. 22, 34-40)</p>
        </div>
        <div className={styles.Container}>
          <div className={styles.Container__paragraph}>
            <h1>A la sociedad</h1>
            <p>Desarrollamos programas de labor social y caridad todos los fines de año, para ayudar en distintas necesidades a nuestra localidad y region. </p>
          </div>
          <div className={styles.Container__paragraph}>
            <h1>Al medio ambiente</h1>
            <p>Tenemos el compromiso de que el 100% de nuestras operaciones funcione con energía renovable para 2030, y vamos camino de lograrlo para 2025.</p>
          </div>
        </div>
      </div>
    </>
    </Public>
  )
}

export default Sostenibilidad
