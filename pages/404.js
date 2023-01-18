
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Navbar } from 'react-bootstrap'

export default function NotFound() {

  const router = useRouter()

  useEffect(() => {
    // setTimeout(() => {
    //   router.push('/')
    // }, 4000)
  }, [])
  
  return (
    <div className="not-found">
      <h1 className="pt-3">404</h1>
      <h2>Ooops! This page cannot be found :(</h2>
      <p>Redirecting to <Link href="/">Homepage</Link> for more content</p>
    </div>
  )
}