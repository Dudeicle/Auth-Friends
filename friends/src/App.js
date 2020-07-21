import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import LoginForm from './components/LoginForm.js';
import FriendForm from './components/FriendsForm.js';
import PrivateRoute from './components/PrivateRoute.js';
import FriendList from './components/FriendsList.js';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/login/addfriend/protected">Add Friend</Link>
        </div>
        <div>
          <Link to="/login/friendlist/protected">Friend List</Link>
        </div>
        
        <Switch>
          <PrivateRoute exact path="/login/addfriend/protected" component={FriendForm} />
          <PrivateRoute exact path="/login/friendlist/protected" component={FriendList} />
          <Route path="/login" component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
