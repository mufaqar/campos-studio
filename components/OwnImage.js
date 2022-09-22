import NextImage from 'next/image'
import styles from '../styles/Image.module.css'

export default function OwnImage({url, altText}) {
  return (
    <>
      <div className={styles.imageContainer}>
        <NextImage src={url} alt={altText}  layout='fill' className={styles.image}></NextImage>
      </div>
    </>
  )
}
