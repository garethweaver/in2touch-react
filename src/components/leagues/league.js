import React from 'react'
import { Link } from 'react-router-dom'
import ButtonsEdit from '../buttons/buttons-edit'
import './league.sass'

const parseName = (name) => {
  if (name.indexOf('-')){
    name = name.split('-')
  }
  return (
    <>
      <h3 className="Flex__heading">{name[0]}</h3>
      <span>{name.slice(1, name.length).join('-').trim()}</span>
    </>
  )
}

const getTeams = (teams) => {
  return (
    teams.map((team, i) => {
      return (
        <li
          key={i}
          className="League__team">
          <span className="League__team-pos">
            {i + 1}
          </span>
          <span className="League__team-name">
            {team.name}
          </span>
          <span className="League__team-points">
            {team.points}
          </span>
        </li>
      )
    })
  )
}

const League = ({ data, ...props }) => (
  <div className="League Card">
    <Link to={`/league/${data.id}`}>
      <div className="Flex__header">
        <span>{parseName(data.name)}</span>
        <ButtonsEdit
          id={data.id}
          type="leagues" />
      </div>
      <div className="League__list">
        {(data.teams && data.teams.length > 0)
          ? <>
              <h6 className="Heading__sm">Teams:</h6>
              <ol>
                {getTeams(data.teams)}
              </ol>
            </>
          : <em className="Color--muted">No league data yet</em>
        }
      </div>
    </Link>
  </div>
)

export default League
