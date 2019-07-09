import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/with-back'
import RESET_STORE from '../../store/actions/reset-store'

const getDate = str => new Date(str).toString()

const Settings = ({ ...props }) => (
  <Layout>
    <h2>Database updated at:</h2>
    <div>{getDate(props.config.updatedAt)}</div>

    <div className="ButtonRack">
      <button
        onClick={props.handleClick}
        className="Btn__flex">
        Clear local cache
        <span className="material-icons">
          sync
        </span>
      </button>
    </div>
  </Layout>
)

const mapStateToProps = state => {
  return {
    config: state.config,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(RESET_STORE()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
