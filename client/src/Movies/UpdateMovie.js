import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
};