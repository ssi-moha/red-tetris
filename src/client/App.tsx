import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './routes/Home/Home';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Redirect to='/' />
        </Switch>
      </>
    </Router>
  );
}

export default App;
