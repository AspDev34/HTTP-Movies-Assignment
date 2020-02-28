import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const initialState = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: []
};

const UpdateMovieForm = (props) => {

    const [movie, setMovie] = useState(initialState);
    const {id} = useParams();

    // useEffect(() => {
    //     dataUpdate = props.
    // });
   
    axios
        .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
        .then(res => props.history.push('/'))
        .catch(err => console.log('Data not received', err))

    return (

        <form onSubmit={handleSubmit}>

            <label>Title:
                <input 
                value={movie.title}
                onChange={handleChange}
                type="text"
                name="title"
                />
            </label>

            <label>Director:
                <input 
                value={movie.director}
                onChange={handleChange}
                type="text"
                name="director"
                />
            </label>

            <label>Meta:
                <input 
                value={movie.metascore}
                onChange={handleChange}
                type="text"
                name="metascore"
                />
            </label>

            <label>Actors:
                input 
                value={movie.stars}
                onChange={handleChange}
                type="text"
                name="stars"
                />
            </label>

            <button type="submit">Update Movie</button>

        </form>
    );

};

export default UpdateMovieForm;