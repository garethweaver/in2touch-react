import React from 'react'
import { Link } from 'react-router-dom'
import './button-home.sass'

const ButtonHome = ({ ...props }) => (
  <Link
    to="/"
    className="Btn__home">
    <span className="material-icons">
      arrow_back
    </span>
    Back
  </Link>
)

export default ButtonHome
