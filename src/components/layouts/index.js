import React from 'react'
import Header from '../header/header'

const Layout = ({ ...props }) => (
  <div className="page-wrap">
    <Header>
      <span className="Logo">
        In2Touch Unofficial
      </span>
    </Header>
    {props.children}
  </div>
)

export default Layout
