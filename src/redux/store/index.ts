import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import appReducers from '../reducers'

export default function configureStore() {
  return createStore(
    appReducers,
    composeWithDevTools(
      applyMiddleware(thunk)
      // other store enhancers
    )
  )
}
