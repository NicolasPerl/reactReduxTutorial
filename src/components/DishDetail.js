import React, {Fragment} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

const DishDetail = props => {
  if (props.dish != null) {
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" object src={props.dish.image} alt={props.dish.name} />
              <CardBody>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments:</h4>
              {/* if there are comments render comments */}
              {props.dish.comments && renderComments(props.dish)}
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


const renderComments = (dish) => {
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