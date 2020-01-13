import React, { Component } from 'react';
import './App.css';
import Waypoint from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';
import NavBar from './components/NavBar';
import About from './components/About';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Projects from './components/Projects';


class App extends Component {
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
    this.setState({isActive: !this.state.isActive});
  }

  render() {


    return (
        <Container  className="App" style={{maxWidth: '100%', padding: 0, backgroundColor: 'tomato'}}>
          {/** for sticky nav bar */}
          <Waypoint
            onEnter={this._showBio.bind(this)}
            onLeave={this._showBio.bind(this)}
            bottomOffset='99.9%'
          >
            <div>
              <NavBar isActive={this.state.isActive} /> 
              <Intro />
              <About />

            </div>
          </Waypoint>
          
          
          {/* <Projects /> */}
          

        </Container>  
    );
  }
}

export default App;
