import { Card, Button } from 'react-bootstrap'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function BlogCard({ blog }) {

  const { title, slug, tags, thumbnail } = blog.fields

  return (
    <Card>
      <Card.Img
        src={'https:' + thumbnail.fields.file.url}
        layout='fll'
        // width={thumbnail.fields.file.details.image.width}
        // height={thumbnail.fields.file.details.image.height}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className={`mb-2 text-muted ${styles.tags}`}>{ tags.join(' - ')}</Card.Subtitle>
        <Card.Text>
          Some small preview of the text. Lets make it a little longer to see how it look.
        </Card.Text>
        <Link href={'/blogs/' + slug }>
          <Button className={styles.styledButton}>Leer más</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}