/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './commponents/Register.js'
import Login from './commponents/Login.js'
import PlantShowPage from './commponents/plants/PlantShowPage.js'
import Navigation from './commponents/Navbar.js'
import PlantMaintenance from './commponents/plants/PlantMaintenance.js'
import Home from './commponents/Home.js'





const App = () => {


  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/maintenance" component={PlantMaintenance}/>
        <Route path="/allplants" component={PlantShowPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
 
  )
  

 
}

export default App
