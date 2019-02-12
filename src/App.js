import React, { Component } from 'react';
import './App.css';
import Login from './Component/Login/Login'
import Admin from './Component/Admin/Admin'
import User from './Component/User/User'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Switch>
        <Route  exact path="/" component={Login}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path='/user' component={User}/>

      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
