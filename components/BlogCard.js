import useTranslation from 'next-translate/useTranslation'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Card, Button } from 'react-bootstrap'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export default function BlogCard({ blog }) {

  const { t } = useTranslation()
  const { title, slug, tags, thumbnail, textPreview } = blog.fields


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
        <Card.Subtitle className={`mb-2 text-muted ${styles.tags}`}>{ tags && tags.join(' - ')}</Card.Subtitle>
        <Card.Text>
          {textPreview}
        </Card.Text>
        <Link href={'/blogs/' + slug }>
          <Button className={styles.styledButton}>{t('blog:readMore')}</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}