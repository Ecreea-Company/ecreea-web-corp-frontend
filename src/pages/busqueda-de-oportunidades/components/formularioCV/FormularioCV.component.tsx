/* eslint-disable @typescript-eslint/no-misused-promises */
import { useRef, useState } from 'react'
import styles from './FormularioCV.module.scss'
import Image from 'next/image'
import { IoCloseOutline } from 'react-icons/io5'

interface FormularioCVPorps {
  idJob: number
}

interface FormPostulante {
  email: string
  job: {
    id: number
  }
}

const FormularioCV = ({ idJob }: FormularioCVPorps) => {
  const wrapperRef = useRef({} as any)
  const [postulante, setPostulante] = useState({
    email: '',
    job: {
      id: idJob
    }
  } as FormPostulante)
  const [file, setFile] = useState({} as File)
  const [isChecked, setIsChecked] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleChange = (e: any) => {
    const name = e.target.name
    const value = e.target.value
    setPostulante((values) => ({ ...values, [name]: value }))
  }

  const sizeFile = parseInt((file.size / (1024 * 1024)).toFixed(2))

  const onDragEnter = () => {
    wrapperRef.current.classList.add(styles.DropActive)
  }

  const onDragLeave = () => {
    wrapperRef.current.classList.remove(styles.DropActive)
  }

  const onDrop = () => {
    wrapperRef.current.classList.remove(styles.DropActive)
  }

  const onFileDrop = (e: any) => {
    const newFile = e.target.files[0]
    if (newFile) {
      setFile(newFile)
    }
  }

  const removeFile = () => {
    setFile({} as File)
  }

  const handleCheckbox = (e: any) => {
    setIsChecked(e.target.checked)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('data', JSON.stringify(postulante))
    formData.append('files.cv', file)

    const postulanteData = {
      email: postulante.email
    }

    setIsLoaded(true)

    await fetch('https://strapi.ecreea.com/api/postulantes', {
      method: 'POST',
      body: formData
    })
      .catch((error) => {
        console.error('Error en Strapi:', error)
      })

    await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postulanteData)
    })
      .then(() => {
        setIsUploaded(true)
        setIsLoaded(false)
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error)
      })

    setTimeout(() => {
      e.target.reset()
      setFile({} as File)
      setIsChecked(false)
      setIsUploaded(false)
    }, 4000)
  }

  return (
    <div className={styles.Form}>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={postulante.email || ''}
          onChange={handleChange}
          required
        />
        {file.name
          ? (
          <div
            className={styles.FileUpload}
            style={{ borderColor: sizeFile < 10 ? '#2d7c03' : 'red' }}
          >
            <div className={styles.FileUpload__Position}>
              <Image
                src="/pages/busqueda-de-oportunidades/upload.png"
                width={41}
                height={55}
              />
              <p>{file.name}</p>
            </div>
            <button
              style={{ fontSize: '2rem', cursor: 'pointer' }}
              onClick={removeFile}
            >
              <IoCloseOutline />
            </button>
          </div>
            )
          : (
          <div
            className={styles.Drop}
            ref={wrapperRef}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
          >
            <div className={styles.Drop__label}>
              <Image
                src="/pages/busqueda-de-oportunidades/upload.png"
                width={82}
                height={110}
              />
              <h2>Carga tu CV aquí</h2>
              <p>
                Comparte tu currículum en cualquiera de estos formatos: PDF.
              </p>
            </div>
            <input type="file" onChange={onFileDrop} required />
          </div>
            )}
        <p style={{ color: file.size && sizeFile > 10 ? 'red' : '' }}>
          Límite de carga: 10MB Uso actual:{' '}
          {file.size ? (file.size / (1024 * 1024)).toFixed(2) : 0} MB
        </p>
        {isUploaded && (
          <p style={{ color: 'green' }}>
            ¡Gracias por postular! Nos pondremos en contacto contigo.
          </p>
        )}
        {isLoaded && <p style={{ color: 'green' }}>Cargando...</p>}
        <div className={styles.Form__checkbox}>
          <input
            type="checkbox"
            name="terminos"
            id="terminos"
            onChange={handleCheckbox}
            required
          />
          <label htmlFor="terminos">
            Al hacer clic en la casilla de verificación, usted declara
            expresamente que autoriza libre y voluntariamente a ECREEA a ponerse
            en contacto con usted a través de correo electrónico, teléfono u
            otros medios, con la exclusiva finalidad de presentarle contenidos,
            productos y servicios relacionados con ECREEA.
          </label>
        </div>
        <div className={styles.Form__btn}>
          <button
            type="submit"
            disabled={!isChecked}
            className={!isChecked ? 'disabled' : ''}
          >
            Enviar CV
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormularioCV
