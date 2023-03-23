import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';
import ListMovie from './ListMovie';

class Movie extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    console.log('get movies')
    axios
      .get('/api/movies')
      .then((res) => {
        if (res.data) {
          this.setState({
            movies: res.data,
          });
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  deleteMovie = (id) => {
    axios
      .delete(`/api/movies/${id}`)
      .then((res) => {
        if (res.data) {
          this.getMovies();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { movies } = this.state;

    return (
      <div>
        <h1>My Movie(s)</h1>
        <Input getMovies={this.getMovies} />
        <ListMovie movies={movies} deleteMovie={this.deleteMovie} />
      </div>
    );
  }
}

export default Movie;