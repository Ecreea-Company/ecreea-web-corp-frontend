import { Public } from '@/layouts'
import styles from '@styles/contacto/Contacto.module.scss'
import { Contactos } from '@/pages/contacto/components'
import type { NextPage } from 'next'
import { Datos1, Datos2, Datos3, Datos4, Datos5, Datos6 } from '@/data'

const Sostenibilidad: NextPage = () => {
  return (
    <Public titlePage="Contacto">
      <>
      <div className={styles.Section}>
        <div className={styles.Fondo}>
          <div className={styles.Container1}>
            <h1 className={styles.Container1__title}>
            Siempre
            </h1>
            <h1 className={styles.Container1__title}>
            conectados
            </h1>
          </div>
        </div>
        <div className={styles.Container2}>
          <div className={styles.Titulo}>
            <h1 className={styles.Titulo__title}>Contacto</h1>
            <h1 className={styles.Titulo__title}>Inversores y Accionistas</h1>
          </div>
          <Contactos title={Datos1.title} text1={Datos1.text1} text2={Datos1.text2} ></Contactos>
          <div className={styles.Line}></div>
        </div>
      </div>

      <div className={styles.Section2}>
        <div className={styles.Titulo}>
          <h1 className={styles.Titulo__title}>Contactos</h1>
          <h1 className={styles.Titulo__title}>Corporativos</h1>
        </div>
        <div className={styles.Texto}>
          <Contactos title={Datos2.title} text1={Datos2.text1} text2={Datos2.text2} text3={Datos2.text3} ></Contactos>
          <Contactos title={Datos3.title} text1={Datos3.text1} text2={Datos3.text2} text3={Datos3.text3} ></Contactos>
          <Contactos title={Datos4.title} text1={Datos4.text1} text2={Datos4.text2} text3={Datos4.text3}></Contactos>
          <Contactos title={Datos5.title} text1={Datos5.text1} text2={Datos5.text2} ></Contactos>
        </div>
      </div>

      <div className={styles.Section3}>
      <div className={styles.Line}></div>
        <div className={styles.Container}>
          <div className={styles.Titulo}>
            <h1 className={styles.Titulo__title}>Contacto</h1>
            <h1 className={styles.Titulo__title}>Talento</h1>
          </div>
          <Contactos title={Datos6.title} text1={Datos6.text1} text2={Datos6.text2} ></Contactos>
        </div>
        <div className={styles.Line}></div>
      </div>

      <div className={styles.Section4}>
        <div className={styles.Titulo}>
          <h1 className={styles.Titulo__title}>Información</h1>
          <h1 className={styles.Titulo__title}>corporativa</h1>
        </div>
        <div className={styles.Container}>
          <div className={styles.Container__caja}>
            <p>Ecreea Company.</p>
            <p>Trujillo, Perú.</p>
          </div>
          <div className={styles.Container__caja}>
            <p><span>RUC:</span> 20605479686</p>
            <div>
              <span>N° de Partida registral:</span>
              <p>10234567890987654</p>
            </div>
          </div>
          <div className={styles.Container__caja}>
            <p>Inscrito en el registro público de Trujillo, Perú</p>
          </div>
        </div>
      </div>
    </>
    </Public>
  )
}

export default Sostenibilidad
