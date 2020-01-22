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
 

class Projects extends Component{
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
                        <Col className="project-col">
                            
                            <Container style={{ margin: 'auto'}}>
                                <div className="header-text">
                                    Projects
                                </div>
                               
                                {/** left-side column */}
                                <Row className="project-row">
                                    
                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <div className="proj-thumbnail WW">
                                            <div className="mask"></div>
                                        </div>
                                    </Col>
                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <div className="proj-thumbnail SS">

                                        </div>
                                    </Col>
                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <div className="proj-thumbnail Smile">

                                        </div>
                                    </Col>
                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <div className="proj-thumbnail">

                                        </div>
                                    </Col>
                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <div className="proj-thumbnail">

                                        </div>
                                    </Col>
                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <div className="proj-thumbnail--end">

                                        </div>
                                    </Col>
                                </Row>  

                                {/* <Row>
                                    <Col sm='8'>
                                        <div className="resume-body" style={{backgroundColor: 'blue'}}>
                                            <div style={{height: '200px', width: '100%'}}>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <div style={{ display:'block',margin:'auto', height: '200px', width: '200px', backgroundColor: 'orange'}}>

                                        </div>
                                    </Col>
                                </Row>            */}
                                
                            </Container>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Projects;