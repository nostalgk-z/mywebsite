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
                    {/** EDUCATION ROW */}
                    <Row >
                        <Col className="resume-col" >
                            <Container>
                                <div className="resume-row" >
                                    <Col sm='3' >
                                        <div className="resume-title">
                                            <div className="resume-title-label">
                                                EDUCATION
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm='9' style={{backgroundColor: 'orange'}}>
                                        <div className="resume-body" >
                                            <div className="resume-body-title">
                                                Washington State University
                                            </div>
                                            <div className="resume-body-subscript">
                                                Bachelor of Science in Comupter Science | Graduation May, 2020
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </Container>
                        </Col>
                    </Row>

                    {/** EXPERIENCE ROW */}
                    <Row >
                        <Col className="resume-col" >
                            <Container>
                                <div className="resume-row" >
                                    <Col sm='3'>
                                        <div className="resume-title">
                                            <div className="resume-title-label">
                                                EXPERIENCE
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm='9' style={{backgroundColor: 'orange'}}>
                                        <div style={{height: 300, width: 100}}>

                                        </div>
                                    </Col>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                    
                    {/** SKILLS ROW */}
                    <Row>
                        <Col className="resume-col end" >
                            <Container >
                                <div className="resume-row end" >
                                    <Col sm='3'>
                                        <div className="resume-title">
                                            <div className="resume-title-label">
                                                SKILLS
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm='9' style={{backgroundColor: 'orange'}}>
                                        <div style={{height: 300, width: 100}}>

                                        </div>
                                    </Col>
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