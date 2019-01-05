import React, { PureComponent } from 'react';
import './App.css';
import Home from './components/Home';

class App extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      isActive: false
    }
  }


  handleHomeSelect(key){
    this.setState({key});
  }

  _showBio(){
    this.setState({isActive: true});
  }

  render() {

    const {
      isActive
    } = this.state;

    return (
      <div className="App">
       
        <Home />

      </div>
    );
  }
}

export default App;
