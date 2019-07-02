import React from 'react'
import Header from '../header/header'
import ButtonHome from '../buttons/button-home'

const Layout = ({ ...props }) => (
  <div className="page-wrap">
    <Header>
      <ButtonHome />
    </Header>
    {props.children}
  </div>
)

export default Layout
