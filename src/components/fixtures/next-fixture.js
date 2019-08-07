import React from 'react'
import './next-fixture.sass'

const Next = ({ next }) => (
  <>
    <h6 className="Heading__sm">Next:</h6>
    <div className="Flex__bar">
      <p className="NextFixture__time">{next.time}</p>
      <p className="NextFixture__vs">
        <strong>{next.vs}</strong>
      </p>
    </div>
    <p className="NextFixture__day">{next.day}</p>
    <p className="NextFixture__location">
      {next.pitch} - <span className="Color--muted">{next.leagueName.split(' ')[0]}</span>
    </p>
  </>
)

const NextFixture = ({ fixtures }) => {
  const nextF = fixtures.find(f => f.timestamp > Date.now())

  return (
    <div className="NextFixture">
      {nextF
        ? <Next next={nextF} />
        : <em className="Color--muted Text--small">No scheduled fixtures</em>
      }
    </div>
  )
}

export default NextFixture
