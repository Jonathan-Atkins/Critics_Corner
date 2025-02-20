import './App.css';
import Home from '../Home/Home';
import MovieDetails from '../MovieDetails/MovieDetails';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <main className='App'>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = 'movies/:id' element={<MovieDetails/>}/>
      </Routes>
    </main>
  );
}
export default App;