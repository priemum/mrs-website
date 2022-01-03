import useTranslation from 'next-translate/useTranslation'
import styles from '../styles/Home.module.css'
import Divider from "../components/Divider"

const About = () => {

  const { t } = useTranslation()

  return (
    <div className={styles.largeDivider}>
      <Divider styles={styles}/>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('policy:title')}</h2>
        <div className={styles.textSection}>
          <h3 className={styles.subsectionHeader}>{t('policy:responsability')}</h3>
          <p>{t('policy:responsabilityBody')}</p>
          <h3 className={styles.subsectionHeader}>{t('policy:data')}</h3>
          <p>{t('policy:dataBody')}</p>
          <h3 className={styles.subsectionHeader}>{t('policy:use')}</h3>
          <p>{t('policy:useBody')}</p>
          <h3 className={styles.subsectionHeader}>{t('policy:communication')}</h3>
          <p>{t('policy:communicationBody')}</p>
          <h3 className={styles.subsectionHeader}>{t('policy:update')}</h3>
          <p>{t('policy:updateBody')}</p>
          <h3 className={styles.subsectionHeader}>{t('policy:thirdParty')}</h3>
          <p>{t('policy:thirdPartyBody')}</p>
          <h3 className={styles.subsectionHeader}>{t('policy:mandatory')}</h3>
          <p>{t('policy:mandatoryBody')}</p>
          <h3 className={styles.subsectionHeader}>{t('policy:interests')}</h3>
          <p>{t('policy:interestsBody')}</p>
          <h3 className={styles.subsectionHeader}>{t('policy:underage')}</h3>
          <p>{t('policy:underageBody')}</p>
        </div>
      </div>
      <Divider styles={styles}/>
    </div>

  )
}

export default About