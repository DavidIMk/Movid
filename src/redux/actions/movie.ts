import axios from "axios";
import { StoreState } from "..";
import { API_KEY, BASE_API_URL, DEFAULT_SEARCH } from "../../constants";
import { IMovie, IMovieDetail, IMovieListResp } from "../../interfaces/movie";
import { SAVE_HAS_MORE, SAVE_MOVIE_DETAIL, SAVE_MOVIE_LIST, TMovieAction } from "../types/movie";
import { setIsLoading } from "./common";
import { Dispatch } from 'redux';
import { batch } from "react-redux";

export const saveMovieList = (movies: IMovie[]): TMovieAction => ({
  type: SAVE_MOVIE_LIST,
  payload: movies,
});

export const saveHasMore = (hasMore: boolean): TMovieAction => ({
  type: SAVE_HAS_MORE,
  payload: hasMore,
});

export const saveMovieDetail = (movie: IMovieDetail | null): TMovieAction => ({
  type: SAVE_MOVIE_DETAIL,
  payload: movie,
});

export const fetchMovieList = (
  {
    search,
    page,
    newSearch,
    onError,
    onSuccess,
  }: {
    search: string,
    page: number,
    newSearch?: boolean,
    onError?: () => void,
    onSuccess?: () => void,
  }
) => async (
  dispatch: Dispatch,
  getState: () => StoreState,
  ) => {
    if (newSearch) {
      dispatch(setIsLoading(true));
    }
    const searchParam = search || DEFAULT_SEARCH;
    const pageParam = page;
    try {
      const resp = await axios.get<IMovieListResp>(BASE_API_URL, {
        params: {
          apikey: API_KEY,
          s: searchParam,
          page: pageParam,
        }
      });
      if (resp.status < 400 && resp.data.Response === 'True') {
        const { data } = resp;
        const payload = !newSearch ? [...getState().movie.movieList, ...data.Search] : data.Search
        const hasMore = Number(data.totalResults) > payload.length;
        batch(() => {
          dispatch(saveMovieList(payload));
          dispatch(saveHasMore(hasMore))
        })

        onSuccess?.();
      } else {
        dispatch(saveMovieList([]));
        onError?.();
      }
    } catch (error) {
      dispatch(saveMovieList([]));
      onError?.();
      console.error(error);
    } finally {
      if (newSearch) {
        dispatch(setIsLoading(false));
      }
    }
  };

export const fetchMovieByID = (
  {
    imdbID,
    onError,
    onSuccess,
  }: {
    imdbID: string,
    onError?: () => void,
    onSuccess?: () => void,
  }
) => async (
  dispatch: Dispatch,
  getState: () => StoreState,
  ) => {
    dispatch(setIsLoading(true));
    try {
      const resp = await axios.get<IMovieDetail>(BASE_API_URL, {
        params: {
          apikey: API_KEY,
          i: imdbID,
        }
      });
      if (resp.status < 400 && resp.data.Response === 'True') {
        const { data } = resp;
        batch(() => {
          dispatch(saveMovieDetail(data));
        })
        onSuccess?.();
      } else {
        dispatch(saveMovieDetail(null));
        onError?.();
      }
    } catch (error) {
      dispatch(saveMovieDetail(null));
      onError?.();
      console.error(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };