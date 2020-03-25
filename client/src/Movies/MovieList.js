import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {//same as props.movies, destructured from MovieList component in app.js
  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))
      }
    </div>
  );
}

export default MovieList;
