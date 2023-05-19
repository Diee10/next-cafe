import styles from '../styles/Slide.module.css'

const Slide = ({text, text2, text3}) => {
  return (
    <div className = {styles.slide} >
        <div className={styles.contendor}>
          <p className={styles.parrafo}>{text}{text2}</p>
          <p className={styles.parrafo}>{text3}</p>
        </div>
    </div>
  )
}

export default Slide