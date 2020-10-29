import React from 'react'

import { Route } from 'react-router-dom'

import Login from '../features/Login/Login'
import Register from '../features/Register/Register'

function App() {
  return (
    <>
      <Route path="/" component={Login} />
      <Route path="/register" component={Register} />
    </>
  )
}

export default App
