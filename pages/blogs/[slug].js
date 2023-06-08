import { createClient } from "contentful"
import Image from 'next/image'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Skeleton from "../../components/Skeleton"
import styles from '../../styles/Blog.module.css'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'mrsBlog'
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'mrsBlog',
    'fields.slug': params.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: { blog: items[0] },
    revalidate: 1,
  }
}

export default function BlogDetails({ blog }) {
  if (!blog) return <Skeleton />

  const { featureImage, title, tags, method } = blog.fields
  return (
    <div className={styles.section}>
      <div className={styles.textSection}>
        <div className={styles.imageContainer}>
          <Image src={'https:' + featureImage.fields.file.url} width="100%" height="100%" layout="responsive" objectFit="cover" />
        </div>
        <h2 className={styles.blogTitle}>{ title }</h2>
        <ul className={styles.listBorder}>
          {tags && tags.map(tag => (
            <li key={tag}>{ tag }</li>
          ))}
        </ul>
        <div>
            <div>{documentToReactComponents(method)}</div>
        </div>
      </div>
    </div>
  )
}