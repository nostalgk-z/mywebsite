import React, {Component} from 'react';
import Plx from 'react-plx';
import './About.css';
import  Waypoint  from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';
import { Grid } from 'react-bootstrap';


const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
            {
                startValue: -15,
                endValue: 0,
                property: 'translateY',
            },
        ],
    },
    
    {
        start: 500,
        end: 1000,
        properties: [
            {
                startValue: 0,
                endValue: 20,
                property: 'translateY',
            },
        ],
    },
];
 
class About extends Component{
    constructor(props){
        super(props);
        this.state={
            isShowBio : false,
            Bio: [
                {id: 0, text: 'hi'},
                {id: 1, text: ' hello'},
                {id: 2, text: ' good bye.'},
            ]
        }
    }

    _showBio = () =>{
        this.setState({isShowBio: !this.isShowBio});
    }

    render(){

        const { isShowBio } = this.state;

        return(
            <div className="About-container">
                
                <h1 className="Name">
                    <span>Z A N E P A R T A I N</span> 
                    
                </h1>
            
                
                <hr></hr>
                <div className="bull-container">
                    <Plx
                        parallaxData={parallaxData}
                    >
                        <div>
                            <div className="one">  Computer Science</div> 
                            <div className="two">  Software Engineer</div> 
                            <div className="three">  Web Developer</div> 
                        </div>
                    </Plx>
                </div>
                <br></br>
                <Waypoint
                    onEnter={this._showBio.bind(this)}
                    onLeave={this._showBio.bind(this)}
                    bottomOffset='60%'
                >
                    <div> 
                        
                        <Grid style={{paddingTop: '2rem'}}>
                            <CSSTransition
                                in={isShowBio} //boolean : trigger for animation
                                timeout={0} //ms
                                classNames="bio" //CSS class : name of animation
                                unmountOnExit 
                            >
                                <div className="bio-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                    officia deserunt mollit anim id est laborum.
                                </div>
                            </CSSTransition>
                        </Grid>

                    </div>
                </Waypoint>
            </div>
        )
    }
}

export default About;