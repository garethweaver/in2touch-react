import React from 'react'

const Layout = ({ ...props }) => (
  <div className="page-wrap">
    {props.children}
  </div>
)

export default Layout
