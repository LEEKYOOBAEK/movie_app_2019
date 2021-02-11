import React from "react";
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }
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
    this.setState(current => ({count:current.count-1}));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  render (){
    console.log("rendering");
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
