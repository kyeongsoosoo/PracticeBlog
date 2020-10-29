import { AxiosError } from 'axios'
import { takeLatest } from 'redux-saga/effects'
import { ActionType, createAction, createReducer } from 'typesafe-actions'
import * as authAPI from '../api/auth'
import createRequestSaga from '../lib/createRequestSaga'
import auth, { LoginProps } from './auth'

export const REGISTER = 'sign/REGISTER'
const REGISTER_SUCCESS = 'sign/register_success'
const REGISTER_FAILURE = 'sign/REGISTER_FAILURE'

export const LOGIN = 'sign/login'
const LOGIN_SUCCESS = 'sign/login_success'
const LOGIN_FAILURE = 'sign/login_failure'

export const register = createAction(REGISTER)<LoginProps>()
export const login = createAction(LOGIN)<LoginProps>()
export const registerSuccess = createAction(REGISTER_SUCCESS)<string>()
export const loginSuccess = createAction(LOGIN_SUCCESS)<string>()
export const registerFailure = createAction(REGISTER_FAILURE)<AxiosError>()
export const loginFailure = createAction(LOGIN_FAILURE)<AxiosError>()

const actions = {
  register,
  login,
  registerFailure,
  registerSuccess,
  loginFailure,
  loginSuccess,
}
type SignActions = ActionType<typeof actions>
type SignState = {
  auth?: string | null
  authError?: AxiosError | null
}

const registerSaga = createRequestSaga(REGISTER, authAPI.register)
const loginSaga = createRequestSaga(LOGIN, authAPI.login)
export function* signSaga() {
  yield takeLatest(register, registerSaga)
  yield takeLatest(login, loginSaga)
}

const initialState: SignState = {
  auth: null,
  authError: null,
}

const sign = createReducer<SignState, SignActions>(initialState, {
  [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
    authError: null,
    auth,
  }),
  [REGISTER_FAILURE]: (state, { payload: error }) => ({
    ...state,
    authError: error,
  }),
  [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
    authError: null,
    auth,
  }),
  [LOGIN_FAILURE]: (state, { payload: error }) => ({
    ...state,
    authError: error,
  }),
})

export default sign
