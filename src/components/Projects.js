import React, { Component } from 'react';
import './Projects.css';
import { Container, Row, Col } from 'reactstrap';
import  Plx  from 'react-plx';
import { CSSTransition } from 'react-transition-group';
import Waypoint from 'react-waypoint';

const parallaxData = [
    {
      start: 1000,
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
            isShowContent: false,
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
        const { isShowTitle, isShowContent } = this.state;

        return(
            <div className="Projects-container">
                <Waypoint
                    onEnter={this._showTitle.bind(this)}
                    bottomOffset='70%'
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
                    </div>
                </Waypoint>
                
                <Waypoint className="projects-parent"
                    onEnter={this._showContent.bind(this)}
                    bottomOffset='75%'
                >
                    <div >
                       
                        <CSSTransition className="content-container"
                            in={isShowContent}
                            timeout={0}
                            classNames="content"
                            unmountOnExit
                        >
                            <div>
                                
                                <div className="my-hr">
                                </div>

                                <Container className="project-container">
                                    <Row>
                                        <Col>
                                            <a href="#">Smile</a>
                                            <div className="description">
                                            Smile was a project I made for a course at WSU that focused on full-stack development. 
                                            The professor for this course gave the students a bare-minumum guide 
                                            to follow as well as some starter code. M…
                                            </div>
                                        </Col>
                                        <Col>
                                            <a href="#">Smile</a>
                                            <div className="description">
                                            Smile was a project I made for a course at WSU that focused on full-stack development. 
                                            The professor for this course gave the students a bare-minumum guide 
                                            to follow as well as some starter code. M…
                                            </div>
                                        </Col>
                                        <Col>
                                            <a href="#">Smile</a>
                                            <div className="description">
                                            Smile was a project I made for a course at WSU that focused on full-stack development. 
                                            The professor for this course gave the students a bare-minumum guide 
                                            to follow as well as some starter code. M…
                                            </div>
                                        </Col>
                                        
                                    </Row>
                                </Container>
                            </div>
                        </CSSTransition>
                    </div>
                </Waypoint>


              
            </div>
        );
    }
}

export default Projects;