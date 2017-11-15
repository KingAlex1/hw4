import React, {Component} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  constructor(props){
    super(props);
      this.state ={};
            
    }
  

  handleClick = id=> {
    this.setState({})


  }


  render() {
    return (
      <nav>
        <ul>
          <li key={0.1} className ="component-list__name" data-id = {0} onClick={this.handleClick}>Card number formating
          </li>
          <li key={0.2}  className ="component-list__name" data-id = {1}  onClick={this.handleClick}>t</li>      
        </ul>
        <hr />
        {React.Children.map(this.props.children, el => (
          <p>{el}</p>
        ))}

      </nav>
    )
    
  };
};

export default Switcher;
