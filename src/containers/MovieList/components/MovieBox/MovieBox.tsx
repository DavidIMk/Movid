import React from "react";
import { IMovie } from '../../../../interfaces/movie';
import { DivBoxContainer, DivImage, DivTitle } from "./MovieBox.style";

interface IMovieBoxProps {
  movie: IMovie;
  onMovieClick: () => void
}

const MovieBox = ({ movie, onMovieClick }: IMovieBoxProps) => {
  return (
      <DivBoxContainer onClick={onMovieClick}>
          <DivImage src={movie.Poster} />
          <DivTitle>
              {movie.Title}
          </DivTitle>
      </DivBoxContainer>
  );
};

export default MovieBox;
