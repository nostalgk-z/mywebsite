import React, { PureComponent } from 'react';
import './App.css';
import Home from './components/Home';
import Waypoint from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';
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


    return (
        <div className="App">
        
          <Home />

        </div>
    );
  }
}

export default App;
