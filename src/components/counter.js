import React from 'react';

class Counter extends React.Component {
    state = {
      count: 0
    };
    
    handleClick = () => {
      this.setState((prevState, { count }) => ({
        count: prevState.count + 1
      }));
    };
  
    reset() {
      alert("Do you want to reset your guest count");
      this.setState({
        count: 0
  
      });
    };
  
    render() {
      return(
        <div>
          <button className = "count" onClick={this.handleClick}>{this.state.count}<p className = "click">Click Here</p></button>
          <div>
          <button className="reset" onClick={(e) => this.reset(e)}>Reset</button>
          </div>
        </div>
      ) 
    }
  }
  
  export default Counter;