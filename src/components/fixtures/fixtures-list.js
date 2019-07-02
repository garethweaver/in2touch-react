import React from 'react'
import Fixture from './fixture'


const getFixtures = (fixtures, isPast) => {
  return fixtures.map((fixture, i) => {
    return (
      <li key={i} className="Card">
        <Fixture data={fixture} isPast={isPast} />
      </li>
    )
  })
}

const FixtureList = ({ fixtures }) => {
  const future = fixtures.filter(f => f.timestamp > Date.now())
  const past = fixtures.filter(f => f.timestamp <= Date.now())
  return (
    <div>
      <div className="mt">
        <h2 className="Flex__icon">
          <span className="material-icons">
            check_circle_outline
          </span>
          Past Fixtures
        </h2>
        <ol>
          {getFixtures(past, true)}
        </ol>
      </div>
      <div className="mt">
        <h2 className="Flex__icon">
          <span className="material-icons">
            schedule
          </span>
          Upcoming Fixtures
        </h2>
        <ol>
          {getFixtures(future)}
        </ol>
      </div>
    </div>
  )
}

export default FixtureList
