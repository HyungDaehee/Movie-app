import axios from 'axios';
import { apiKey } from './apikey.js'

export const Now = (movies) => ({
  type: 'NOW_MOVIE',
  payload: movies,
});

export const Top = (movies) => ({
  type: 'TOP_MOVIE',
  payload: movies,
});

export const Pop = (movies) => ({
  type: 'POP_MOVIE',
  payload: movies,
});

export const getMovies = (page = 1) => {
  return async (dispatch) => {
    try {
      const now = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-US&page=${page}`);
      dispatch(Now(now.data.results));

      const top = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko-US&page=${page}`);
      dispatch(Top(top.data.results));

      const pop = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-US&page=${page}`);
      dispatch(Pop(pop.data.results));
    } catch (error) {
      console.error('영화 목록을 가져오는 동안 오류 발생:', error);
    }
  };
};
