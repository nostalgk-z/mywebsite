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
                                <div  style={{marginBottom: '30px', fontSize: '20px', marginTop: '5px', fontWeight: 500}}>
                                    SOME OF MY PROJECTS
                                </div>
                               
                                {/** left-side column */}
                                <Row className="project-row">
                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://zanepartain.herokuapp.com/" style={{textDecoration: 'none'}}>
                                            <div className="proj-thumbnail Site">
                                                <div className="mask">
                                                    My Personal Website
                                                </div>
                                            </div>
                                        </a>
                                    </Col>
                                    
                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://safetoplay.herokuapp.com/" style={{textDecoration: 'none'}}>
                                            <div className="proj-thumbnail STP">
                                                <div className="mask">
                                                    Safe To Play Web App
                                                </div>
                                            </div>
                                        </a>
                                    </Col>


                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://partain-warmup.herokuapp.com/" style={{textDecoration: 'none'}}>
                                            <div className="proj-thumbnail Smile">
                                                <div className="mask">
                                                    Smile Web App
                                                </div>
                                            </div>
                                        </a>
                                    </Col>


                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://github.com/ZanePartain/SpreadSheet/tree/master/Spreadsheet_Zane_Partain" style={{textDecoration: 'none'}}>
                                            <div className="proj-thumbnail SS">
                                                <div className="mask">
                                                    Spreahsheet WPF Application
                                                </div>
                                            </div>
                                        </a>
                                    </Col>

                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://github.com/ZanePartain/EXT2-System" style={{textDecoration: 'none'}}>
                                            <div className="proj-thumbnail EXT2">
                                                <div className="mask">
                                                    Linux EXT2 File System
                                                </div>
                                            </div>
                                        </a>
                                    </Col>

                                    <Col sm='4' style={{maxWidth:'100%'}}>
                                        <a href="https://github.com/ZanePartain/WumpusWorld_AI/blob/master/PyAgent.py" style={{textDecoration: 'none'}}>
                                            <div className="proj-thumbnail--end WW">
                                                <div className="mask">
                                                   Probabilistic AI in Wumpus World
                                                </div>
                                            </div>
                                        </a>
                                    </Col>
                                </Row>  
                            </Container>
                        
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Projects;