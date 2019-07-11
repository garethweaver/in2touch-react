import React from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/index'
import FixtureList from '../fixtures/fixtures-list'
import Button from '../buttons/button-external'

const TeamDetail = ({ ...props }) => {
  const t = props.teams.find(x => x.id === props.match.params.id)
  return (
    <Layout>
      <h1>{t.name}</h1>
      {
        t.fixtures
          ? <FixtureList fixtures={t.fixtures} />
          : <em className="Color--muted">No team fixtures</em>
      }
      <div className="Margin--t">
        <Button to={t.profileUrl}>
          View profile on In2Touch
        </Button>
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    teams: state.user.teams,
  }
}

export default connect(mapStateToProps)(TeamDetail)
