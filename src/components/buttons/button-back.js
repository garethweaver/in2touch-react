import React from 'react'
import { withRouter } from 'react-router'

const ButtonBack = ({ ...props }) => (
  <a
    href="#back"
    onClick={e => { e.preventDefault(); props.history.goBack() }}
    className="Btn__home">
    <span className="material-icons">
      arrow_back
    </span>
    Back
  </a>
)

export default withRouter(ButtonBack)
