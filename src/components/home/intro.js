import React from 'react'
import ButtonNav from 'components/buttons/button-nav'
import './intro.sass'

const Intro = ({ ...props }) => (
  <div className="Intro">
    {(!props.hasTeams && !props.hasLeagues) &&
      <>
        <h1>Alright, let's go!</h1>
        <p>
          First you'll need to find a team you play for or a league to follow.
          We'll remember your preferences for future visits.
        </p>
      </>
    }
    <div className="Intro__buttons">
      <ButtonNav to="/teams/">
        <span className="material-icons">
          people
        </span>
        <span>Add team</span>
      </ButtonNav>
      <ButtonNav to="/leagues/">
        <span className="material-icons">
          location_on
        </span>
        <span>Add league</span>
      </ButtonNav>
    </div>
  </div>
)

export default Intro
