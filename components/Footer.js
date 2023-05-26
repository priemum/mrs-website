import useTranslation from 'next-translate/useTranslation';
import { Container, Row, Col } from 'react-bootstrap'
import { EnvelopeFill, TelephoneFill, ShieldLockFill } from 'react-bootstrap-icons';
import Link from 'next/link'

const Footer = ({ styles }) => {

  const { t } = useTranslation()

  return (
    <div className={styles.footer}>
      <Container sticky='bottom'>
        <Row>
          <Col>
            <h5>MRS Assessors</h5>
            <p>{t('common:footerText')}</p>
          </Col>
          <Col>
            <h5>{t('common:footerContact')}</h5>
            <ul>
              <li>
                <i className={styles.footerIcon}><TelephoneFill color='#fff' size={12}/></i>
                972371821
              </li>
              <li>
                <i className={styles.footerIcon}><TelephoneFill color='#fff' size={12}/></i>
                972372240
              </li>
              <li>
                <i className={styles.footerIcon}><EnvelopeFill color='#fff' size={12}/></i>
                administracio@mrsassessors.com
              </li>
              <li>
                <i className={styles.footerIcon}><ShieldLockFill color='#fff' size={12}/></i>
                <Link href="/policy"><a className={styles.footerLink}>{t('common:privacyPolicy')}</a></Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className={styles.trademark}>© 2020 Copyright: mrsassessors.com</div>
    </div>
  );
}
 
export default Footer;