import React, {Component} from 'react';
import Plx from 'react-plx';
import './About.css';
import  Waypoint  from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';
import { Container ,Row, Col } from 'reactstrap';
import pdf from './mypdf/ZanePartain_2020.pdf';



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
                        <Col style={{ backgroundColor: '#2B2B2B', height: '100vh'}}>
                            <div className="header-text">
                                About <span className="me-text" > Me </span>
                            </div>
                            <p className="text">
                                Here is the body of text that will go ahead and tell the world who I am.
                            </p>
                            <a href={pdf} download> click here for my pdf </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;