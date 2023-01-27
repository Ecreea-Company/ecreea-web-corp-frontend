import { useState } from 'react'
import styles from './Dropdowns.module.scss'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import { TablesProps } from '@/models/Tables.model'
import Tables from '../tables/Tables.component'

export interface DropdownProps{
  title: string
  content: string
  content2?: string
  dataTable?: TablesProps
}

const Dropdown = ({ title, content, content2, dataTable }: DropdownProps): JSX.Element => {
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
              <div className={styles.Paragraph}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
                {dataTable && <Tables dataTabla={dataTable}/> }
                {content2 && <ReactMarkdown className={styles.PaddTopContent} remarkPlugins={[remarkGfm]}>{content2}</ReactMarkdown>}
              </div>
              )
            : !isOpen}
        <div className={styles.Line}/>
      </div>
    </>
  )
}

export default Dropdown
