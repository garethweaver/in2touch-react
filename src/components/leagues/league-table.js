import React from 'react'
import LeagueTableTeam from './league-table-team'
import './league-table.sass'

const getTeams = teams => {
  return teams.map((team, i) => {
    return (
      <li key={i}>
        <LeagueTableTeam pos={i + 1} data={team} />
      </li>
    )
  })
}

const LeagueTable = ({ data, ...props }) => (
  <div className="LeagueTable">
    {data
      ?
        <>
          <div className="LeagueTable__header Card Color--muted">
            <div>PL</div>
            <div>W</div>
            <div>D</div>
            <div>L</div>
            <div>F</div>
            <div>A</div>
            <div>BP</div>
            <div>P</div>
          </div>
          <ul>{getTeams(data)}</ul>
        </>
      : <em className="Color--muted">No league data yet</em>
    }
  </div>
)

export default LeagueTable
