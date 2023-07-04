import { useState, useRef } from 'react'
import { Formik, Field, Form, FormikHelpers, FormikValues } from 'formik'
import { object, string, boolean } from 'yup'
import { IoCloseOutline } from 'react-icons/io5'
import Image from 'next/image'
import styles from './FormularioCV.module.scss'

interface FormularioCVPorps {
  idJob: number
}

const validationSchema = object({
  email: string()
    .email('Formato de correo inválido')
    .required('Correo es requerido'),
  terminos: boolean().oneOf(
    [true],
    'Debes aceptar los términos y condiciones.'
  )
})

const FormularioCV = ({ idJob }: FormularioCVPorps) => {
  const wrapperRef = useRef({} as any)
  const [file, setFile] = useState({} as File)
  const [isUploaded, setIsUploaded] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const onFileDrop = (e: any) => {
    const newFile = e.target.files[0]
    if (newFile) {
      setFile(newFile)
    }
  }

  const removeFile = () => {
    setFile({} as File)
  }

  const sizeFile = parseInt((file.size / (1024 * 1024)).toFixed(2))

  const handleSubmit = async (values: FormikValues, { resetForm }: FormikHelpers<any>) => {
    const formData = new FormData()
    formData.append('data', JSON.stringify({ ...values, job: { id: idJob } }))
    formData.append('files.cv', file)

    const postulanteData = {
      email: values.email
    }

    setIsLoaded(true)

    fetch('https://strapi.ecreea.com/api/postulantes', {
      method: 'POST',
      body: formData
    })
      .then(async (strapiResponse: any) => {
        try {
          console.log(strapiResponse)
          await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(postulanteData)
          })
        } catch (error) {
          console.error('Error al enviar el correo electrónico:', error)
        }
      })
      .then(() => {
        setIsUploaded(true)
        setIsLoaded(false)

        setTimeout(() => {
          resetForm()
          setFile({} as File)
          setIsUploaded(false)
        }, 4000)
      })
      .catch((error: any) => {
        console.error('Error en Strapi', error)
      })
  }

  return (
    <div className={styles.Form}>
      <Formik
        initialValues={{ email: '', terminos: false }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <Field type="email" name="email" placeholder="Correo electrónico" required />
            {formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}
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
                onDragEnter={() => wrapperRef.current.classList.add(styles.DropActive)}
                onDragLeave={() => wrapperRef.current.classList.remove(styles.DropActive)}
                onDrop={() => wrapperRef.current.classList.remove(styles.DropActive)}
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
              <Field type="checkbox" name="terminos" id="terminos" />
              <label htmlFor="terminos">
                Al hacer clic en la casilla de verificación, usted declara
                expresamente que autoriza libre y voluntariamente a ECREEA a
                ponerse en contacto con usted a través de correo electrónico,
                teléfono u otros medios, con la exclusiva finalidad de
                presentarle contenidos, productos y servicios relacionados con
                ECREEA.
              </label>
            </div>
            {formik.errors.terminos && formik.touched.terminos && <p>{formik.errors.terminos}</p>}
            <div className={styles.Form__btn}>
              <button disabled={!formik.isValid} type="submit">
                Enviar CV
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormularioCV
