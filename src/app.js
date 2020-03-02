import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/header/header'
import firebaseListener from './store/actions/firebase-listener'
import ScrollToTop from './components/layouts/scroll-top'
import Container from './components/container/container'
import Offline from './components/notifiers/offline'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { isOnline: true }
    this.props.dispatch(firebaseListener())
  }

  componentDidMount() {
    window.addEventListener('online', () => this.setOnlineStatus(true))
    window.addEventListener('offline', () => this.setOnlineStatus(false))
  }

  componentWillUnmount() {
    window.removeEventListener('online')
    window.removeEventListener('offline')
  }

  setOnlineStatus = isOnline => this.setState({ isOnline })

  render() {
    return (
      <div className={`Theme--${this.props.theme}`}>
        <Router>
          <ScrollToTop>
            <Header />
            <Container />
            <div className="Pagebg" />
          </ScrollToTop>
          {!this.state.isOnline &&
            <Offline />
          }
        </Router>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    theme: state.theme,
  }
}

export default connect(mapStateToProps, null)(App)
