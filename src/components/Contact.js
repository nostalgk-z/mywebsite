import React, {Component} from 'react';
import './Contact.css';

import {
    Form,FormGroup,Label,Input,
    Container,Row,Col,
    Button } from 'reactstrap';

class Contact extends Component{

    render(){
        return(
            <div className="Contact-container">
                <h1 className="Name contact">C O N T A C T</h1>
                <div className="contact-content">
                   <Container fluid={true}>
                       <Row > 
                           <Col sm={{ size: 6, order: 2, offset: 1 }}>
                                <div className="contact-info">
                                    {/** 
                                       put email (not WSU), linked-in, instagram, resume, github 
                                    */}
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
                
                </div>
            
            </div>
        ); 
    }

}

export default Contact;