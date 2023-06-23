import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import { PersonCircle } from 'react-bootstrap-icons';
import { BriefcaseFill } from 'react-bootstrap-icons';
import { List } from 'react-bootstrap-icons';

const AppBar = ({ styles }) => {

  const { t } = useTranslation();
  const router = useRouter()

  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
      <Container>
      <Navbar.Brand href="/" className={styles.navColor}>
        <Image src='/logo.png' width={75} height={75}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"><List className="collapse-button" size={30}/>
</Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className='me-auto d-block d-lg-flex align-items-center'>
          <Nav.Link href="/about" className={styles.navColor}>La Firma</Nav.Link>
          <Nav.Link href={'/#work'} className={styles.navColor}>{t('common:work')}</Nav.Link>
          <Nav.Link href={'/#team'} className={styles.navColor}>{t('common:team')}</Nav.Link>
          <Nav.Link href={'/#contact'} className={styles.navColor}>{t('common:contact')}</Nav.Link>
          <Nav.Link href="/blogs" className={styles.navColor}>{t('common:blog')}</Nav.Link>
        </Nav>
        <div className='d-flex align-items-center justify-content-center mb-3 mb-lg-0'>
          <div className={`d-flex align-self-center ${styles.portalGroup}`}>
            <div className="d-flex align-items-center">
            <Button className={`${styles.btnPortal} me-2`} href="https://app.kabiku.es/login/?next=/">
              <PersonCircle size={32}/>    
            </Button>
            <span className="d-none d-xxl-block" style={{ color: "white"}}>{t('home:employeePortal')}</span>
            </div>
            {/* <span style={{ color: "white"}}>{t('home:employeePortal')}</span> */}
            <div className="d-flex align-items-center">
            <Button className={`${styles.btnPortal} me-2`} href="https://app.kabiku.es/login/?next=/">
              <BriefcaseFill size={30}/>    
            </Button>
            <span className="d-none d-xxl-block" style={{ color: "white"}}>{t('home:clientsPortal')}</span>
            </div>
          </div>
          <div className='d-flex justify-content-end'>
            {router.locales.map((locale) => (
              <span key={locale} className={styles.translateLink} >
                {/* navigate back to language specific blogs if language changes */}
                <Link
                  href={router.asPath.startsWith("/blogs/") ? "/blogs" : router.asPath}
                  locale={locale}
                >
                  <a>{locale}</a>
                </Link>
              </span>
            ))}
          </div>
        </div>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default AppBar;