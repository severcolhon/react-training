import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Login from './containers/Login/Login';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Login}/>
        </Switch>
      </div>
    );
  }

}

export default withRouter(App);
