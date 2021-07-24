/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './commponents/auth/Register.js'
import Login from './commponents/auth/Login.js'
import PlantShowPage from './commponents/plants/PlantShowPage.js'
import Navigation from './commponents/Navbar.js'
import PlantMaintenance from './commponents/plants/PlantMaintenance.js'
import Home from './commponents/Home.js'
import PlantCreateForm from './commponents/plants/PlantCreateForm.js'



const App = () => {


  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/newplant" component={PlantCreateForm}/>
        <Route path="/maintenance" component={PlantMaintenance}/>
        <Route path="/allplants" component={PlantShowPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route eaxct path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
