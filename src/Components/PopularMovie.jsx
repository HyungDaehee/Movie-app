import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../redux/apikey.js';
import { Card, Col, Row, Button } from 'react-bootstrap';
import HomeNavbar from './HomeNavbar.jsx';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ImSpinner9 } from "react-icons/im";

const PopularMovie = () => {
    const [popMovie, setPopMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const getPopular = async () => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-US&page=${page}`);
            console.log(res.data.results);
            setPopMovie((prevMovies) => (page === 1 ? res.data.results : [...prevMovies, ...res.data.results]));
            setLoading(false);
        } catch (error) {
            console.error('인기 있는 영화를 가져오는 동안 오류 발생:', error);
        }
    };

    const slicedMovies = popMovie.slice(0, Math.floor(popMovie.length / 7) * 7);

    useEffect(() => {
        getPopular();
    }, [page]);

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <HomeNavbar />
            {loading ? (
                <div className='loding'><ImSpinner9 /></div>
            ) : (
                <>
                    <Row className='cardcontainer'>
                        {
                             slicedMovies.map((result) => (
                                <Col key={result.id}>
                                    <Card style={{ width: '15rem' }} className='card'>
                                        <Link to={`/Movie/${result.id}`} className='link'>
                                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} alt={result.title} />
                                        </Link>
                                        <Card.Body className='movie-info'>
                                            <Card.Title className='infotitle'>{result.title}</Card.Title>
                                            <Card.Text className='infoavg'>
                                                <MdOutlineStarPurple500 color='FFD400' />{result.vote_average.toFixed(1)}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                    <div className='pagination'>
                        <Button className='button' onClick={handleNextPage} variant="outline-danger"> More </Button>
                        <div className="up">
                            <Button className='' onClick={handleScrollToTop} variant="outline-primary"><FaArrowUp /></Button>
                        </div>
                    </div>



                </>
            )}
        </>
    );
}

export default PopularMovie