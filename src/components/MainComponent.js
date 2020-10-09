import React, {Component} from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetail';
import dishes from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
        <Header />
        <Menu dishes={dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={dishes.filter((_dish) => _dish.id === selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
