import React, { Component } from 'react';
import axios from 'axios';

class Input extends Component {
  state = {
    action: '',
  };

  addMovie = () => {
    const movie = { title: this.state.title, watcherId: this.state.watcherId };

    if (movie.title && movie.title.length > 0 && movie.watcherId) {
      axios
        .post('/api/movies', movie)
        .then((res) => {
          if (res.data) {
            this.props.getMovies();
            this.setState({ title: '', watcherId: 0 });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('input field required');
    }
  };

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleChangeWatcherId = (e) => {
    this.setState({
      watcherId: +e.target.value,
    });
  };

  render() {
    let { title, watcherId } = this.state;
    return (
      <div>
        <input type="text" onChange={this.handleChangeTitle} value={title} />
        <input type="number" onChange={this.handleChangeWatcherId} value={watcherId} />
        <button onClick={this.addMovie}>add movie</button>
      </div>
    );
  }
}

export default Input;