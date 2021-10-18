import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AboutCompany from "./components/Home/AboutCompany/AboutCompany";
import Home from "./components/Home/Home/Home";
import Login from "./components/Shared/Login/Login";
import NotFound from "./components/Shared/NotFound/NotFound";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>
        </Route>
        <Route path="/about" >
          <AboutCompany></AboutCompany>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
