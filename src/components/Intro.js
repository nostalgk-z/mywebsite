import React from 'react'
import Plx from 'react-plx';
import './Intro.css';
import { Container, Row, Col } from 'reactstrap';
import About from './About';

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


const Intro = () =>{
            
        return(
                <div>
                    <Container className="Intro">
                        <Row  style={{ height: "inherit", position: "relative" }}>
                            
                            <Col xs="6"sm="6">
                                HI
                            </Col>
                            {/** MY HEADSHOT */}
                            <Col xs="6"sm="6">
                                hello
                                <div className="my-headshot"></div>
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
export default Intro;