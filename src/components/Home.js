import React from 'react';
import './Home.css';
import About from './About';
import Intro from './Intro';
import Projects from './Projects';

const Home = (props) =>{
    return(
        <div className="Home">
            <Intro />
            <About />
            <Projects />
        </div>
    );
}
export default Home;