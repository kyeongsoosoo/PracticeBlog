import { ActionType, createAction, createReducer } from 'typesafe-actions'

const START_LOADING = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'

export const startLoading = createAction(START_LOADING)<string>()
export const finishLoading = createAction(FINISH_LOADING)<string>()

export const actions = { startLoading, finishLoading }
type LoadingActions = ActionType<typeof actions>

type LoadingState = {
  register: boolean
  login: boolean
  check: boolean
}

const initialState: LoadingState = {
  register: false,
  login: false,
  check: false,
}

const loading = createReducer<LoadingState, LoadingActions>(initialState, {
  [START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
})

export default loading
