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
                                        <div className="proj-thumbnail Site">
                                        </div>
                                    </Col>
                                    
                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://safetoplay.herokuapp.com/">
                                            <div className="proj-thumbnail STP">
                                            </div>
                                        </a>
                                    </Col>


                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://partain-warmup.herokuapp.com/">
                                            <div className="proj-thumbnail Smile">
                                            </div>
                                        </a>
                                    </Col>


                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://github.com/ZanePartain/SpreadSheet/tree/master/Spreadsheet_Zane_Partain">
                                            <div className="proj-thumbnail SS">
                                            </div>
                                        </a>
                                    </Col>

                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://github.com/ZanePartain/EXT2-System">
                                            <div className="proj-thumbnail EXT2">
                                            </div>
                                        </a>
                                    </Col>

                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://github.com/ZanePartain/WumpusWorld_AI/blob/master/PyAgent.py">
                                            <div className="proj-thumbnail--end WW">
                                            </div>
                                        </a>
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