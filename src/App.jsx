import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './components/auth/SignUp'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignUp} />
      </Switch>
  </Router>
  );
}

export default App;
