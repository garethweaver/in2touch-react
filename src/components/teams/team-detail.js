import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../layouts/index'
import FixtureList from '../fixtures/fixtures-list'
import Button from '../buttons/button-external'
import { withFirebase } from '../../firebase'
import Loader from '../loader/loader'

class TeamDetail extends Component {

  constructor(props) {
    super(props)
    this.state = { team: null }
  }

  componentWillMount() {
    let team = this.props.teams.find(x => x.id === this.props.match.params.id)
    if (team) {
      this.setState({ team })
    } else {
      this.props.firebase
        .teamData(this.props.match.params.id)
        .once('value', snapshot => {
          if (snapshot.val()) {
            this.setState({ team: snapshot.val() })
          } else {
            console.log('no team data')
          }
        })
    }
  }

  render() {
    return (
      <Layout>
        {
          this.state.team
            ? <>
              <h1>{this.state.team.name}</h1>
              {
                this.state.team.fixtures
                  ? <FixtureList fixtures={this.state.team.fixtures} />
                  : <em className="Color--muted">No team fixtures</em>
              }
              <div className="Margin--t">
                <Button to={this.state.team.profileUrl}>
                  View profile on In2Touch
                </Button>
              </div>
            </>
            : <Loader />
        }
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    teams: state.user.teams,
  }
}

export default connect(mapStateToProps)(withFirebase(TeamDetail))
