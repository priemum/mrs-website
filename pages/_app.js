import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/globals.css'
import Layout from '../components/Layout'
import { SSRProvider } from 'react-bootstrap';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default MyApp
