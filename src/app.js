import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import FirebaseList from './components/lists/firebase-list'
import TeamDetail from './components/teams/team-detail'
import LeagueDetail from './components/leagues/league-detail'
import Main from './components/main/main'
import firebaseListener from './store/actions/firebase-listener'
import ScrollToTop from './components/layouts/scroll-top'

class App extends Component {

  componentWillMount() {
    this.props.dispatch(firebaseListener())
  }

  render() {
    return (
      <div className="App">
        <Router>
          <ScrollToTop>
            <Route path="/" exact component={Main} />
            <Route path="/teams" exact component={FirebaseList} />
            <Route path="/team/:id" exact component={TeamDetail} />
            <Route path="/leagues" exact component={FirebaseList} />
            <Route path="/league/:id" exact component={LeagueDetail} />
          </ScrollToTop>
        </Router>
      </div>
    )
  }

}

export default connect(null, null)(App)
