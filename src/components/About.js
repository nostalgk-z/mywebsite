import React, {Component} from 'react';
import Plx from 'react-plx';
import './About.css';
import  Waypoint  from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';
import { Container ,Row,Col} from 'reactstrap';


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
 
class About extends Component{
    constructor(props){
        super(props);
        this.state={
            isShowBio : false,
            Bio: [
                {id: 0, text: 'hi'},
                {id: 1, text: ' hello'},
                {id: 2, text: ' good bye.'},
            ]
        }
    }

    _showBio = () =>{
        this.setState({isShowBio: !this.isShowBio});
    }

    render(){

        const { isShowBio } = this.state;

        return(
            <div>

                <div className="dummy-container" style={{ width: '100%', backgroundColor: 'transparent'}} />

                <div className="About-container">
                    I am an undergraduate student living in Pullman, attending Washington State University working toward my Bachelors degree in Computer Science. 
                    I have a passion for technology and community, which fuels my drive to create code that will make a difference. When I am not busy with school work I 
                    spend my free time working on personal projects, and hanging out with family. I believ the experience I gain from my courses has given me the foundation 
                    I need to approach new problems, quickly learn new programming languages, and write clean code. 
                </div>
            </div>
        )
    }
}

export default About;