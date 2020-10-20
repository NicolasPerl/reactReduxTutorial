import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import DishDetail from './DishDetail';

const RenderDish = ({dish, onClick}) => {
  return (
    <Link to={`menu/${dish.id}`}>
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </Link>
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
        <RenderDish dish={dish}/>
      </div>
    );
  }))

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to={`/home`}>Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
}

export default Menu;