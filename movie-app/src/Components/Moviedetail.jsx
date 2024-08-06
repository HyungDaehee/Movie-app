import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../redux/apikey.js';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Moviedetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const MovieDetail = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`);
      setMovie(res.data);

      const credits = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
      setCredits(credits.data.cast);

      const review = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`);
      setReviews(review.data.results);


      setLoading(false);
    }
    MovieDetail();
  }, [id]);


  if (loading) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Button onClick={goBack} className='back' variant="outline-danger"><IoMdArrowRoundBack className='' /></Button>
      <div className='detail'>
        <Card.Img className='detailcard' variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />

        <div className="detail-info">
          <h1 className='detialtitle'>{movie.title}</h1>
          <p className='detailrating'><MdOutlineStarPurple500 color='FFD400' /> {movie.vote_average.toFixed(1)}</p>
          <p className='detaildata'>개봉 : {movie.release_date}</p>
          <p className='detailgenre'>장르 : {movie.genres.map(genre => genre.name).join(',')}</p>
          <p className='detailage'>관람가 : {movie.adult ? '청불' : '전체'}</p>
          <p className='detailoverview'>{movie.overview}</p>
        </div>
        <div>
          <div>{movie.profile_path}</div>
        </div>
      </div>


      <div>
        <h3 className='crdtitle'>Credits</h3>
        <Row>
          {credits.slice(0, 7).map(actor => (
            <Col className='crd' key={actor.id}>
              <img className='crd-img' src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
              <p className='crd-name'>{actor.name}</p>
            </Col>
          ))
          }
        </Row>
      </div>
      <div className='reviews-box'>
        <h2 className='reviews-title'>Reviews</h2>
        <div className="reviews">
          {
            reviews.map((review) => (
              <div key={review.id}>
                <p className='reviews-name'> <FaUser />{review.author}</p>
                <p className='reviews-content'>{review.content}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Moviedetail;
