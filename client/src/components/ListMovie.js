import React from 'react';

const ListMovie = ({ movies, deleteMovie }) => {
  return (
    <ul>
      {movies && movies.length > 0 ? (
        movies.map((movie) => {
          return (
            <li key={movie.id} onClick={() => deleteMovie(movie.id)}>
              {movie.title}
            </li>
          );
        })
      ) : (
        <li>No todo(s) left</li>
      )}
    </ul>
  );
};

export default ListMovie;