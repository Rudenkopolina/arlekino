import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
//
import { history } from '../routes/urlLocations'
import { LOGOUT } from './logout/logout.action'
import initialState from '../store/initialState'

const appReducer = combineReducers({
  router: connectRouter(history)
})

const rootReducers = (state, action) => {
  if (action.type === LOGOUT) {
    state = initialState
  }
  return appReducer(state, action)
}

export default rootReducers
