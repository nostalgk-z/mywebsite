import React from 'react';
import './Home.css';
import Plx from 'react-plx';
import About from './About';
import Intro from './Intro';
  const parallaxData3 = [
    {
      start: 325,
      end: 360,
      properties: [  
        {
            startValue: 0,
            endValue: 100,
            property: 'translateX',
        }
      ],
    },
    
  ];
const Home = (props) =>{
    return(
        <div className="Home">
            <Intro />
            <About />
        </div>
    );
}
export default Home;