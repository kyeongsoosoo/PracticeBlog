import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../api/auth'
import SignForm from '../../components/SignItem/SignForm'
import SignTemplate from '../../components/SignItem/SignTemplate'
import { RootState } from '../../modules'
import { changeField, initialize } from '../../modules/auth'

function Register() {
  const dispatch = useDispatch()
  const { form } = useSelector(({ auth }: RootState) => ({
    form: auth.register,
  }))
  const { auth, authError } = useSelector(({ sign }: RootState) => ({
    auth: sign.auth,
    authError: sign.authError,
  }))

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    dispatch(changeField({ form: 'register', key: name, value }))
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, password, passwordConfirm } = form
    if (password !== passwordConfirm) {
      return
    }
    dispatch(register({ username, password }))
  }

  useEffect(() => {
    dispatch(initialize('form'))
  }, [])

  useEffect(() => {
    if (authError) {
      console.log(authError)
      return
    }
    if (auth) {
      console.log(auth)
    }
  }, [auth, authError])

  return (
    <SignTemplate>
      <SignForm
        type="register"
        onChange={onChange}
        form={form}
        onSubmit={onSubmit}
      />
    </SignTemplate>
  )
}

export default Register
