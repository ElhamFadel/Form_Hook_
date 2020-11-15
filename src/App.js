import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp/";
import SignIn from "./Pages/SignIn";
import Welcom from "./Pages/SignIn";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/SignIn" exact>
            <SignIn />
          </Route>
          <Route path="/" exact>
            <SignUp />
          </Route>

          <Route path="/Welcom" exact>
            <Welcom />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
