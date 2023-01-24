import type { NextPage } from 'next'
import styles from '@styles/etica-y-cumplimiento/etica-y-cumplimiento.module.scss'
import { Public } from '@/layouts'
import { Card } from '@/pages/etica-y-cumplimiento/components'
import { EticaCumplimientoData } from '@/data'

const EticaCumplimiento: NextPage = () => {
  return (
    <Public titlePage="Ética y cumplimiento">
      <section className={styles.Info}>
        <h1>Ética y cumplimiento</h1>
        <p>
          En Ecreea estamos comprometidos en ofrecer una cultura integra, a
          través de la creación de negocios con principios. Contamos con las
          normas de conducta más rigurosas entre las corporaciones más
          competitivas, ya que hacemos uso pleno del cumplimiento de la ley.
          Creemos que hacer lo correcto nos permitirá ser el líder de confianza
          en la transformación de un mundo sostenible que brinde soluciones y
          mejoras en la calidad de vida de la sociedad.
        </p>
      </section>
      <section className={styles.Cita}>
        <p>“Creamos compromiso para impulsar un mundo con visión”</p>
        <span>Holiver Ulloa.</span>
      </section>
      {EticaCumplimientoData.map((item, index) => (
        <Card
          key={index}
          content={item.content}
          srcImg={item.img}
          title={item.title}
          directionImage={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </Public>
  )
}

export default EticaCumplimiento
