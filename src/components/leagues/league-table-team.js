import React from 'react'
import './league-table-team.sass'

const LeagueTableTeam = ({ pos, data }) => (
  <div className="LeagueTableTeam Card">
    <h3 className="LeagueTableTeam__name">
      {data.name}
    </h3>
    <div className="LeagueTableTeam__results">
      <div>{data.played}</div>
      <strong className="Color--success">{data.won}</strong>
      <strong className="Color--warning">{data.drawn}</strong>
      <strong className="Color--danger">{data.lost}</strong>
      <div>{data.pointsFor}</div>
      <div>{data.pointsAgainst}</div>
      <div>{data.pointsBonus}</div>
      <strong>{data.points}</strong>
    </div>
  </div>
)

export default LeagueTableTeam
