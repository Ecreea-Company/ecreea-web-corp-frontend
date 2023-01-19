import styles from './ListContact.module.scss'
import { ContactosData } from '..'
import { DataContactoProps } from '@/models'

export interface ListContactProps{
  title: string
  data: DataContactoProps[]
}

const Contactos = ({ title, data }: ListContactProps): JSX.Element => {
  return (
    <>
      <div className={styles.Section}>
        <div className={styles.Container}>
          <h1 className={styles.Container__title}>{title}</h1>
          <ContactosData itemList={data}/>
        </div>
      </div>
    </>
  )
}

export default Contactos
