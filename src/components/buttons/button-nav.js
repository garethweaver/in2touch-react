import React from 'react'
import { Link } from 'react-router-dom'
import './button-nav.sass'

const ButtonNav = ({ ...props }) => (
  <Link
    to={props.to}
    className="Btn__nav">
    {props.children}
  </Link>
)

export default ButtonNav
