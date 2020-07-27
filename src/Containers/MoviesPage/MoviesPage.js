import React, { useState, useEffect, Suspense, lazy } from "react";
import { useHistory } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { requestApi } from "../../helpers/request";
// import SearchRequest from "../../Components/SearchRequest/SearchRequest";
import queryString from "query-string";
import styles from "./MoviesPage.module.css";

const SearchRequest = lazy(() =>
  import("../../Components/SearchRequest/SearchRequest")
);

const MoviesPage = ({ location }) => {
  const [input, setInput] = useState("");
  const [findMovies, setFindMovies] = useState([]);

  const queryParams = queryString.parse(location.search);
  const history = useHistory();

  useEffect(() => {
    queryParams.query && requestHandle(queryParams.query);
  }, [queryParams.query]);

  const handleInput = ({ target }) => {
    setInput(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      requestHandle(input);
      setInput("");
      history.push(`/movies?query=${input}`);
    }
  };

  const requestHandle = (input) => {
    requestApi("/search/movie", input).then((res) =>
      setFindMovies(res.data.results)
    );
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="input" onChange={handleInput} value={input}></input>
        <button type="submit">Search</button>
      </form>
      <ul>
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            <Route
              search="/movies?query=input"
              render={(props) => (
                <SearchRequest {...props} findMovies={findMovies} />
              )}
            />
          </Switch>
        </Suspense>
      </ul>
    </div>
  );
};

export default MoviesPage;
