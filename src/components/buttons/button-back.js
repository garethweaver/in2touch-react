import React from 'react'
import { withRouter } from 'react-router'
import './button-home.sass'

const ButtonBack = ({ ...props }) => (
  <a
    href="#back"
    onClick={() => props.history.go(-1)}
    className="Btn__home">
    <span className="material-icons">
      arrow_back
    </span>
    Back
  </a>
)

export default withRouter(ButtonBack)
