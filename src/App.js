import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Admittance from "./components/Admittance/Admittance/Admittance";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
// import AllStudents from "./components/AllStudents/AllStudents/AllStudents";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/admittance">
            <Admittance></Admittance>
          </Route>
          <Route path="/dashboard/admittance">
            <Dashboard></Dashboard>
          </Route>
          {/* <Route path="/dashboard/allStudents">
            <AllStudents></AllStudents>
          </Route> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
