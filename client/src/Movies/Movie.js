import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from './MovieCard';


function Movie(props) {
  
  const [movie, setMovie] = useState(null);
  const {id} = useParams();//useParams() allows for use of a dynamic id when querying the server.

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => setMovie(res.data))
      .catch(err => console.log(err.response));
  };

  const saveMovie = () => {//invokes addToSavedList() which is passed via props from App.js, then passes it movie array at line 9.
    props.addToSavedList(movie);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    props.history.push(`/update-movie/${movie.id}`)
  };

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        props.setMovie(res.data);
        props.history.push('/');
      })
  };

  useEffect(() => {
    fetchMovie(id);
  }, [id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />

      <div className='save-button' onClick={saveMovie}>
        Save
      </div>
      
      <div className='update-movie-button' onClick={handleUpdate}>
        Edit Movies
      </div>

      <div className='delete-button' onClick={handleDelete}>
        Remove movie from list
      </div>
    </div>
  );
};

export default Movie;
