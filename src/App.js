import './styles/App.scss'

import Home from "./components/Home";

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/Header';
import TvShows from './components/TvShows';
import TopRated from './components/TopRated';
import Popular from './components/Popular';
function App() {
  return (
  <Router>
    <Header />
    <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/Movies' element={<Home/>}/>
     <Route path='/Tvshows' element={<TvShows />}/>
     <Route path='/Top-Rated' element={<TopRated />}/>
     <Route path='/Popular' element={<Popular />}/>
    </Routes>
  </Router>
  );
}

export default App;
