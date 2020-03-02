import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import axios from 'axios'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items , loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (msg,type) => {
    this.setState({ alert: { msg: msg, type: type }});
  }
  render() {

    return (
    <Router>
      <div className="App">
        <NavBar title=" Github Finder" logo="fab fa-github"/>
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path='/' render={props => (
              <React.Fragment>
                <Search searchUsers={this.searchUsers} 
                  clearUsers={this.clearUsers} 
                  showClear={this.state.users.length > 0 ? true:false}
                  setAlert={this.setAlert}
                  />
                <Users loading={this.state.loading} users={this.state.users}/>
              </React.Fragment>
            )} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </div>
    </Router>
    );
  }
  
}

export default App;
