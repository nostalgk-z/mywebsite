import React, { Component } from 'react';
import './Projects.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import  Plx  from 'react-plx';
import { CSSTransition } from 'react-transition-group';
import Waypoint from 'react-waypoint';

const parallaxData = [
    {
      start: 1100,
      end: 2000,
      properties: [
            {
                startValue: 0,
                endValue: 50,
                property: 'translateY',
            },
            {
                startValue: 1,
                endValue: 1.3,
                property: 'scale',
            },
        ],
    },
];

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={
            isShowTitle: false,
        };
    }

    _showTitle = () => {
        this.setState({isShowTitle: true});
    }

    _showContent = () => {
        this.setState({isShowContent: true});
        console.log("hi");
    }

    render(){
        const { isShowTitle }  = this.state;

        return(

                <div className="Projects-container">

                    <Waypoint
                        onEnter={this._showTitle.bind(this)}
                        bottomOffset='20%'
                    >
                        <div className="title-parent"> 
                            <Plx
                                parallaxData={parallaxData}
                            >
                                <CSSTransition className="title-container p"
                                    in={isShowTitle}
                                    timeout={0}
                                    classNames="P"
                                    unmountOnExit
                                >
                                    <h1 className="Name">
                                        P R O J
                                    
                                    </h1>
                                </CSSTransition>
                                <CSSTransition className="title-container r"
                                    in={isShowTitle}
                                    timeout={0}
                                    classNames="R"
                                    unmountOnExit
                                >
                                    <h1 className="Name">
                                        E C T S
                                        
                                    </h1>
                                </CSSTransition>
                            </Plx>
                            <CSSTransition className="content-container"
                                in={isShowTitle}
                                timeout={0}
                                classNames="content"
                                unmountOnExit
                            >
                                <div>
                                    
                                    <hr></hr>

                                    <Container className="project-container">
                                        <Row>
                                            <Col 
                                                 xs="6"
                                                 sm="4"
                                                >
                                                <div className="card">
                                                  
                                                    <a href="https://github.com/ZanePartain/Kickr">Kickr</a>
                                                    <div className="description">
                                                        Kickr is an intramural soccer league managing web application. This is a group project 
                                                        consisting of 4 team members including myself. I was responsible for 
                                                        the frontend development along with a col…
                                                    </div>
                                                    <div className="dot-parent">
                                                        <div className="dot react"></div>
                                                        <div className="dot-text">
                                                            React
                                                        </div>
                                                    </div>

                                                </div>
                                            </Col>
                                            <Col 
                                               xs="6"
                                               sm="4">
                                               <div className="card">

                                                    <a href="https://github.com/ZanePartain/LinuxFileSimulator">Linux File Simulator</a>
                                                    <div className="description">
                                                        Unix/Linux file system. I have implemented the major functionality of a Linux file
                                                        system. It supports functions such as mkdir, rmdir, rm, creat, cd, ls, etc..
                                                    </div>
                                                    <div className="dot python">
                                                    </div>
                                                    <div className="dot-text">
                                                        C
                                                    </div>

                                                </div>
                                            </Col>
                                            
                                            <Col 
                                                xs="6"
                                                sm="4">
                                                <div className="card">

                                                    <a href="https://github.com/ZanePartain/Smile">Smile</a>
                                                    <div className="description">
                                                    Smile was a project I made for a course at WSU that focused on full-stack development. 
                                                    The professor for this course gave the students a bare-minumum guide 
                                                    to follow as well as some starter code. M…
                                                    </div>
                                                    <div className="dot java">
                                                    </div>
                                                    <div className="dot-text">
                                                        Javascript
                                                    </div>

                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>

                                    <Jumbotron className="git-jumbo">
                                        <hr></hr>
                                        <a href="https://github.com/ZanePartain"><h2>GITHUB</h2></a>
                                        
                                    </Jumbotron>
                                </div>
                            </CSSTransition>
                        </div>
                    </Waypoint>
                </div>
        );
    }
}

export default Projects;