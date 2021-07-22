/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './commponents/Register.js'
import Login from './commponents/Login.js'





const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
 
  )
  

 
}

export default App
