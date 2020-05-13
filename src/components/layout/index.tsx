import React from 'react'
import '../../styles/main.scss'
import Header from './header'
import Footer from './footer'

const Component = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;900&family=Noto+Serif+JP:wght@900&display=swap"
      />
    </>
  )
}

export default Component
