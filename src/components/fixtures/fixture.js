import React from 'react'
import './fixture.sass'

const getResult = result => {
  let r
  if (result.length === 0) {
    r = <span className="Color--muted">No result yet</span>
  } else {
    let arr = result.split(' - ')
    r = <span className={
        parseInt(arr[0]) > parseInt(arr[1]) ? 'Color--success' : 'Color--danger'
      }>
      {result}
    </span>
  }
  return r
}

const Fixture = ({ data, isPast }) => (
  <div className="Fixture">
    {isPast &&
      <h6 className="Heading__sm">Result:</h6>
    }
    <div className="Flex__bar">
      {isPast
        ? <p className="Fixture--strong">{getResult(data.result)}</p>
        : <p className="Fixture__time Fixture--strong">{data.time}</p>
      }
      <p><strong>{data.vs}</strong></p>
    </div>
    <p>{data.day}</p>
    {
      data.grading &&
      <p>
        <em className="Color--muted">
          <span className="Fixture__grading-icon material-icons">
            shuffle
          </span>
          Grading game
        </em>
      </p>
    }
    {!isPast &&
      <p>{data.pitch}</p>
    }
  </div>
)

export default Fixture
