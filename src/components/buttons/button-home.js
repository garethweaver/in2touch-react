import React from 'react'
import { Link } from 'react-router-dom'

const ButtonHome = ({ ...props }) => (
  <Link
    to="/"
    className="Btn__home">
    <span className="material-icons">
      home
    </span>
    Home
  </Link>
)

export default ButtonHome
