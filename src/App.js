import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
