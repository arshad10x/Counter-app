import React from 'react';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = 
    {
      count: 0,

    };
  }
  incrementCount=()=> {
    this.setState({
      count: this.state.count +1
    });

  }
  decrementCount=()=> {
    if(this.state.count>0){
    this.setState({
      count: this.state.count -1
    });
  }}
  
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
