import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

import DishDetail from './DishDetail';

const RenderDish = ({dish, onClick}) => {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" object src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  )
}

const Menu = (props) => {
  // reminder: return component from funtion
  const renderDish = (dish) => {
    return <DishDetail dish = {dish} />
  }
  const menu = props.dishes.map((dish => {
    return (
      <div key={dish.id} className="col-12 col-md-5 mt-1">
        <RenderDish dish={dish} onClick={props.onClick} />
      </div>
    );
  }))

  return (
    <div className="container">
      <div className="row">
        {menu}
      </div>
    </div>
  );
}

export default Menu;