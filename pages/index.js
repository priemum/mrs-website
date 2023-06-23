import useTranslation from 'next-translate/useTranslation'
import { Container, Row, Col, Tabs, Tab, Card, Button } from 'react-bootstrap'
import Slider from '../components/Slider'
import { PersonCircle } from 'react-bootstrap-icons';
import { createClient } from "contentful"
import styles from '../styles/Home.module.css'
import Divider from "../components/Divider"
import Team from '../components/Team'
import Link from 'next/link'
import Image from 'next/image'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const slides = await client.getEntries({ content_type: 'slider' })
  const genericImages = await client.getEntries({
    content_type: 'genericImages',
    'fields.location': 'Main'
  })
  const profileData = await client.getEntries({ content_type: 'team' })
  let profiles = {
    ripalta: null,
    sais: null,
    gil: null,
    martinez: null
  }

  const employeesData = await client.getEntries({ content_type: 'employees'})

  profileData.items.map((profile) => {
    profiles[profile.fields.profileName] = profile.fields.profile.fields.file.url
  })

  return {
    props: {
      sliderImgs: slides.items,
      genericImg: genericImages.items[0],
      profiles,
      employees: employeesData.items,
    },
    revalidate: 1,
  }
}

export default function Main({ sliderImgs, genericImg, profiles, employees }) {

  const { t } = useTranslation()

  return (
    <div>
      {/* slider */}
      <Slider slides={sliderImgs} />
      <Divider styles={styles}/>

      {/* description */}
      <div className={styles.section}>
        <span className={styles.brandName}>MRS ASSESSORS</span>
        <h1 className={styles.sectionTitle}>{t('home:title')}</h1>
        <span className={styles.sectionSubtitle}>{t('home:subtitle')}</span>
        <div className={styles.textSection}>
          <Container>
            <Row>
              <Col md={6}>
                <div className={styles.imageRight}>
                <Image src={'https:' + genericImg.fields.image.fields.file.url} width={500} height={300} />
                </div>
              </Col>
              <Col md={6}>
                <p>{t('home:body1')}</p>
                <p>{t('home:body2')}</p>
                
              
              </Col>
            </Row>
          </Container>
          
        </div>
      </div>
 
      <span id="work" />
      <Divider styles={styles}/>

      {/* content tab */}
      <div id="content" className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('home:work')}</h2>
        <div className={styles.textSection}>
          <Tabs defaultActiveKey="tab1">
            <Tab eventKey="tab1" title="Laboral" className={styles.tabBtn}>
              <div className={styles.scrollContent}>
                <p>{t('home:tab1Content')}</p>
                <ul>
                  {t('home:tab1List').split('&&').map((text, idx) => (
                    <li key={idx}>{text}</li>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="tab2" title={t('home:tab2Title')} className={styles.tabBtn}>
              <div className={styles.scrollContent}>
                <p>{t('home:tab2Content1')}</p>
                <p>{t('home:tab2Content2')}</p>
                <ul>
                  {t('home:tab2List').split('&&').map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="tab3" title={t('home:tab3Title')} className={styles.tabBtn}>
              <div className={styles.scrollContent}>
                <p>{t('home:tab3Content1')}</p>
                <p>{t('home:tab3Content2')}</p>
                <p>{t('home:tab3Content3')}</p>
                <ul>
                  {t('home:tab3List').split('&&').map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="tab4" title="Mercantil" className={styles.tabBtn}>
              <div className={styles.scrollContent}>
                <p>{t('home:tab4Content')}</p>
                <ul>
                  {t('home:tab4List').split('&&').map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="tab5" title={t('home:tab5Title')} className={styles.tabBtn}>
              <div className={styles.scrollContent}>
                <p>{t('home:tab5Content')}</p>
                <ul>
                  {t('home:tab5List').split('&&').map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="tab6" title={t('home:tab6Title')} className={styles.tabBtn}>
              <div className={styles.scrollContent}>
                <p>{t('home:tab6Content')}</p>
                <ul>
                  {t('home:tab6List').split('&&').map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="tab7" title={t('home:tab7Title')} className={styles.tabBtn}>
              <div className={styles.scrollContent}>
                <p>{t('home:tab7Content')}</p>
                <ul>
                  {t('home:tab7List').split('&&').map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="tab8" title={t('home:tab8Title')} className={styles.tabBtn}>
              <div className={styles.scrollContent}>
                <ul>
                  {t('home:tab8List').split('&&').map((text) => (
                    <li>{text}</li>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="tab9" title={t('home:tab9Title')} className={styles.tabBtn}>
              <ul>
                {t('home:tab9List').split('&&').map((text) => (
                  <li>{text}</li>
                ))}
              </ul>
              
            </Tab>
          </Tabs>
        </div>
      </div>
      <span id="team" />
      <Divider styles={styles}/>

      {/* team */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('common:team')}</h2>
        <div className={styles.textSection}>
          <Team profiles={profiles} employees={employees} />
        </div>
      </div>
      <span id="contact" />
      <Divider styles={styles}/>
      
      {/* contact */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>{t('common:contact')}</h2>
        <div className={styles.textSection}>
          <div className={styles.contactSection}>
            <Link href='mailto:administracio@mrsassessors.com?Subject=Consulta'>
              <Button className={styles.styledButton}>{t('home:sendEmailBtn')}</Button>
            
            </Link>
          </div>
          <hr />
          <Container>
            <Row>
              <Col>
                <Card className='mb-4'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.6659586374553!2d2.8366444158267274!3d41.70614637923619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb17400ec35253%3A0x689006a99e92cb89!2sMRS%20Assessors!5e0!3m2!1sen!2ses!4v1641165940319!5m2!1sen!2ses"
                    className={styles.mapsEmbed}
                    allowFullScreen=""
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title>Sede Central Lloret de Mar</Card.Title>
                    <Card.Text>{t('home:office1')}</Card.Text>
                    <hr />
                    <Card.Text>
                      Calle Can Guidet, núm. 5 local 1A. 17310 Lloret de Mar
                    </Card.Text>
                    <Link href='https://goo.gl/maps/CuMMNSxdEvmvxePt9'>
                      <Button className={styles.styledButton}>Mapa</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='mb-4'>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.9934371028303!2d2.8462348158265196!3d41.69907737923678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb173097443d4d%3A0x3b897f62f299b8b8!2sPasseig%20de%20Jacint%20Verdaguer%2C%208%2C%2017310%20Lloret%20de%20Mar%2C%20Girona!5e0!3m2!1sen!2ses!4v1641166537812!5m2!1sen!2ses"
                    className={styles.mapsEmbed}
                    allowFullScreen=""
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title>Oficina Lloret de Mar</Card.Title>
                    <Card.Text>{t('home:office2')}</Card.Text>
                    <hr />
                    <Card.Text>
                      Passeig Jacint Verdaguer, núm. 8. 17310 Lloret de Mar
                    </Card.Text>
                    <Link href='https://goo.gl/maps/7QK7f6fKXKPq2Yjc8'>
                      <Button className={styles.styledButton}>Mapa</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.0794710427367!2d2.818731915833568!3d41.97710347921451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae6d90606a499%3A0x61d8c354d402d905!2sCarrer%20Migdia%2C%2016%2C%203%C2%BA%2C%2017002%20Girona!5e0!3m2!1sen!2ses!4v1641166628277!5m2!1sen!2ses"
                    className={styles.mapsEmbed}
                    allowFullScreen=""
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title>Sucursal Girona</Card.Title>
                    <Card.Text>{t('home:office3')}</Card.Text>
                    <hr />
                    <Card.Text>
                      Calle Migdia, núm. 16 4º 3º. 17002 Girona
                    </Card.Text>
                    <Link href='https://goo.gl/maps/F7DsjTr5Jiwjzp7x8'>
                      <Button className={styles.styledButton}>Mapa</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Divider styles={styles}/>
    </div>
    
  )
}