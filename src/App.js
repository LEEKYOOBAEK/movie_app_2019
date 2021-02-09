import React from "react";
import ReactDOM from 'react-dom';


class App extends React.Component {
  state = {
    //the data will be changed
    count: 0 
    //count default zero\
  };
  add = () => {
    console.log("add");
    this.setState(current => ({count:current.count+1}));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count:this.state.count-1}));
  };

  render (){
    return (
      <div>
        <h1> The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}
export default App;
