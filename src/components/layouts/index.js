import React from 'react'
import Header from '../header/header'
import { Link } from 'react-router-dom'

const Layout = ({ ...props }) => (
  <div className="page-wrap">
    <Header className="Flex__bar">
      <span className="Logo">
        In2Touch Unofficial
      </span>
      <Link to="/settings">
        <span className="material-icons Text--medium">
          settings
        </span>
      </Link>
    </Header>
    {props.children}
  </div>
)

export default Layout
