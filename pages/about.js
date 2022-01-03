import useTranslation from 'next-translate/useTranslation'
import styles from '../styles/Home.module.css'
import Divider from "../components/Divider"
import Image from 'next/image'

const About = () => {

  const { t } = useTranslation()

  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src='/about-placeholder.jpg' width="100%" height="100%" layout="responsive" objectFit="cover" />
      </div>
      <Divider styles={styles}/>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>La Firma</h2>
        <div className={styles.textSection}>
          <p>{t('about:body1')}</p>
          <p>{t('about:body2')}</p>
          <p>{t('about:body3')}</p>
          <p>{t('about:body4')}</p>
          <p>{t('about:body5')}</p>
          <ul className={styles.aboutList}>
          <li>{t('about:listItem1')}</li>
          <li>{t('about:listItem2')}</li>
          </ul>
          <p>{t('about:body6')}</p>
        </div>
      </div>
      <Divider styles={styles}/>
    </div>

  )
}

export default About