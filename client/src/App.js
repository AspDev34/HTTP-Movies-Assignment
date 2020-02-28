import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from 'axios';
import UpdateMovieForm from './Movies/UpdateMovieForm';

const App = () => {
  const [savedList, setSavedList] = useState([]); //this is passed via props to SavedList.js
  const [movieList, setMovieList] = useState([]);//this is passed via props to MovieList.js

  const getMovieList = () => {//grabs all data from movies array on server, passes it to setMovieList() for manipulation.
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response));
  };

  const addToSavedList = movie => {//spreads in existing savedList movie data, then adds additional movie passed in. 
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (

    <>
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList movies={movieList} />
      </Route>

      <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} setMovie={setMovieList}/>}/>

      <Route path='/update-movie/:id' 
      render={props => <UpdateMovieForm {...props} movieList={movieList} setMovieList={setMovieList}/>}/>
    </>  
  );
};

export default App;
