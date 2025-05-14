import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home.jsx'
import NowMovie from './Components/NowMovie.jsx';
import PopularMovie from './Components/PopularMovie.jsx'
import TopRatedMovie from './Components/TopRatedMovie.jsx';
import Moviedetail from './Components/Moviedetail.jsx';
import SearchMovie from './Components/SearchMovie.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Now' element={<NowMovie />} />
        <Route path='/popular' element={<PopularMovie />} />
        <Route path='/toprated' element={<TopRatedMovie />} />
        <Route path='/Movie/:id' element={<Moviedetail />} />
        <Route path='/Search' element={<SearchMovie />} />
      </Routes>
    </div>
  );
}

export default App;
