import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../redux/apikey.js';

const Banner = () => {
  const [popularMovie, setPopularMovie] = useState(null);

  useEffect(() => {
    const fetchPopularMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );

        const results = res.data.results[0]; 
        setPopularMovie(results);
      } catch (error) {
        console.error('Error fetching popular movie:', error);
      }
    };

    fetchPopularMovie();
  }, []);

  const backgroundImageUrl = popularMovie
    ? `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${popularMovie.backdrop_path}`
    : '';

  return (
    <div className='banner' style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      {popularMovie && (
        <div className='banner-content'>
          <h1>{popularMovie.title}</h1>
          <p style={{whiteSpace:'pre-line'}}>{popularMovie.overview}</p>
        </div>
      )}
    </div>
  );
};

export default Banner;
