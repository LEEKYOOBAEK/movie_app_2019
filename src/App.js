import React from "react";
import ReactDOM from 'react-dom';
import axios from "axios";


class App extends React.Component 
{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => { 
    const {data: { data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //ES6의 혁신 const {movies} -> {data: {data: {movies}}}
    console.log(movies);
  }
  componentDidMount() 
  {
    this.getMovies();
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
