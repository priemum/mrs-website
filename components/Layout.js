import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Abogados y Consultores</span>
              <span>MRS Assessors</span>
            </h1>
            <h2>Especialistas en Función Pública y Derecho Administrativo</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>© 2021 Copyright: mrsassessors.com</p>
      </footer>
    </div>
  )
}