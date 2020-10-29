import { LoginProps } from '../modules/auth'
import client from './client'

export const login = ({ username, password }: LoginProps) =>
  client.post('/api/auth/login', { username, password })

export const register = ({ username, password }: LoginProps) =>
  client.post('/api/auth/register', { username, password })

export const check = () => client.get('/api/auth/check')
