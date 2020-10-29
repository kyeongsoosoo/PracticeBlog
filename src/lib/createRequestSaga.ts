import { stringify } from 'querystring'
import { ActionType, createAsyncAction } from 'typesafe-actions'
import { AxiosError, AxiosResponse } from 'axios'
import { finishLoading, startLoading } from '../modules/loading'
import { call, put, takeEvery } from 'redux-saga/effects'
import { LoginProps } from '../modules/auth'

type FuntionProp =
  | (() => Promise<AxiosResponse<any>>)
  | (({ username, password }: LoginProps) => Promise<AxiosResponse<any>>)

type UserProp = {
  user: string
  checkError: AxiosError
}
type PayloadProp = LoginProps | null
export default function createRequestSaga(type: string, fun: FuntionProp) {
  const START = `${type}`
  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  const getSagaAsync = createAsyncAction(START, SUCCESS, FAILURE)<
    any,
    any,
    AxiosError
  >()

  return function* (action: ReturnType<typeof getSagaAsync.request>) {
    yield put(startLoading(type))
    try {
      const response = yield call(fun, action.payload)
      yield put(getSagaAsync.success(response.data))
    } catch (e) {
      yield put(getSagaAsync.failure(e))
    }
    yield put(finishLoading(type))
  }
}
