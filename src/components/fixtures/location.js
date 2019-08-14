import React from 'react'

const Location = ({ pitch, leagueName }) => (
  <p>
    {pitch &&
      pitch
    }
    {(pitch && leagueName) &&
      ' - '
    }
    { leagueName &&
      <span className="Color--muted">
        {leagueName.split(' ')[0]}
      </span>
    }
  </p>
)

export default Location
