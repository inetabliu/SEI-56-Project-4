/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './commponents/auth/Register.js'
import Login from './commponents/auth/Login.js'
import PlantShowPage from './commponents/plants/PlantShowPage.js'
import Navigation from './commponents/Navbar.js'
import PlantMaintenance from './commponents/plants/PlantwithMaintenance.js'
import Home from './commponents/Home.js'
import PlantCreateForm from './commponents/plants/PlantCreateForm.js'
import Maintenance from './commponents/maintenance/Maintenance.js'
import PlantEdit from './commponents/plants/PlantEdit.js'
import RegisterCanvas from './commponents/Popups/RegisterCanvas.js'
import LoginCanvas from './commponents/Popups/LoginCanvas.js'
import Footer from './commponents/Footer.js'



const App = () => {


  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/plantedit/:id" component={PlantEdit}/>
        <Route path="/newplant" component={PlantCreateForm}/>
        <Route path="/maintenance/:id" component={PlantMaintenance}/>
        <Route path="/maintenance" component={Maintenance}/>
        <Route path="/allplants" component={PlantShowPage}/>
        <Route path="/login" component={LoginCanvas}/>
        <Route path="/register" component={RegisterCanvas}/>
        <Route eaxct path="/" component={Home}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
