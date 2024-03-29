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
import Home from "./Pages/Home";
import Welcom from "./Pages/SignIn";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <SignIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          {/* <Route path="/" exact>
            <Home />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
