import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignForm from '../../components/SignItem/SignForm'
import SignTemplate from '../../components/SignItem/SignTemplate'
import { RootState } from '../../modules'
import { changeField, initialize } from '../../modules/auth'

function Login() {
  const dispatch = useDispatch()
  const { form } = useSelector(({ auth }: RootState) => ({
    form: auth.login,
  }))
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    dispatch(changeField({ form: 'login', key: name, value }))
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  useEffect(() => {
    dispatch(initialize('form'))
  }, [])

  return (
    <SignTemplate>
      <SignForm
        type="login"
        onChange={onChange}
        form={form}
        onSubmit={onSubmit}
      />
    </SignTemplate>
  )
}

export default Login
