import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'
import auth from './auth'
import loading from './loading'
import sign, { signSaga } from './sign'
import user, { userSaga } from './user'

const rootReducer = combineReducers({
  auth,
  loading,
  sign,
  user,
})

export function* rootSaga() {
  yield all([signSaga(), userSaga()])
}

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
