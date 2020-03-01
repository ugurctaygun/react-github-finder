import React, {Component} from 'react';
import './App.css';
import NavBar from './components/layout/NavBar'
import Users from './components/users/Users'
import axios from 'axios'
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
    client_id: '32d21a3a3c299575e9a0',
    client_secret: '39871af25c4d56b19d6af6701854cd0e363018b0'
  }

  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${this.state.client_id}&client_secret=${this.state.client_secret}`);

    this.setState({ users: res.data.items , loading: false });
  };

  render() {

    return (
      <div className="App">
        <NavBar title=" Github Finder" logo="fab fa-github"/>
        <div className="container">
          <Search searchUsers= {this.searchUsers}/>
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
  
}

export default App;
