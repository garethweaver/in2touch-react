import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import FirebaseList from 'components/lists/firebase-list'
import TeamDetail from 'components/teams/team-detail'
import LeagueDetail from 'components/leagues/league-detail'
import Home from 'components/home/home'
import Settings from 'components/settings/settings'

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
