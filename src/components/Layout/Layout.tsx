import { ReactNode } from 'react'
import './Layout.css'

interface ILayoutProps {
  children: ReactNode
  title?: string
}

export default function Layout(props: ILayoutProps) {
  const { children, title = '' } = props
  return (
    <div className="layout__container">
      <head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      {/* <TopBar /> */}
      <main
        className="layout__content"
        // style={{
        //   backgroundColor: currentBg,
        // }}
      >
        {children}
      </main>

      <footer>
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}
