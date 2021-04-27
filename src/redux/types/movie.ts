import { IMovie, IMovieDetail } from "../../interfaces/movie";


export type TMovieAction =
    | SaveMovieList
    | SaveHasMore
    | SaveMovieDetail
    ;

export const SAVE_MOVIE_LIST = 'SAVE_MOVIE_LIST';
export interface SaveMovieList {
    type: typeof SAVE_MOVIE_LIST;
    payload: IMovie[];
};

export const SAVE_HAS_MORE = 'SAVE_HAS_MORE';
export interface SaveHasMore {
    type: typeof SAVE_HAS_MORE;
    payload: boolean;
};

export const SAVE_MOVIE_DETAIL = 'SAVE_MOVIE_DETAIL';
export interface SaveMovieDetail {
    type: typeof SAVE_MOVIE_DETAIL;
    payload: IMovieDetail | null;
};

export interface IMovieState {
    movieList: IMovie[];
    movieDetail: IMovieDetail | null;
    hasMore: boolean;
}
