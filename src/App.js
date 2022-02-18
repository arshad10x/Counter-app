import React from 'react';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      count: 0,

    };
    this.incrementCount=this.incrementCount.bind(this);
    this.decrementCount=this.decrementCount.bind(this);
  }
  incrementCount=()=> {
    this.setState({
      count: this.state.count +1
    });

  }
  decrementCount=()=> {
    this.setState({
      count: this.state.count -1
    });
  }
  resetValue = () => {
    this.setState({
      count:this.state.count=0
    });
    };
  render(){
    return(
      <>
      <h1>Counter</h1>
      <div className="main">
       
      <h2>{this.state.count}</h2><br></br>
      <button onClick={()=>{
        this.incrementCount(1)}
        }>+</button>
        
      <button onClick={()=>{
        this.decrementCount(1)
      }}>-</button>

      <button onClick={()=>{
        this.resetValue(0)
      }}>Reset</button>
      </div>
      </>
    );
  }
}
export default App;