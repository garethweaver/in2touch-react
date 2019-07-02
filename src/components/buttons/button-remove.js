import React from 'react'
import './button-remove.sass'

const ButtonRemove = ({ ...props }) => (
  <button
    className="Btn__remove"
    onClick={props.handleClick}>
    <span className="material-icons">close</span>
  </button>
)

export default ButtonRemove

