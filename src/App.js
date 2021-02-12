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
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //ES6의 혁신 const {movies} -> {data: {data: {movies}}}
    this.setState({ movies, isLoading: false });
    //this.setState({ movies: movies })
    //앞 movies는 state로부터 뒤 movies 는 axios로부터 설정
    
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
