import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './About.css';



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

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowBio: false,

        }
    }

    _showBio = () => {
        this.setState({ isShowBio: !this.isShowBio });
    }

    render() {

        const { isShowBio } = this.state;

        return (

            <div className="outter-about">
                <Container className="my-container" style={{ maxWidth: '100%' }}>
                    <Row >
                        <Col className="resume-col" >
                            <Container>
                                <div className="resume-row" >
                                    <Col sm='4' style={{backgroundColor: 'yellow', minHeight: 'contain'}}>
                                        <div style={{height: 100, width: 100}}>

                                        </div>
                                    </Col>
                                    <Col sm='8' style={{backgroundColor: 'orange', minHeight: 'contain'}}>
                                        <div style={{height: 500, width: 100}}>

                                        </div>
                                    </Col>
                                    {/* <div style={{width: '100%', height: '400px', backgroundColor: 'blue'}}>
                                    </div> */}
                                </div>
                            </Container>
                        </Col>
                    </Row>

                    <Row >
                        <Col className="resume-col" >
                            <Container>
                                <div className="resume-row" >
                                    <div style={{width: '100%', height: '400px', backgroundColor: 'blue'}}>

                                    </div>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col className="resume-col end" >
                            <Container >
                                <div className="resume-row end" >
                                    <div style={{width: '100%', height: '400px', backgroundColor: 'blue'}}>

                                    </div>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Resume;