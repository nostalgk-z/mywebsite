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
                    <Container className="Intro" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                    
                        <Row  style={{ height: "inherit", position: "relative", color: "black" }}>
                            {/** BIO */}
                            <Col lg="6" md="6" sm="12"  style={{height: 'fit-content'}}>
                                {/** TODO :: add media screen difference styling */}
                                
                                <h1 className="header"> ZANE PARTAIN </h1>
                                <div className="footer" style={{ fontWeight: 500 }}>
                                    I have a love for technology, and a passion to create.
                                </div>
                            </Col>

                            {/** MY HEADSHOT */}
                            <Col lg="6" md="6" style={{height: '700px'}}>
                                <div className="my-headshot" ></div>
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