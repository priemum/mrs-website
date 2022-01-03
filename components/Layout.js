import styles from '../styles/Layout.module.css'
import Footer from "./Footer"
import AppBar from "./AppBar"

const Layout = ({ children }) => {
  return (
    <div className="content">
      <AppBar styles={styles} />
      { children }
      <Footer styles={styles} />
    </div>
  );
}
 
export default Layout;