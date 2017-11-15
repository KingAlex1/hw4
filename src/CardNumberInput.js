import React,{Component} from 'react';

class CardNumberInput extends Component {
  constructor(props){
    super(props)
      this.state={
        cardNumber: "value"
      }
  }

    handleChange = ()=>{
    const {id,onChange} = this.props;
    onChange(id); 
  }

  render() {    
    return (      
        <input 
        type="text"
        value={this.cardNumber}
        onChange ={this.handleChange}
        />
      
    )
  }
}

export default CardNumberInput;
