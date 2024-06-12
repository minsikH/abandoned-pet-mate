let initialState = {
    petList: [],
    /*   topRatedMovies: [],
  upcomingMovies: [], */
    loading: false /* true */,
    /*   genreList: [],
  movieDetail: {}, */
/*     uniqueAllPetsList: [], */
uniqueAllPetsList: [],
allPetsList: [],
};

function petReducers(state = initialState, action) {
    let { type, payload } = action;

    switch (type) {
        case "GET_MOVIES_REQUEST":
        case "GET_ALL_SHELTERS_REQUEST":
            return { ...state, loading: true };
        case "GET_MOVIE_SUCCESS":
            return {
                ...state,
                petList: payload.petList,

/* petList: payload.petList ? [...state.petList, ...payload.petList] : state.petList, */

                /*         popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upcomingMovies: payload.upcomingMovies,
        genreList: payload.genreList, */
                loading: false,
            };
        case "GET_MOVIE_DETAIL_SUCCESS":
            return {
                ...state,
                /*         movieDetail: payload.movieDetail, */

                loading: false /* true */,
            };
        case "GET_ALL_SHELTERS_SUCCESS":
            return {
                ...state,
/*                 uniqueAllPetsList: [...state.uniqueAllPetsList, ...payload.uniqueAllPetsList], // 이전 목록과 새로운 목록 합치기
                allPetsList: [...state.allPetsList, ...payload.allPetsList], // 이전 목록과 새로운 목록 합치기 */
                                uniqueAllPetsList: payload.uniqueAllPetsList,
                allPetsList: payload.allPetsList,
                loading: false,
            };
        case "GET_MOVIES_FAILURE":
        case "GET_ALL_SHELTERS_FAILURE":
            return { ...state, loading: false };

        default:
            return { ...state };
            
    }
}

export default petReducers;
