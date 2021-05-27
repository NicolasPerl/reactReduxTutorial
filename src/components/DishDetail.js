import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem,Breadcrumb, Button, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent'
import useToggle from '../hooks/useToggle'

const RenderDish = ({dish}) => {
  return (
    <Card>
      <CardImg width="100%" object src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  )
}


const DishDetail = (props) => {
  const [isOpen, toggleModal] = useToggle()

  if (props.dish != null) {
    return(
      <div className="container">
        <div className="row">
        <Breadcrumb>
          <BreadcrumbItem active><Link to={`/menu`}>Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish}/>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments:</h4>
              {/* if there are comments render comments */}
              {props.comments && <RenderComments comments={props.comments} />}
              <Button outline onClick={toggleModal}>
                <span className="fa fa-sign-in fa-lg">Submit Comment</span>
              </Button>
              <CommentForm isOpen={isOpen} toggleModal={toggleModal}/>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }
}

export default DishDetail;

const RenderComments = ({comments}) => {
  const comment = comments.map((comment => {
    return (
      <ListGroup key={comment.id} flush>
        <ListGroupItem>{comment.comment}</ListGroupItem>
        <ListGroupItem>-- {comment.author}, {comment.date}</ListGroupItem>
      </ListGroup>
    )
  }))
  return comment;
}