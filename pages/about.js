import useTranslation from 'next-translate/useTranslation'
import { createClient } from "contentful"
import styles from '../styles/Home.module.css'
import Divider from "../components/Divider"
import Image from 'next/image'
import { Navbar } from 'react-bootstrap'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const genericImages = await client.getEntries({
    content_type: 'genericImages',
    'fields.location': 'About'
  })
  
  return {
    props: {
      genericImg: genericImages.items[0],
    }
  }
}

const About = ({ genericImg }) => {

  const { t } = useTranslation()

  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src={'https:' + genericImg.fields.image.fields.file.url} width="100%" height="100%" layout="responsive" priority />
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