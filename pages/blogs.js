import { Container, Row, Col } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { createClient } from "contentful"
import BlogCard from '../components/BlogCard'
import Divider from "../components/Divider"
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const res = await client.getEntries({ content_type: 'mrsBlog' })
  return {
    props: { blogs: res.items }
  }
}

export default function Blogs({ blogs }) {
  const router = useRouter()

  return (
    <div className={styles.section}>
      <Divider styles={styles}/>


      <div className={styles.textSection}>
      <Divider styles={styles}/>
        <Container>
          <Row>
            {blogs.map(blog => {
              if (router.locale == blog.fields.language) {
                return (
                  <Col md={6} lg={4} className='mb-4'>
                    <BlogCard key={blog.sys.id} blog={blog}/>
                  </Col>
                )
              }
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}