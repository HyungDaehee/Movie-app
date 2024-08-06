//  각각의 액션에 대해 어떻게 상태를 업데이트할지 정의하는 부분
const initialState = {
    nowMovie: [],
    topMovie: [],
    popMovie: [],
    loading: true,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'NOW_MOVIE':
        return {
          ...state,
          nowMovie: action.payload,
          loading: false,
        };
      case 'TOP_MOVIE':
        return {
          ...state,
          topMovie: action.payload,
          loading: false,
        };
      case 'POP_MOVIE':
        return {
          ...state,
          popMovie: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  