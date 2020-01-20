import React, {Component} from 'react';
import Plx from 'react-plx';
import './About.css';
import  Waypoint  from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';
import { Container ,Row, Col, Button } from 'reactstrap';
import pdf from './mypdf/ZanePartain_2020.pdf';
import dwnldIcon from '../arrow_dwnld.svg';



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
                <Container className="my-container" style={{ maxWidth: '100%'}}>
                    <Row>
                        <Col style={{ backgroundColor: '#2B2B2B', minHeight: 'fit-content', maxHeight: 'fit-content'}}>
                            <div className="portrait">
                            </div>
                            
                            <Container  >
                                <Col>
                                    <Row className="about-cntnr" style={{marginLeft: '0px', marginRight: '0px'}}>
                                        {/** About Text */}
                                        <div className="header-text">
                                            About <span className="me-text" > Me </span>
                                        </div>
                                        <span className="text">
                                            I am a Seattle based Software Engineer, and received my BS in Computer Science at
                                            Washington State University in May, 2020. I have always had a knack for creating
                                            simple solutions, and an eye for detail. With my love for technology, knowledge of 
                                            coding, and entreprenurial spirit I have an interest in full-stack development. I 
                                            am always having new ideas or thinking of new ways to do things, and love having the 
                                            ability to build solutions from scratch. I am a self-starter who loves to tackle challenges 
                                            head on. Whether I am in the gym or in the office I am always focused on the task at hand 
                                            and determined to get results.
                                        </span>
                                        {/** Download Resume Button */}
                                        <a href={pdf} download>  
                                            <Button color="danger" className="download-link">
                                                <div className="dwnld-icon">
                                                </div>
                                                <span style={{marginLeft: '5px', marginRight: '5px', fontWeight: 500 }}>
                                                    Download Resume
                                                </span>
                                            </Button>
                                        </a>
                                    </Row>
                                </Col>
                            </Container>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;