import { useState } from 'react'
import styles from './Dropdowns.module.scss'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

export interface DropdownProps{
  title?: string
  content: string
}

const Dropdown = ({ title, content }: DropdownProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  // función para abrir/cerrar el dropdown al presionar el botón
  function toggleDropdown () {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={styles.Section}>
        <button onClick={toggleDropdown}>
          <div className={styles.Title}>
            {title}
            <div className={styles.Title__icon}>
              {isOpen ? <AiOutlineClose /> : <AiOutlinePlus />}
            </div>
          </div>
          </button>
          {isOpen
            ? (
          <ReactMarkdown className={styles.Paragraph} remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
              )
            : !isOpen}
        <div className={styles.Line}/>
      </div>
    </>
  )
}

export default Dropdown
