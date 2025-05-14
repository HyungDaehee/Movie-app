import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../redux/apikey.js';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import HomeNavbar from './HomeNavbar.jsx';

const SearchMovie = () => {
  const [searchMovies, setSearchMovies] = useState(null);
  const [keyword, setKeyword] = useState('');

  const getSearch = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=ko-KR&page=1&include_adult=false&query=${keyword}`
      );
      console.log(res.data.results);
      setSearchMovies(res.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const searchKeyword = (e) => {
    if (e.key === 'Enter') {
      setKeyword(e.target.value);
    }
  };

  useEffect(() => {
    if (keyword.trim() !== '') {
      getSearch();
    }
  }, [keyword]);

  return (
    <>
    <HomeNavbar/>
    <div className='search-container'>
      <h1 className='title2'> Search Movie</h1>
      <div className="search-bg">
      <IoSearch  className='search-icon'/>
        <input className='input'
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="영화를 검색하세요"
        />
      </div>
      <h2 className='search-res'>result</h2>
      {searchMovies && (
        <div className='search-card'>
          <Row>
            {
              searchMovies.map((result) => (
                <Col key={result.id}>
                  <Card style={{ width: '15rem' }} >
                    <Link to={`/Movie/${result.id}`}>
                      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.title} />
                    </Link>
                    <Card.Body className='movie-info'>
                      <Card.Title className='search-title'>{result.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </div>
      )}
    </div>
    </>
  );
};

export default SearchMovie;
