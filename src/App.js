import React, { Suspense, lazy } from "react";
import Header from "./Components/Header/Header";
import { Switch, Redirect, Route } from "react-router-dom";
// import HomePage from "./Containers/HomePage/HomePage";
// import MoviesPage from "./Containers/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./Components/MovieDetailsPage/MovieDetailsPage";
import "./App.css";

const HomePage = lazy(() => import("./Containers/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./Containers/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./Components/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>Loading</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:id" component={MovieDetailsPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
