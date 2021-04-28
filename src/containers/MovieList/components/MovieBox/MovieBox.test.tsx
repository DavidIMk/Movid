import React from "react";
import { render, cleanup } from "@testing-library/react";
import MovieBox from "./";

afterEach(cleanup);

it("should render title correctly", () => {
  const { getByTestId } = render(
    <MovieBox
      movie={{
        Title: "Batman",
        Year: "1995",
        imdbID: "1",
        Type: "Type",
        Poster: "https://via.placeholder.com/150",
      }}
      onMovieClick={() => {}}
    />
  );
  expect(getByTestId("container")).toHaveTextContent("Batman");
});
