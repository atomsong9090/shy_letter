import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
import Write from "./pages/write";
import NavBar from "./components/nav";
import ReadMain from "./pages/readMain";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Main />
        </Route>
        <Route exact path="/write">
          <NavBar />
          <Write />
        </Route>
        <Route exact path="/readmain">
          <NavBar />
          <ReadMain />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
