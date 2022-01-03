import useTranslation from 'next-translate/useTranslation'
import styles from '../styles/Home.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import Divider from './Divider'

const Team = () => {

  const { t } = useTranslation()

  return (
    <Container>
      <Row className={styles.smallDivider}>
        <Col>
          <Image src="/profile-placeholder.png" width={200} height={150}/>
          <h5 className='marginBottomNull'>Rafael Joaquín Ripalta Romeo</h5>
          <span className={styles.highlight}>{t('home:founder')}</span>
          <ul className={`topSpace ${styles.listBorder}`}>
            {t('home:ripaltaBio').split('&&').map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </Col>
        <Col>
          <Image src="/profile-placeholder.png" width={200} height={150}/>
          <h5 className='marginBottomNull'>Sebastián Martínez de Trincheria</h5>
          <span className={styles.highlight}>{t('home:founder')}</span>
          <ul className={`topSpace ${styles.listBorder}`}>
            {t('home:martinezBio').split('&&').map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Row className={styles.smallDivider}>
        <Col>
          <Image src="/profile-placeholder.png" width={200} height={150}/>
          <h5 className='marginBottomNull'>Jordi Sais Giralt</h5>
          <span className={styles.highlight}>{t('home:partner')}</span>
          <ul className={`topSpace ${styles.listBorder}`}>
            {t('home:saisBio').split('&&').map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </Col>
        <Col>
          <Image src="/profile-placeholder.png" width={200} height={150}/>
          <h5 className='marginBottomNull'>Joan Josep Gil Moretones</h5>
          <span className={styles.highlight}>{t('home:partner')}</span>
          <ul className={`topSpace ${styles.listBorder}`}>
            {t('home:gilBio').split('&&').map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Divider styles={styles} />
      {/* little divider - look at Ballastlane */}
      <Row>
        <Col md={6} lg={3}>
          <h5 className={styles.highlightUnderline}>Maica Rodriguez Sanchez</h5>
          <ul className={styles.listBorder}>
            {t('home:rodriguezBio').split('&&').map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </Col>
        <Col md={6} lg={3}>
          <h5 className={styles.highlightUnderline}>Silvia Fullà Soms</h5>
          <ul className={styles.listBorder}>
            {t('home:fullaBio').split('&&').map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </Col>
        <Col md={6} lg={3}>
          <h5 className={styles.highlightUnderline}>Maria Romera Moreno</h5>
          <ul className={styles.listBorder}>
            {t('home:romeraBio').split('&&').map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </Col>
        <Col md={6} lg={3}>
          <h5 className={styles.highlightUnderline}>Ana Maria Rubio Martínez</h5>
          <ul className={styles.listBorder}>
            {t('home:rubioBio').split('&&').map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </Col>
        <Col md={6} lg={3}>
          <h5 className={styles.highlightUnderline}>Olga Osipova</h5>
          <ul className={styles.listBorder}>
            {t('home:osipovaBio').split('&&').map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </Col>
        <Col md={6} lg={3}>
          <h5 className={styles.highlightUnderline}>Montserrat Dominguez Buitrago</h5>
          <ul className={styles.listBorder}>
            {t('home:dominguezBio').split('&&').map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Team