import { ActionType, createAction, createReducer } from 'typesafe-actions'
import createRequestSaga from '../lib/createRequestSaga'
import * as authAPI from '../api/auth'
import { takeLatest } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import { AxiosError } from 'axios'

const TEMP_SET_USER = 'user/temp_set_user'
export const CHECK = 'user/check'
const CHECK_SUCCESS = 'user/check_success'
const CHECK_FAILURE = 'user/check_failure'

export const tempSetUser = createAction(TEMP_SET_USER)<UserState>()
export const check = createAction(CHECK)<null>()
export const checkSuccess = createAction(CHECK_SUCCESS)<UserState>()
export const checkFailure = createAction(CHECK_FAILURE)<UserState>()

const actions = { tempSetUser, check, checkSuccess, checkFailure }
type UserAction = ActionType<typeof actions>
type UserState = {
  user?: string | null
  checkError?: AxiosError | null
}

const checkSaga = createRequestSaga(CHECK, authAPI.check)
export function* userSaga() {
  yield takeLatest(check, checkSaga)
}

const initialState: UserState = {
  user: null,
  checkError: null,
}

const user = createReducer<UserState, UserAction>(initialState, {
  [TEMP_SET_USER]: (state, { payload: { user } }) => ({
    ...state,
    user,
  }),
  [CHECK_SUCCESS]: (state, { payload: { user } }) => ({
    ...state,
    user,
    checkError: null,
  }),
  [CHECK_FAILURE]: (state, { payload: { checkError } }) => ({
    ...state,
    user: null,
    checkError,
  }),
})

export default user
