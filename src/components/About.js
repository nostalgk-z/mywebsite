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
        
            <div className="outter-about">
                <Container className="About-container" style={{ maxWidth: '100%'}}>
                    <Row>
                        <Col style={{ backgroundColor: 'gray', height: '100vh'}}>
                            <div className="about-text">
                                About <span className="me-text" > Me </span>
                            </div>
                            <p className="text">
                                Here is the body of text that will go ahead and tell the world who I am.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ backgroundColor: 'green',height: '100vh'}}>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;