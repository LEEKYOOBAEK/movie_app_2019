import React from "react";
import ReactDOM from 'react-dom';


class App extends React.Component 
{
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount() {
    //이론적으로 데이터를 패치하는 것
    setTimeout(() => {
      this.setState({ isLoading: false, book: true });
    }, 6000);
  }
  render ()
  {
    const { isLoading } = this.state;
    return (
      <div>
        {isLoading ? "Loading" : "We are ready"}
      </div>
    )
  }
}
export default App;
