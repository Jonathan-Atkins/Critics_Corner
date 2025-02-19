import './App.css';
import MoviesContainer from '../MoviesContainer/MoviesContainer';
import Home from '../Home/Home';
import MovieDetails from '../MovieDetails/MovieDetails';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <main className='App'>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/:id' element={<MoviesContainer/>}/>
      </Routes>
    </main>
  );
}
export default App;