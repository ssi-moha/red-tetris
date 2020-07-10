import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home/Home';
import useSocketListener from './libft/useSocketListener';

function App() {
  const payload = useSocketListener("message");
  
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
