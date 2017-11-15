import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput'

class CardNumberHolder extends Component {
  handleChange =event =>{
    const value = event.target.value;
    this.setState({cardNumber:value})
  }

  render() {
    return (
      <div
        className="componet-wrapper"
      >
        <CardNumberInput/>
      </div>
    )
  }
}

export default CardNumberHolder;
