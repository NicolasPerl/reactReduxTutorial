import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap'
import { Control , LocalForm, Errors } from 'react-redux-form'


const required = (val) => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)
const isNumber = (val) => !isNaN(Number(val))
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const handleSubmit = (values) => {
  console.log(`Current status: ${JSON.stringify(values)}`)
  alert(`Current status: ${JSON.stringify(values)}`);
}

function CommentForm(props) {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleModal}>
      <ModalHeader toggle={props.toggleModal}>Comment</ModalHeader>
      <ModalBody>
        <LocalForm onSubmit={(values) => handleSubmit(values)}>
          <Row className="form-group">
            <Label htmlFor="firstname" md={2}>Your Name</Label>
            <Col md={10}>
              <Control.text model=".firstName" id="firstname" name="firstname"
                placeholder="Your Name"
                className="form-control"
                validators={{
                  required, minLength: minLength(3), maxLength: maxLength(15)
                }}/>
              <Errors 
                className="text-danger"
                model=".firstName"
                show="touched"
                messages={{
                  required: 'Required',
                  minLength: 'Must be greater than 2 characters',
                  maxLength: 'Must be 15 chars or less'
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="email" md={2}>Email</Label>
            <Col md={10}>
              <Control.text model=".email" id="email" name="email"
                placeholder="First Name"
                className="form-control"
                validators={{
                  required, validEmail
                }}/>
              <Errors 
                className="text-danger"
                model=".email"
                show="touched"
                messages={{
                  required: 'Required',
                  validEmail: 'Invalid Email Address'
                }}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col md={{size:10, offset: 2}}>
              <Button type="submit" color="primary">
                Send Feedback
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </ModalBody>
    </Modal>
  )
}
export default CommentForm