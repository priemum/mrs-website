import Head from 'next/head'

const HeadTag = () => {
  return (
    <Head>
      <title>MRS Assessors</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta 
        property='og:title'
        content='MRS Assessors' 
      />
      <meta 
        name='image' 
        property='og:image' 
        content='/linkedin-cover.png' 
      />
      <meta 
        name='author' 
        content='Oriol Ripalta' 
      />
      <meta 
        property='og:description' 
        content='Example Description'
      />
      <meta 
        property='og:url'
        // FIX to correct url in production
        content='https://example.com'
      />
    </Head>
  )
}

export default HeadTag