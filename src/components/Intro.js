import React, { Component } from 'react'
import Plx from 'react-plx';
import './Intro.css';


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
            <div className="Intro">
                 
                <Plx
                className='MyAwesomeParallax'
                    parallaxData={parallaxData}
            
                >
                    <div className="myBanner-box">
                    </div>
                </Plx>
                <Plx
                     parallaxData={parallaxData2}
                >
                    <div className="banner-mbox"></div>
                </Plx>
                <Plx   
                    parallaxData={parallaxData}
                >
                    <div className="banner-fbox"></div>
                </Plx>
                <div className="scroll-text">
                    scroll
                    <div className="scroll-icon"> </div>
                </div>
            </div>
        );
}
export default Intro;