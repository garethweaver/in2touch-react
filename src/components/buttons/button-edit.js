import React from 'react'

const Button = ({ ...props }) => (
  <button
    onClick={e => {
      e.preventDefault();
      props.handleClick()
    }}
    className="Btn__edit">
    <span className="material-icons">
      {props.children}
    </span>
  </button>
)

export default Button
