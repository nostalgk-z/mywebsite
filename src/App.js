import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      key: 1
    }
  }

  handleHomeSelect(key){
    this.setState({key});
  }

  render() {
    return (
      <div className="App">
       
        <Home />
      
      </div>
    );
  }
}

export default App;
