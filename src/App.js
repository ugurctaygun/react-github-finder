import React, {Component} from 'react';
import './App.css';
import NavBar from './components/layout/NavBar'

class App extends Component {

  render() {
    const name = "john doe";
    const loading = true;

    return (
      <div className="App">
        <NavBar title=" Github Finder" logo="fab fa-github"/>
        {loading ? <h3>Loading...</h3> : <h1>Welcome {name}</h1>}
      </div>
    );
  }
  
}

export default App;
