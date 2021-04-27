import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../redux";
import {
  DivDesc,
  DivHeader,
  DivLabel,
  DivMovieDetailContainer,
  DivRating,
  DivTitle,
  ImgPoster,
  DivDescLine,
  DivBackHome,
} from "./MovieDetail.style";
import { IMovieParam } from "../../interfaces/common";
import { useHistory, useParams } from "react-router-dom";
import { fetchMovieByID } from "../../redux/actions/movie";
import Modal from "./components/Modal";

const MovieDetail = () => {
  const { imdbID } = useParams<IMovieParam>();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading } = useSelector((state: StoreState) => state.common);
  const { movieDetail } = useSelector((state: StoreState) => state.movie);

  const [isModalShowing, setIsModalShowing] = useState<boolean>(false);

  useEffect(() => {
    dispatch(
      fetchMovieByID({
        imdbID: imdbID,
      })
    );
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (movieDetail) {
    return (
      <DivMovieDetailContainer>
        <DivHeader>
          <DivTitle>{movieDetail.Title}</DivTitle>
          <DivRating>
            Rated <span className="rate">{movieDetail.imdbRating}</span>/10{" "}
            <br />
            By {movieDetail.imbdVotes} Viewers
          </DivRating>
        </DivHeader>

        <ImgPoster onClick={() => setIsModalShowing(true)} src={movieDetail.Poster} />
        <DivDescLine>
          <DivLabel>Plot:</DivLabel>
          <DivDesc>{movieDetail.Plot}</DivDesc>
        </DivDescLine>
        <DivDescLine>
          <DivLabel>Actors:</DivLabel>
          <DivDesc>{movieDetail.Actors}</DivDesc>
        </DivDescLine>
        <DivDescLine>
          <DivLabel>Genre:</DivLabel>
          <DivDesc>{movieDetail.Genre}</DivDesc>
        </DivDescLine>
        <DivDescLine>
          <DivLabel>Writer:</DivLabel>
          <DivDesc>{movieDetail.Writer}</DivDesc>
        </DivDescLine>
        <DivDescLine>
          <DivLabel>Released:</DivLabel>
          <DivDesc>{movieDetail.Released}</DivDesc>
        </DivDescLine>
        <DivDescLine>
          <DivLabel>Runtime:</DivLabel>
          <DivDesc>{movieDetail.Runtime}</DivDesc>
        </DivDescLine>
        <DivBackHome
          onClick={() => {
            history.push("/");
          }}
        >
          Back To Home
        </DivBackHome>
        <Modal
          image={movieDetail.Poster}
          onClose={() => setIsModalShowing(false)}
          isShowing={isModalShowing}
        />
      </DivMovieDetailContainer>
    );
  }
  return null;
};

export default MovieDetail;
