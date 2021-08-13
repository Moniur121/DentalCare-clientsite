import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './components/Home/Home/Home';
import React, { createContext } from "react";
// import {useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Testimonial from './components/Home/Testimonial/Testimonial'
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import DashboardHome from './components/Dashboard/DashboardPages/DashboardHome/DashboardHome';
import Appointments from './components/Dashboard/DashboardPages/Appointments/Appointments';
import Patients from './components/Dashboard/DashboardPages/Patients/Patients';
import Prescription from './components/Dashboard/DashboardPages/Prescription/Prescription';
import Navbar from './components/Shared/Navbar/Navbar';
import AddDoctor from './components/Dashboard/DashboardPages/AddDoctor/AddDoctor';
import UserDashboard from './components/UserDashboard/UserDashboard';
import LogIn from './components/LogIn/LogIn/LogIn';
import PrivateRoute from './components/LogIn/PrivateRoute/PrivateRoute';
// import {useState} from 'react'
import AddAdmin from './components/Dashboard/DashboardPages/AddAdmin/AddAdmin'
export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = React.useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
         
          <PrivateRoute path="/dental">
            <Navbar bgColor={true}></Navbar>
            <Appointment />
          </PrivateRoute>
          <Route path="/logIn">
            <Navbar bgColor={true}></Navbar>
            <LogIn />
          </Route>
          <PrivateRoute path="/userDashboard">
            <Navbar bgColor={true}></Navbar>
            <UserDashboard></UserDashboard>
          </PrivateRoute>
         
          {/* <--------Dashboard Routing --------> */}
          <Route path="/addAdmin">
            <Dashboard />
            <AddAdmin />
          </Route>
          <Route path="/addDoctor">
            <Dashboard />
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/prescription">
            <Dashboard />
            <Prescription />
          </Route>
          <Route path="/appointments">
            <Dashboard />
            <Appointments />
          </Route>
          <Route path="/patients">
            <Dashboard />
            <Patients />
          </Route>
          <Route path="/">
            <Dashboard />
            <DashboardHome exact path="/adminHome" />
          </Route>
         
          
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
