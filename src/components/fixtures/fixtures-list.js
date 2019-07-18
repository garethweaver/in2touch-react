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
      {past.length > 0 &&
        <div className="Margin--t">
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
      }
      {future.length > 0 &&
        <div className="Margin--t">
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
      }
      {
        (future.length === 0 && past.length === 0) &&
        <div className="Margin--t">
          <em className="Color--muted">No fixture data</em>
        </div>
      }
    </div>
  )
}

export default FixtureList
