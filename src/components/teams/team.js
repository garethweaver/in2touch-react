import React from 'react'
import { Link } from 'react-router-dom'
import ButtonsEdit from '../buttons/buttons-edit'
import NextFixture from '../fixtures/next-fixture'

const Team = ({ data, onClick, ...props }) => (
 <div className="Team Card">
   <Link to={`/team/${data.id}`}>
      <div className="Flex__header">
        <h3 className="Flex__heading">
          {data.name}
        </h3>
        <ButtonsEdit
          id={data.id}
          type="teams" />
      </div>
      {data.fixtures
        ? <NextFixture fixtures={data.fixtures}/>
        : <em className="Color--muted Text--small">No upcoming fixtures</em>
      }
    </Link>
 </div>
)

export default Team
