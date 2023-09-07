import React, { FC } from "react"
import { headerData } from "constants/_header_data"

import Footer from "./fragments/footer/Footer"
import Header from "./fragments/header/Header"

interface LayoutProps {
  children: JSX.Element
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header props={headerData} />
      <main className="container">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
