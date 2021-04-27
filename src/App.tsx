import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import MovieList from "./containers/MovieList";
import MovieDetail from "./containers/MovieDetail";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MovieList} />
      <Route exact path="/:imdbID" component={MovieDetail} />
    </Switch>
  );
}

export default App;
