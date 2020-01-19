import React, { Component } from 'react';
import { Col, Container, Row, Progress } from 'reactstrap';
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
                                    <Col sm='9' style={{backgroundColor: 'transparent'}}>
                                        <div className="resume-body" >
                                            <div className="resume-body-title">
                                                Washington State University
                                            </div>
                                            <div className="resume-body-subscript">
                                                Bachelor of Science in Comupter Science | Graduation May, 2020
                                            </div>
                                            <p className="resume-body-text">
                                                Body of text that I will use for a brief description of my journey at WSU. It will
                                                also cover the key concepts and techniques I learned to be a great software engineer.
                                            </p>
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
                                    <Col sm='9' style={{backgroundColor: 'transparent'}}>
                                        <div className="resume-body" >
                                            {/** Front-End Developer */}
                                            <div className="resume-body-title">
                                                Front-End Developer 
                                            </div>
                                            <div className="resume-body-subscript">
                                                Blue-Path.org | October 2019 - Current
                                            </div>
                                            <p className="resume-body-text">
                                                <ul>
                                                    <li>
                                                        Build, test, and deploy a mobile app on both iOS and Android using React, Redux, and Apache Cordova.
                                                    </li>
                                                    <li>
                                                        Being one of two developers on the project I am solely responsible for documentation,
                                                        planning, prioritizing tasks, meeting deadlines, and managing the project.
                                                    </li>
                                                    <li>
                                                        Gained knowledge and tools include React, Redux, Apache Cordova, GitLab, and OAuth.
                                                    </li>
                                                </ul>
                                            </p>

                                            {/** Software QA Intern */}
                                            <div className="resume-body-title">
                                                Software QA Intern
                                            </div>
                                            <div className="resume-body-subscript">
                                                METER Group Inc | May 2019 – October 2019
                                            </div>
                                            <p className="resume-body-text">
                                                <ul>
                                                    <li>
                                                        Developed automated testing framework that utilizes headless drivers and supports parallel
                                                        testing with Python, Pytest, Selenium, Paramiko, and Django.
                                                    </li>
                                                    <li>
                                                        Gained knowledge and tools include Python, Pytest, Paramiko, Database Architecture, 
                                                        Regression Testing, test automation, issue documentation, SSHClient, Spira Test, and GitLab.
                                                    </li>
                                                </ul>
                                            </p>
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

                                    <Col sm='9' style={{backgroundColor: 'transparent'}}>
                                        <div className="resume-body" >
                                            <div style={{textAlign: 'left', fontWeight: 600}}>Python</div>
                                            <Progress className="prog-bar" value="75"> 75% </Progress>

                                            <div style={{textAlign: 'left', fontWeight: 600}}>C#</div>
                                            <Progress value="70"> 70% </Progress>

                                            <div style={{textAlign: 'left', fontWeight: 600}}>ReactJS</div>
                                            <Progress value="80"> 80% </Progress>

                                            <div style={{textAlign: 'left', fontWeight: 600}}>NodeJS</div>
                                            <Progress value="60"> 60% </Progress>

                                            <div style={{textAlign: 'left', fontWeight: 600}}>MongoDB</div>
                                            <Progress value="60"> 60% </Progress>

                                            <div style={{textAlign: 'left', fontWeight: 600}}>PostgreSQL</div>
                                            <Progress value="70"> 70% </Progress>

                                            <div style={{textAlign: 'left', fontWeight: 600}}>CSS</div>
                                            <Progress value="90"> 90% </Progress>
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