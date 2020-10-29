import { ActionType, createAction, createReducer } from 'typesafe-actions'

const INITIALIZE = 'auth/initialize'
const CHANGE_FIELD = 'auth/change_filed'

export type LoginProps = {
  [key: string]: string
  username: string
  password: string
}

export type RegisterProps = LoginProps & { passwordConfirm: string }

export type AuthState = {
  [key: string]: RegisterProps | LoginProps
  register: RegisterProps
  login: LoginProps
}

type initializeProps = {
  form: string
}

export type changeFieldProps = initializeProps & {
  key: string
  value: string
}

const initialState: AuthState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  },
}

export const initialize = createAction(INITIALIZE)<string>()
export const changeField = createAction(CHANGE_FIELD)<changeFieldProps>()

const actions = { initialize, changeField }
type AuthAction = ActionType<typeof actions>

const auth = createReducer<AuthState, AuthAction>(initialState, {
  [INITIALIZE]: (state, { payload: form }) => ({
    ...state,
    [form]: initialState[form],
  }),
  [CHANGE_FIELD]: (state, { payload: { form, key, value } }) => ({
    ...state,
    [form]: {
      ...state[form],
      [key]: value,
    },
  }),
})

export default auth
