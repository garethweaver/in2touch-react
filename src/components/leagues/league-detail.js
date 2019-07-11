import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/index'
import LeagueTable from './league-table'
import Button from '../buttons/button-external'

const LeagueDetail = ({ ...props }) => {
  const l = props.leagues.find(x => x.id === props.match.params.id)
  return (
    <Layout>
      <h1>{l.name}</h1>
      <LeagueTable data={l.teams} />
      <div className="Margin--t">
        <Button to={l.fixturesUrl}>
          View fixtures on In2Touch
        </Button>
        <Button to={l.standingUrl}>
          View standings on In2Touch
        </Button>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    leagues: state.user.leagues,
  }
}

export default connect(mapStateToProps)(LeagueDetail)
