import type { NextPage } from 'next'
import styles from '@styles/etica-y-cumplimiento/etica-y-cumplimiento.module.scss'
import { Public } from '@/layouts'
import { Card } from '@/pages/etica-y-cumplimiento/components'
import { EticaCumplimientoData } from '@/data'
import { useWindowSize } from '@/hooks'

const EticaCumplimiento: NextPage = () => {
  const { width } = useWindowSize()
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
      <section className={styles.Cards}>
      {width < 960
        ? (
          <>
          {EticaCumplimientoData.map((item, index) => (
            <Card
              key={index}
              content={item.content}
              srcImg={item.img}
              title={item.title}
            />
          ))}
          </>
          )
        : (
          <>
          <div className={styles.card1}>
            <Card content={EticaCumplimientoData[0].content} srcImg={EticaCumplimientoData[0].img} title={EticaCumplimientoData[0].title}/>
          </div>
          <div className={styles.card2}>
            <Card content={EticaCumplimientoData[1].content} srcImg={EticaCumplimientoData[1].img} title={EticaCumplimientoData[1].title} direction={'down'}/>
          </div>
          <div className={styles.card3}>
            <Card content={EticaCumplimientoData[2].content} srcImg={EticaCumplimientoData[2].img} title={EticaCumplimientoData[2].title} direction={'left'}/>
          </div>
          <div className={styles.card4}>
            <Card content={EticaCumplimientoData[3].content} srcImg={EticaCumplimientoData[3].img} title={EticaCumplimientoData[3].title} direction={'right'}/>
          </div>
          <div className={styles.card5}>
            <Card content={EticaCumplimientoData[4].content} srcImg={EticaCumplimientoData[4].img} title={EticaCumplimientoData[4].title} direction={'down'}/>
          </div>
          <div className={styles.card6}>
            <Card content={EticaCumplimientoData[5].content} srcImg={EticaCumplimientoData[5].img} title={EticaCumplimientoData[5].title}/>
          </div>
          </>
          )}
      </section>
    </Public>
  )
}

export default EticaCumplimiento
