import React from 'react'
import Team from './team'

const getTeams = teams => {
  return (
    teams.map(team => {
      return (
        <li key={team.id}>
          <Team data={team} />
        </li>
      )
    })
  )
}

const SelectedTeams = ({ teams }) => (
  <div className="Selected mb">
    <h2 className="Flex__icon">
      <span className="material-icons">
        people
      </span>
      Your Teams
    </h2>
    <ul>
      {getTeams(teams)}
    </ul>
  </div>
)

export default SelectedTeams
