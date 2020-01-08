import React from 'react'
import Plx from 'react-plx';
import './Intro.css';

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
            <div className="Intro">
                {/**background ring*/}
                <div className="myBanner-box"></div>
                {/**Middle ground ring*/}
                <Plx
                     parallaxData={parallaxData2}
                >
                    <div className="banner-mbox"></div>
                </Plx>
                {/**Foreground ring*/}
                <Plx   
                    parallaxData={parallaxData}
                >
                    <div className="banner-fbox"></div>
                </Plx>
            </div>
        );
}
export default Intro;