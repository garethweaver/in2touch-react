import React from 'react'

const Layout = ({ ...props }) => (
  <div className="Pagewrap">
    {props.children}
  </div>
)

export default Layout
