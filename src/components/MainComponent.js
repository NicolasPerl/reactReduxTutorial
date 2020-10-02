import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import dishes from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({selectedDish: dishId});
  }
  render() {
    const { selectedDish } = this.state;
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={dishes.filter((_dish) => _dish.id == selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
