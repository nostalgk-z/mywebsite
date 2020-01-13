import React, {Component} from 'react';
import Plx from 'react-plx';
import './About.css';
import  Waypoint  from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';
import { Container ,Row, Col } from 'reactstrap';


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

        }
    }

    _showBio = () =>{
        this.setState({isShowBio: !this.isShowBio});
    }

    render(){

        const { isShowBio } = this.state;

        return(
        
            <div className="outter">
                < Container className="About-container" style={{maxWidth: '100%'}}>
                    <Row>
                        <div className="about-me">
                            
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;