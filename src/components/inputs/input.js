import React from 'react'
import './input.sass'

const Input = (props) => (
  <div className="Input">
    <input
      name={props.name}
      type={ props.type ? props.type : 'text' }
      id={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.handleChange} />
  </div>
)

export default Input
