import React from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import Movie from "./Movie";
import "./App.css";


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
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
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
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className='loader'>
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
