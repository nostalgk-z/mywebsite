import React, { Component } from 'react';
import './App.css';
import Waypoint from 'react-waypoint';
import { Container, Row } from 'reactstrap';
import { 
  Link, 
  DirectLink, 
  Element , 
  Events, 
  animateScroll as scroll, 
  scrollSpy, 
  scroller,
} from 'react-scroll';
import Intro from './components/Intro';
import About from './components/About';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Resume from './components/Resume';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isSticky: false
    }

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  // log the end and beginning of all elements on DOM
  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('begin', function() {
      console.log('end', arguments);
    });
  }

  /** scroll all the way to top */
  scrollToTop() {
    scroll.scrollToTop();
  }

  /** scroll to a specific element on the DOM */
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  /** Waypoint calls to set navbar as sticky */
  _showBio(){
    this.setState({isSticky: !this.state.isSticky});
  }

  /** remove the scroll event listeners */
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }



  render() {
    return (
        <Container  className="App" style={{maxWidth: '100%', padding: 0}}>
          
          {/** for sticky nav bar */}
          <Waypoint
            onEnter={this._showBio.bind(this)}
            onLeave={this._showBio.bind(this)}
            bottomOffset='99.9%'
          >
            <div>
              <NavBar isSticky={this.state.isSticky} handleClick={this.scrollTo.bind(this)} scrollToTop={this.scrollToTop.bind(this)}/> 
              <Intro />
              
              {/** Down Icon to smooth scroll to About section */}
              <Link
                onClick={this.scrollTo.bind(this)}
                activeClass="active"
                className="down-icon"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
              </Link>
            
              <Element name="about" className="element">
                <div style={{height: '57px', width: '100%'}}></div>
                <About />
              </Element>

              <Element name="resume" className="element">
                <div style={{marginTop: '-57px', height: '57px', width: '100%'}}></div>
                <Resume />
              </Element>

              <Element name="projects" className="element">
                <div style={{marginTop: '-57px', height: '57px', width: '100%'}}></div>
                <Projects />
              </Element>

              <div className="endbar">
                {/** Up Icon to smooth scroll to About section */}
                <div className="up-icon" onClick={this.scrollToTop.bind(this)}>
                </div>
              </div>
          
            </div>
          </Waypoint>          
        </Container>  

    );
  }
}

export default App;
