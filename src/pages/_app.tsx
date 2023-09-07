import type { AppProps } from "next/app"
import Layout from "components/layout/Layout"
import Providers from "context/ThemeProviders"

// import Preloader from 'components/preloader/Preloader'
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Preloader/> */}
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  )
}
