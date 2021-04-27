import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux";
import { fetchMovieList } from "../../redux/actions/movie";
import {
  ButtonSearch,
  DivListContainer,
  DivMovieListContainer,
  DivSearchContainer,
  InputSearch,
} from "./MovieList.style";
import MovieBox from "./components/MovieBox";
import { useHistory } from "react-router-dom";

const MovieList = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: StoreState) => state.common);
  const { movieList, hasMore } = useSelector(
    (state: StoreState) => state.movie
  );
  const history = useHistory();

  const [pageNumber, setPageNumber] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const observer = useRef<any>();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          dispatch(
            fetchMovieList({
              search: searchQuery,
              page: pageNumber + 1,
              newSearch: false,
              onSuccess: () => {
                setPageNumber((prev) => prev + 1);
                setErrorMsg("");
              },
              onError: () => setErrorMsg("Movie not found!"),
            })
          );
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  const handleSearch = () => {
    dispatch(
      fetchMovieList({
        search: searchQuery,
        page: 1,
        newSearch: true,
        onSuccess: () => {
          setPageNumber(1);
          setErrorMsg("");
        },
        onError: () => setErrorMsg("Movie not found!"),
      })
    );
  };

  const handleMovieClick = (imdbID: string) => {
      history.push(`/${imdbID}`)
  }

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <DivMovieListContainer>
      <DivSearchContainer>
        <InputSearch
          value={searchQuery}
          onChange={(event) => {
            setSearchQuery(event.target.value);
          }}
        />
        <ButtonSearch onClick={handleSearch}>Search</ButtonSearch>
      </DivSearchContainer>
      {!errorMsg ? (
        <>
          <DivListContainer>
            {movieList.map((movie) => {
              return <MovieBox onMovieClick={() => handleMovieClick(movie.imdbID)} key={movie.imdbID} movie={movie} />;
            })}
          </DivListContainer>
          <div ref={lastElementRef} />
        </>
      ) : errorMsg}
    </DivMovieListContainer>
  );
};

export default MovieList;
