import React from 'react'

const Location = ({ pitch, leagueName }) => (
  <p>
    {pitch &&
      pitch
    }
    {(pitch && leagueName) &&
      ' - '
    }
    {leagueName &&
      <span className="Color--muted">
        {leagueName.substring(0, 20)}&hellip;
      </span>
    }
  </p>
)

export default Location
