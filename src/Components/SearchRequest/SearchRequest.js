import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SearchRequest.module.css";

const SearchRequest = ({ findMovies }) => {
  const history = useHistory();
  const location = useLocation();

  const toUserPage = (id) => {
    history.push({
      pathname: `/movies/${id}`,
      state: { from: location.pathname, search: location.search },
    });
  };

  return (
    <>
      {findMovies.map((movie) => (
        <li
          className={styles.item}
          key={movie.id}
          onClick={() => toUserPage(movie.id)}
        >
          {movie.title}
        </li>
      ))}
    </>
  );
};

SearchRequest.protoTypes = {
  findMovies: PropTypes.array.isRequired,
};

export default SearchRequest;
