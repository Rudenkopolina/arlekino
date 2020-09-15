import { takeEvery } from 'redux-saga/effects'
import { LOGOUT } from './logout.action'

function * logout() {
  try {
  } catch (error) {
  }
}
export default function * logoutSaga() {
  yield takeEvery(LOGOUT, logout)
}
