import React, {Component} from 'react';
import './Contact.css';
import * as firebase from 'firebase';

import {
    Form,FormGroup,Label,Input,
    Container,Row,Col,
    Button } from 'reactstrap';

class Contact extends Component{
    constructor(){
        super();
        this.state={
            speed: 10
        }
    }

    componentWillMount(){
       const rootRef = firebase.database().ref().child('email');
       const speedRef = rootRef.child('speed');
       speedRef.on('value', snap => {
           this.setState({
               speed: snap.val()
           });
       });

    }

    render(){
        return(
            <div className="Contact-container">
                <h1 className="Name contact">C O N T A C T</h1>
                <div className="contact-content">
                    <label>
                        Email: <tab></tab><div className="cont">zanepartain@live.com</div>
                    </label>
                    <br></br>
                    <label>
                        Github: <tab></tab>
                        <a href="https://github.com/ZanePartain"><div className="cont">https://github.com/ZanePartain</div></a>
                    </label>
                    {/** 
                   <Container fluid={true}>
                       <Row > 
                           <Col sm={{ size: 6, order: 2, offset: 1 }}>
                                <div className="contact-info">
                                    {/** 
                                       put email (not WSU), linked-in, instagram, resume, github 
                                    
                                </div>
                           </Col>
                           <Col sm={{ size: 6, order: 1, offset: 1 }}>
                                <div className="contact-info2">
                                    <Form>
                                        <FormGroup>
                                            <Label className="label" for={"firstName"}> First Name </Label>
                                            <Input type="text" name="first_name" id="firstName" />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label className="label" for={"email"}> Email </Label>
                                            <Input type="email" name="email" id="email" />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label className="label" for={"subject"}> Subject </Label>
                                            <Input type="text" name="subject" id="subject" />
                                        </FormGroup>

                                        <hr className="form-hr"></hr>

                                        <FormGroup>
                                            <Input type="textarea" name="text" id="Text" />
                                        </FormGroup>

                                        <Button className="send-msg-button">Send Message</Button>
                                        
                                    </Form>
                                </div>
                           </Col>
                       </Row>
                   </Container>
                         */}
                </div>
                
            </div>
        ); 
    }

}

export default Contact;