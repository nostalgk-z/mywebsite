import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
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
    this.setState({isActive: true});
  }

  render() {


    return (
        <Container style={{maxWidth: '100%', padding: 0, overflow: 'hidden'}}>
          
            <NavBar />
            <Home />
            <About />
            <Projects />

        </Container>  
    );
  }
}

export default App;
