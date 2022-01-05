import styles from '../styles/Blog.module.css'

export default function Skeleton() {
  return (
    <div className={styles.section}>
      <div className={styles.skeleton}>
        <div className={styles.sBanner}></div>
        <div className={styles.sHeader}></div>
        <div className={styles.sContent}></div>
        <div className={styles.sContent}></div>
        <div className={styles.sContent}></div>
      </div>
    </div>
  )
}