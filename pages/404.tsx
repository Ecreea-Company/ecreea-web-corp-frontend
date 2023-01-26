import styles from '@styles/404/FourOhFour.module.scss'
import { LinkEcreea } from '@/components'
import Gato404 from '@/assets/404/gato-web-ligth'
import Logo from '@/assets/logo/Logo.component'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { DataTabla } from '@/data'

const Table = () => {
  console.log(DataTabla)
  return (
    <div className={styles.Table}>
      <ul className={styles.Table__titles}>
        {
          DataTabla.titles.map((title, index) => {
            return (
              <li key={index}>{title}</li>
            )
          })
        }
      </ul>

      {
          DataTabla.content.map((item, index) => {
            return (
              <ul key={index} className={styles.Table__rows}>
              <li >{item.colummn1}</li>
              <li >{item.colummn2}</li>
              </ul>
            )
          })
        }

    </div>
  )
}

export default function FourOhFour () {
  const [nameUrl, setNameUrl] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    setNameUrl(router.asPath)
  }, [])

  return (
    <section className={styles.Page}>
      {/* <div className={styles.Page__gato}>
        <Gato404 />
      </div>
      <Logo />
      <h4>Página no encontrada</h4>
      <p>
        La URL solicitada <b>{nameUrl}</b> no se encontró en este servidor.
      </p>

      <LinkEcreea href="/">
        <h5>
          Ir a Home
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
        </h5>
      </LinkEcreea> */}

      <Table/>

    </section>
  )
}
