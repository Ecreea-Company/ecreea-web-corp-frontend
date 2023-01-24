// styles
import styles from './Footer.module.scss'
// npm packages
import { useState } from 'react'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineClose,
  AiOutlinePlus
} from 'react-icons/ai'

import { LinkEcreea, ListItemsFooter } from '@/components'

import { useGetDataLocalStorage, useWindowSize } from '@/hooks'
import { FooterApiProps } from '@/models'

const Footer = (): JSX.Element => {
  const { width } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (): void => {
    setIsOpen(!isOpen)
  }

  const { data } = useGetDataLocalStorage<FooterApiProps[]>('footerData')

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__Block1}>
        {data.map((item: FooterApiProps) => (
          <ListItemsFooter key={item.id} title={item.title} items={item.item} />
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
            <li><LinkEcreea href='/contacto'>
              Centro de Atención
            </LinkEcreea></li>
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
              <LinkEcreea href="/politicaPrivacidad" disabled={true}>
                Política de privacidad
              </LinkEcreea>
            </li>
            <li>
              <LinkEcreea href="/terminos-de-uso" disabled={true}>
                Términos de uso
              </LinkEcreea>
            </li>
            <li>
              <LinkEcreea href="/cookies" disabled={false}>
                Cookies
              </LinkEcreea>
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
