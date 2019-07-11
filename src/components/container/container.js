import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import FirebaseList from '../lists/firebase-list'
import TeamDetail from '../teams/team-detail'
import LeagueDetail from '../leagues/league-detail'
import Home from '../home/home'
import Settings from '../settings/settings'

const Container = ({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      classNames="fade"
      timeout={300}>
      <Switch location={location}>
        <Route path="/" exact component={Home} />
        <Route path="/teams" exact component={FirebaseList} />
        <Route path="/team/:id" exact component={TeamDetail} />
        <Route path="/leagues" exact component={FirebaseList} />
        <Route path="/league/:id" exact component={LeagueDetail} />
        <Route path="/settings" exact component={Settings} />
      </Switch>
    </CSSTransition>
  </TransitionGroup>
)

export default withRouter(Container)
