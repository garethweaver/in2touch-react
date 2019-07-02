import React from 'react'
import './button-external.sass'

const ButtonExternal = ({ ...props }) => (
  <a
    className="Btn__external"
    href={props.to}
    target="_blank"
    rel="noopener noreferrer">
    {props.children}
    <span className="material-icons">
      call_made
    </span>
  </a>
)

export default ButtonExternal
