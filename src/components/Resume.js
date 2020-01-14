import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './About.css';


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

class Resume extends Component{
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
                        <Col style={{ backgroundColor: 'yellow', height: '100vh'}}>
                            <div className="header-text">
                                Resum&eacute;
                            </div>
                            <p className="text">
                                Here is the body where I will put my resume on display for the entire world.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Resume;