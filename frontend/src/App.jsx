// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
