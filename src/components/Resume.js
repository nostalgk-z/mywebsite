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

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowBio: false,

        }
    }

    _showBio = () => {
        this.setState({ isShowBio: !this.isShowBio });
    }

    render() {

        const { isShowBio } = this.state;

        return (

            <div className="outter-about">
                <Container className="my-container" style={{ maxWidth: '100%' }}>
                    <Row >
                        <Col style={{ 
                                backgroundColor: 'yellow', 
                                minHeight: '55vh', 
                                maxHeight:'fit-content', 
                                paddingTop: '6%', 
                                paddingBottom: '6%' 
                             }}
                        >
                            <Container>
                                <div style={{minHeight: '50vh', width: '100%', backgroundColor: 'white'}}>

                                </div>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ 
                                backgroundColor: 'orange',
                                minHeight: '55vh', 
                                maxHeight:'fit-content',
                                paddingTop: '6%', 
                                paddingBottom: '6%'  
                            }}
                        >
                            <Container>
                                <div style={{minHeight: '50vh', width: '100%', backgroundColor: 'white'}}>

                                </div>
                            </Container>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Resume;