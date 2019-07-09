import React from 'react'

const ButtonExternal = ({ ...props }) => (
  <a
    className="Btn__flex"
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
