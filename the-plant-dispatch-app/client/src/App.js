/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './commponents/Register.js'





const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
 
  )
  

 
}

export default App
