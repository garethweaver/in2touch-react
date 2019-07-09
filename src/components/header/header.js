import React from 'react'
import './header.sass'

const Header = ({ children, className }) => (
  <header className={`Header ${className ? className : ''}`}>
    {children}
  </header>
)

export default Header
