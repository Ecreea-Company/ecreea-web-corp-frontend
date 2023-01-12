import { Public } from '@/layouts'
import styles from '@styles/eventos/Beesply.module.scss'
import type { NextPage } from 'next'
import { Contenedores } from '@/pages/eventos/components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { LinkEcreea } from '@/components'
import { IoIosArrowForward } from 'react-icons/io'
import Image from 'next/image'

const Eventos: NextPage = () => {
  const firstParagraph = {
    title: 'Beesply una solución sostenible de Ecreea Company',
    text: 'En Ecreea company sabemos que para impulsar la transformación de un mundo más sostenible debemos empezar por pequeñas acciones,por ello se llevó a cabo el desarrollo de Beesply'
  }

  const secondParagraph = {
    title: '¿Pero de que se trata este novedoso proyecto?',
    text: 'Beesply es un sistema de abastecimiento automático que ayuda a reducir el tiempo de alimentación de las abejas que se encuentran en zonas poco accesibles para los operarios encargados de esta actividad.'
  }

  const thirdParagraph = {
    title: '¿Como se realiza todo el proceso del proyecto?',
    text: 'Inicialmente el proceso comenzó con la implementación de una manguera reforzada para soportar el terreno áspero donde se encuentran los paneles , estos cuentan con un sistema automático para el autoguardado. Adicionalmente, se incorporó un sistema de tuberías de acero inoxidable, que ayudaran a mantener la mezcla sin impurezas metálicas, gracias a un filtro de malla que evita la llegada de desechos. Finalmente, el sistema es puesto en marcha, alimentándose por un generador eléctrico, dicho sistema es capaz de mantener y saciar el hambre de las colmenas durante 8 horas.'
  }

  const fourthParagraph = {
    title: '¿Por qué es importante?',
    text: 'Creemos que es de vital importancia preservar la calidad de vida de la abeja, ya que es un animal fundamental para nuestro ecosistema e incluso para nosotros los humanos, por su importante acción de polinizar'
  }

  return (
    <Public titlePage="Eventos">
    <>
    <div className={styles.Section}>
      <p className={styles.Section__rect}>Eventos</p>
      <h1 className={styles.Section__title}>Beesply</h1>
      <h1 className={styles.Section__subtitle}>¡Sin abejas no existen ecosistemas!</h1>
    </div>

    <div className={styles.Section2}>
      <p className={styles.Section2__fecha}>Septiembre, 2022</p>
      <Contenedores title={firstParagraph.title} text={firstParagraph.text}></Contenedores>
      <Contenedores title={secondParagraph.title} text={secondParagraph.text}></Contenedores>
    </div>

    <Carousel className={styles.Section3} autoPlay={true} interval={3000} infiniteLoop={true} emulateTouch={true} showThumbs={false}>
      <div>
        <Image src={'/pages/eventos/beesply/even_1.jpg'} width={1920} height={1080}/>
      </div>
      <div>
        <Image src={'/pages/eventos/beesply/even_2.jpg'} width={1920} height={1080}/>
      </div>
      <div>
        <Image src={'/pages/eventos/beesply/even_3.jpg'} width={1920} height={1080}/>
      </div>
    </Carousel>

    <div className={styles.Section4}>
      <div className={styles.Container}>
        <Contenedores title={thirdParagraph.title} text={thirdParagraph.text}></Contenedores>
        <Contenedores title={fourthParagraph.title} text={fourthParagraph.text}></Contenedores>
      </div>
      <div className={styles.Container2}>
        <p>Si deseas saber más del proyecto contacta a nuestra Área de servicios</p>
        <LinkEcreea href='#' disabled={false}>
          <span className={styles.Boton}>
            <h1>Quiero saber más del Proyecto</h1>
            <div className={styles.Boton__icon}>
              <IoIosArrowForward/>
            </div>
          </span>
        </LinkEcreea>
      </div>
    </div>

    <Image src={'/pages/eventos/beesply/bg-beesply-3.jpg'} width={1920} height={1080}/>
    </>
    </Public>
  )
}

export default Eventos
