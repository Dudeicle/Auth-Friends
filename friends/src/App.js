import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm.js';
import FriendForm from './components/FriendsForm.js';
import PrivateRoute from './components/PrivateRoute.js';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/protected">Protected Page</Link>
        </div>
        
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendForm} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
