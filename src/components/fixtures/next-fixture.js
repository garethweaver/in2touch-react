import React from 'react'
import Location from './location'
import './next-fixture.sass'

const getAllNextOnSameDay = fixtures => {
  let next = []
  const nextIdx = fixtures.findIndex(f => f.timestamp > Date.now())
  if (typeof nextIdx === 'number') {
    next = fixtures.filter(f => {
      return new Date(f.timestamp).toDateString()
        === new Date(fixtures[nextIdx].timestamp).toDateString()
    })
  }
  return next
}

const NextGame = ({ next }) => (
  <div className="NextFixture__game">
    <div className="Flex__bar">
      <p className="NextFixture__time">{next.time}</p>
      <p className="NextFixture__vs">
        <strong>{next.vs}</strong>
      </p>
    </div>
    <p className="NextFixture__day">{next.day}</p>
    <Location
      pitch={next.pitch}
      leagueName={next.leagueName} />
  </div>
)

const NextFixture = ({ fixtures }) => {
  const next = getAllNextOnSameDay(fixtures)
  return (
    <div className="NextFixture">
      {next.length === 0 ? (
        <em className="Color--muted Text--small">
          No scheduled fixtures
        </em>
      ) : (
        <>
          <h6 className="Heading__sm">
            {next.length > 1 ? next.length: ''} Next:
          </h6>
          {next.map((n, idx) => <NextGame key={idx} next={n} />)}
        </>
      )}
    </div>
  )
}

export default NextFixture
