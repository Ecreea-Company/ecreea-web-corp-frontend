import { useState } from 'react'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { useWindowSize } from '@/hooks'
import styles from './List.module.scss'
import { LinkEcreea } from '@/components'

interface ListProps {
  title: string
  items: Array<{
    text: string
    url: string
    disabled?: boolean
  }>
}

const List = ({ title, items }: ListProps): JSX.Element => {
  const { width } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (): void => {
    setIsOpen(!isOpen)
  }
  return (
    <section className={styles.Block1__section}>
      {width > 1200
        ? (
        <h6 className={styles.Block1__title}>{title}</h6>
          )
        : (
        <h6 className={styles.Block1__title} onClick={handleOpen}>
          <span>{title}</span>
          <span style={{ marginRight: '4vw', fontSize: '4vw', width: '4vw' }}>
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
        {items.map((item, index) => (
          <li key={index}>
            <LinkEcreea href={item.url} disabled={item.disabled}>
              {item.text}
            </LinkEcreea>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List
