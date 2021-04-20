import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Admittance from "./components/Admittance/Admittance/Admittance";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import AllStudents from "./components/AllStudents/AllStudents/AllStudents";
import AddTrainer from "./components/AddTrainer/AddTrainer";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/admittance">
            <Admittance></Admittance>
          </Route>
          <PrivateRoute path="/dashboard/admittance">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/allStudents">
            <AllStudents></AllStudents>
          </PrivateRoute>
          <Route path="/addTrainer">
            <AddTrainer></AddTrainer>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
