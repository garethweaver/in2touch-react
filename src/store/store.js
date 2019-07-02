import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import firebase from '../firebase'
import reducer from './reducers/index'

const getFirebase = () => firebase

const middleware = [
  applyMiddleware(thunk.withExtraArgument(getFirebase)),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
]

const store = createStore(
  reducer,
  compose(...middleware)
)

const saveToLocal = () => {
  localStorage.setItem(
    'reduxState',
    JSON.stringify(store.getState())
  )
}

store.subscribe(saveToLocal)

export default store
