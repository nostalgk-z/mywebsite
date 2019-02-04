import React, { Component } from 'react';
import './Animation.css';
import Plx from 'react-plx';
import { Container, Row, Col} from 'reactstrap';

const parallaxData=[
    {
        start: 1000,
        end: 2500,
        properties:[
            {
                startValue: -50,
                endValue: 90,
                property:'translateY'
            },
        ],
    },
];
   
class Animation extends Component{

    render(){
        return(
            <div className="Animation-container">
                <div className="top-design">
                
                </div>

                <Plx
                    parallaxData={parallaxData}>
                    <Container className="anim-container">
                        <Row>
                            <Col className="anim-col">
                                <div className="mid-bg"></div>
                            </Col>
                            <Col className="anim-col">
                                <div className="mid-bg"></div> 
                            </Col>
                            <Col className="anim-col">
                                <div className="mid-bg"></div> 
                            </Col>
                            <Col className="anim-col">
                                <div className="mid-bg"></div> 
                            </Col>
                            
                        </Row>
                        <Row>
                            <Col className="anim-col">
                                    <div className="mid-bg"></div>
                                </Col>
                                <Col className="anim-col">
                                    <div className="mid-bg"></div> 
                                </Col>
                                <Col className="anim-col">
                                    <div className="mid-bg"></div> 
                                </Col>
                                <Col className="anim-col">
                                    <div className="mid-bg"></div> 
                            </Col>
                        </Row>
                        <Row>
                            <Col className="anim-col">
                                    <div className="mid-bg"></div>
                                <Col className="anim-col">
                                    <div className="mid-bg"></div> 
                                </Col>
                                <Col className="anim-col">
                                    <div className="mid-bg"></div> 
                                </Col>
                                <Col className="anim-col">
                                    <div className="mid-bg"></div> 
                                </Col>
                            </Col>
                        </Row>
                        
                    </Container>
                </Plx>
            </div>
        );
    }

}

export default Animation;