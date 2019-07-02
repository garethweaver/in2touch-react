import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../buttons/button-remove'
import NextFixture from '../fixtures/next-fixture'
import REMOVE_TEAM_BY_ID from '../../store/actions/remove-team-by-id'

const Team = ({ data, onClick, ...props }) => (
 <div className="Team Card">
   <Link to={`/team/${data.id}`}>
      <div className="Flex__header">
        <h3 className="Flex__heading">
          {data.name}
        </h3>
        <Button handleClick={(e) => { e.preventDefault(); props.handleClick(data.id)}} />
      </div>
      {data.fixtures
        ? <NextFixture fixtures={data.fixtures}/>
        : <em className="Color--muted Text--small">No upcoming fixtures</em>
      }
    </Link>
 </div>
)

const mapDispatchToProps = dispatch => {
  return {
    handleClick: payload => dispatch(REMOVE_TEAM_BY_ID(payload)),
  }
}

export default connect(null, mapDispatchToProps)(Team)
