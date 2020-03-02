import React from 'react'
import { connect } from 'react-redux'
import SET_THEME from 'store/actions/set-theme'

const Button = ({ ...props }) => (
  <button
    onClick={e => {
      e.preventDefault();
      props.handleClick(props.theme)
    }}
    className={`Btn__theme Btn__theme--${props.theme}`}>
  </button>
)

const mapDispatchToProps = dispatch => {
  return {
    handleClick: t => dispatch(SET_THEME(t)),
  }
}

export default connect(null, mapDispatchToProps)(Button)
