import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/header/header'
import firebaseListener from './store/actions/firebase-listener'
import ScrollToTop from './components/layouts/scroll-top'
import Container from './components/container/container'

class App extends Component {

  componentWillMount() {
    this.props.dispatch(firebaseListener())
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Header />
          <Container />
          <div className="Pagebg" />
        </ScrollToTop>
      </Router>
    )
  }

}

export default connect(null, null)(App)
