import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

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
  if (props.dish != null) {
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish}/>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments:</h4>
              {/* if there are comments render comments */}
              {props.dish.comments && <RenderComments dish={props.dish} />}
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


const RenderComments = ({dish}) => {
  const comment = dish.comments.map((comment => {
    return (
      <ListGroup key={dish.id} flush>
        <ListGroupItem>{comment}</ListGroupItem>
        <ListGroupItem>-- {dish.commentName}, {dish.time}</ListGroupItem>
      </ListGroup>
    )
  }))
  return comment;
}