import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/index'
import Intro from './intro'
import SelectedTeams from '../teams/selected-teams'
import SelectedLeagues from '../leagues/selected-leagues'

const Main = ({ ...props }) => (
  <Layout>
    {props.teams.length > 0 &&
      <SelectedTeams teams={props.teams} />
    }
    {props.leagues.length > 0 &&
      <SelectedLeagues leagues={props.leagues} />
    }
    <Intro
      hasTeams={props.teams.length > 0}
      hasLeagues={props.leagues.length > 0} />
  </Layout>
)

const mapStateToProps = state => {
  return {
    teams: state.user.teams,
    leagues: state.user.leagues,
  }
}

export default connect(mapStateToProps)(Main)
