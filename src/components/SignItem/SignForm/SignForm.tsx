import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LoginProps, RegisterProps } from '../../../modules/auth'
import Button from '../../Common/Button'
import { SignFormBlock, SignFormFooter, SignFormInput } from './SignForm.styled'

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`

const textMap: TextmapProps = {
  login: 'Login',
  register: 'Register',
}

type TextmapProps = {
  login: string
  register: string
  [key: string]: string | undefined
}

type SignFormProp = {
  type: 'register' | 'login'
  form: RegisterProps | LoginProps
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

function SignForm({ type, form, onChange, onSubmit }: SignFormProp) {
  const text = textMap[type]
  return (
    <SignFormBlock>
      <h3>{text}</h3>
      <form>
        <SignFormInput
          autoComplete="username"
          name="username"
          placeholder="id"
          onChange={onChange}
          value={form.username}
        />
        <SignFormInput
          autoComplete="new-password"
          name="password"
          placeholder="password"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'register' && (
          <SignFormInput
            autoComplete="new Password"
            name="passwordConfirm"
            placeholder="confirm"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        <ButtonWithMarginTop cyan="true" fullWidth="true" to="">
          {text}
        </ButtonWithMarginTop>
      </form>
      <SignFormFooter>
        {type === 'login' ? (
          <Link to="/register">Sign up</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </SignFormFooter>
    </SignFormBlock>
  )
}

export default SignForm
