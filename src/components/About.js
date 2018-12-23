import React from 'react';
import Plx from 'react-plx';
import './About.css';
import { ParallaxBanner} from 'react-scroll-parallax';


const parallaxData=[
    {

        start: 0,
        end: 445,
        properties: [
            {
                startValue: 2,
                endValue: 1,
                property: 'scale',
            },
            {
                startValue: 0,
                endValue: 1,
                property: 'opacity',
            },
        ],
    },

   
];

const About = () =>{
    return(
        <div className="About-container">
            
            <h1 className="Name">Zane Partain</h1>

            <hr></hr>

            <Plx  
                parallaxData={parallaxData}
            >
                <div className="box-container">
                    <div className="box left"></div>
                    <div className="box right"></div>
                </div>
            </Plx>
        </div>
    )
}
export default About;