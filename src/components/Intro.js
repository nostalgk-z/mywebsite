import React, { Component } from 'react'
import Plx from 'react-plx';
import './Intro.css';
import './About.css';


import Waypoint from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';
import { Container, Row, Col } from 'reactstrap';


/**
 * The parallaxData _transformation's below will take place over a specified
 * _transition time/effect, and scroll position.
 */
const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
            {
                startValue: 1,
                endValue: 2,
                property: 'scale',
            },
        ],
        },
    ];
const parallaxData2 = [
      {
        start: 0,
        end: 500,
        properties: [  
          {
              startValue: 0,
              endValue: 500,
              property: 'translateX',
          }
        ],
      },
      
    ];


class Intro extends Component{

    render(){
        return(
                <div>
                    <Container className="Intro">
                    
                        <Row  style={{ height: "inherit", position: "relative", color: "black" }}>
                            {/** BIO */}
                            <Col xs="6"sm="6" >
                                {/** TODO :: add media screen difference styling */}
                                <div style={{ marginTop: "25%"}}>
                                    I am an undergraduate student living in Pullman, attending Washington State University working 
                                    toward my Bachelors degree in Computer Science. I have a passion for technology and community, 
                                    which fuels my drive to create code that will make a difference. When I am not busy with school 
                                    work I spend my free time working on personal projects, and hanging out with family.
                                </div>
                            </Col>

                            {/** MY HEADSHOT */}
                            <Col xs="6"sm="6" >
                                <div className="my-headshot" style={{ marginTop: "-8%"}} ></div>
                            </Col>
                        </Row>

                        {/* <Plx
                            parallaxData={parallaxData2}
                        >
                            <div className="banner-mbox"></div>
                        </Plx>
                        
                        <Plx   
                            parallaxData={parallaxData}
                        >
                            <div className="banner-fbox"></div>
                        </Plx> */}
                    </Container>
                    
                </div>
    
        );
    }
}

export default Intro;