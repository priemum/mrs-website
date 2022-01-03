import { Container, Row, Col } from 'react-bootstrap'
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
    props: { blogs: res.items },
    revalidate: 1
  }
}

export default function Blogs({ blogs }) {
  return (
    <div className={styles.section}>
      <Divider styles={styles}/>


      <div className={styles.textSection}>
      <Divider styles={styles}/>
        <Container>
          <Row>
            {blogs.map(blog => (
              <Col>
                <BlogCard key={blog.sys.id} blog={blog}/>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}