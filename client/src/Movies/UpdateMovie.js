import React, { useState } from 'react';
import axios from 'axios';
import Movie from './Movie';

const UpdateMovie = (props) => {

    const [movie, setMovie] = useState(props.movie);

    const handleChange = (event) => {
        setMovie({
            ...movie,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let stars
        if (movie.stars instanceof Array) {
            stars = movie.stars
        }
        else {
            stars = movie.stars.split(",")
        }
        const payload = {
            ...movie,
            stars: stars
        }
    };
    axios
        .put(`http://localhost:5000/api/movies/${movie.id}`, payload)
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

export default UpdateMovie;