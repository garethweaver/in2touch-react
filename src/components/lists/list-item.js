import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ADD_TEAM from 'store/actions/add-team'
import ADD_LEAGUE from 'store/actions/add-league'
import './list-item.sass'

const ListItem = ({ query, data, ...props }) => (
  <div
    className="ListItem"
    onClick={() => {
        props.handleClick(query, data)
        props.history.push('/')
      }
    }>
    {data.name}
  </div>
)

const mapDispatchToProps = dispatch => {
  return {
    handleClick: (type, payload) => {
      if (type === 'teams') {
        dispatch(ADD_TEAM(payload))
      } else if (type === 'leagues') {
        dispatch(ADD_LEAGUE(payload))
      }
    },
  }
}

export default connect(null, mapDispatchToProps)(withRouter(ListItem))
