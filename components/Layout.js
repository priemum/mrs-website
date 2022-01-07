import styles from '../styles/Layout.module.css'
import HeadTag from './HeadTag'
import AppBar from "./AppBar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="content">
      <HeadTag />
      <AppBar styles={styles} />
      { children }
      <Footer styles={styles} />
    </div>
  );
}
 
export default Layout;