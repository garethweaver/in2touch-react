import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './app'
import * as serviceWorker from './serviceWorker'
import firebase, { FirebaseContext } from './firebase'
import './styles/screen.sass'
import 'typeface-roboto'
import 'typeface-inconsolata'

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={firebase}>
      <App />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
