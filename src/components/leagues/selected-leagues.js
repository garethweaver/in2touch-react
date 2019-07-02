import React from 'react'
import League from './league'

const getLeagues = leagues => {
  return (
    leagues.map(league => {
      return (
        <li key={league.id}>
          <League data={league} />
        </li>
      )
    })
  )
}

const SelectedLeagues = ({ leagues }) => (
  <div className="Selected mb">
    <h2 className="Flex__icon">
      <span className="material-icons">
        location_on
      </span>
      Followed Leagues
    </h2>
    <ul>
      {getLeagues(leagues)}
    </ul>
  </div>
)

export default SelectedLeagues
