// npm packages
import { useWindowSize } from '@/hooks'
import Link from 'next/link'
import { useState } from 'react'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlinePlus
} from 'react-icons/ai'
import { List } from './components'

// styles
import styles from './Footer.module.scss'

// datos del footer
const data = [
  {
    title: 'Mapa del sitio',
    items: [
      {
        text: 'Creadores',
        url: 'creadores'
      },
      {
        text: 'Inversores',
        url: 'inversores'
      },
      {
        text: 'Innovación',
        url: 'innovacion'
      },
      {
        text: 'Sostenibilidad',
        url: 'sostenibilidad'
      }
    ]
  },
  {
    title: '¡ecreea!',
    items: [
      {
        text: 'Sé un creador',
        url: 'seuncreador'
      },
      {
        text: 'Aprendizaje continuo',
        url: 'aprendizajecontinuo'
      }
    ]
  },
  {
    title: 'Acerca de Ecreea',
    items: [
      {
        text: 'Liderazgo de Ecreea',
        url: 'liderazgoecreea'
      },
      {
        text: 'Ética y cumplimiento',
        url: 'eticaycumplimiento'
      },
      {
        text: 'Eventos',
        url: 'eventos'
      }
    ]
  },
  {
    title: 'Ayuda',
    items: [
      {
        text: 'Centro de Ayuda',
        url: 'centrodeayuda'
      },
      {
        text: 'Preguntas Frecuentes',
        url: 'preguntasfrecuentes'
      }
    ]
  }
]

const Footer = (): JSX.Element => {
  const { width } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (): void => {
    setIsOpen(!isOpen)
  }
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__Block1}>
        {data.map((item, index) => (
          <List key={index} title={item.title} items={item.items} />
        ))}
        <section className={styles.Block1__section}>
          {width > 1200
            ? (
            <h6 className={styles.Block1__title}>Contáctanos</h6>
              )
            : (
            <h6 className={styles.Block1__title} onClick={handleOpen}>
              <span>Contáctanos</span>
              <span
                style={{ marginRight: '4vw', fontSize: '4vw', width: '4vw' }}
              >
                {isOpen ? <AiOutlineClose /> : <AiOutlinePlus />}
              </span>
            </h6>
              )}

          <ul
            className={
              isOpen
                ? `${styles.Block1__list} ${styles.Block1__list__open}`
                : styles.Block1__list
            }
          >
            <li>Centro de Atención</li>
            <li className={styles.Block1__redes}>
              <a
                href="https://www.facebook.com/ecreaacompany"
                className={styles.Block1__icon}
              >
                <AiFillFacebook />{' '}
              </a>
              <a
                href="https://www.youtube.com/channel/UCnw8gA_t9BecaMmJybb2lAA/videos"
                className={styles.Block1__icon}
              >
                <AiFillYoutube />
              </a>
              <a
                href="https://www.linkedin.com/company/ecreea-company/"
                className={styles.Block1__icon}
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className={styles.Footer__Block2}>
        <div className={styles.Block2__top}>
          <p>
            Copyright © 2020 Ecreea Company S.A.C. Todos los derechos son
            reservados. Desarrollado por Ecreea.
          </p>
        </div>
        <div className={styles.Block2__bottom}>
          <ul className={styles.Block2__list}>
            <li>
              <Link href={'/politicaPrivacidad'}>
                <a>Política de privacidad</a>
              </Link>
            </li>
            <li>
              <Link href={'/terminosUso'}>
                <a>Terminos de uso</a>
              </Link>
            </li>
            <li>
              <Link href={'/cookies'}>
                <a>Cookies</a>
              </Link>
            </li>
          </ul>
          <div className={styles.Block2__bandera}>
            <p>Somos libres, seámoslo siempre </p>
            <img
              src="/banderaPeru.jpg"
              alt="bandera-peru"
              className={styles.Block2__peru}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
