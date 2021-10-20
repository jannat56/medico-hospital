import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const omplain = () => {
    return (
        <div className="" id="complain">
            <h1 className="p-4 expert-card text-primary" >Please Complain your problem</h1>
            <h4 className="text-primary">Be Healthy</h4>
            <Form className=" form bg-light text-primary padding-form ">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Form.Label column sm="2">
      email
    </Form.Label>
    <Col sm="10">
      <Form.Control type="email" placeholder="email" />
    </Col>
  </Form.Group>
  <FloatingLabel controlId="floatingTextarea" label="your review" className="mb-3">
    <Form.Control as="textarea" placeholder="Leave a comment here" />
  </FloatingLabel>
  <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
  </FloatingLabel>
  <Button className="btn btn-danger m-4">Submit</Button>
  <Link to="/"><button className="btn btn-danger">Go Back</button></Link>
</Form>
            
        </div>
    );
};

export default omplain;