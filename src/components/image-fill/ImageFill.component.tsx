import Image from 'next/image'
import styles from './ImageFill.module.scss'

interface ImageFillProps {
  src: string
  alt: string
  stylesCustom?: string
}

function ImageFill ({ src, alt, stylesCustom }: ImageFillProps): JSX.Element {
  return (
    <div className={`${styles.ImageGil} ${stylesCustom}`}>
      <Image layout="fill" src={src} alt={alt} />
    </div>
  )
}

export default ImageFill
