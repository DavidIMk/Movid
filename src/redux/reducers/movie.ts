import { IMovieState, SAVE_HAS_MORE, SAVE_MOVIE_DETAIL, SAVE_MOVIE_LIST, TMovieAction } from "../types/movie";


const defaultState: IMovieState = {
    movieList: [],
    hasMore: false,
    movieDetail: null,
};

const movieReducer = (
    state = defaultState,
    action: TMovieAction,
): IMovieState => {
    switch (action.type) {
        case SAVE_MOVIE_LIST: {
            return { ...state, movieList: action.payload };
        }
        case SAVE_HAS_MORE: {
            return { ...state, hasMore: action.payload };
        }
        case SAVE_MOVIE_DETAIL: {
            return { ...state, movieDetail: action.payload };
        }
        default: {
            return state;
        }
    }
};

export default movieReducer;
