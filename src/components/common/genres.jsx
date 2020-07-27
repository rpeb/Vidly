import React, { Component } from "react";
import propTypes from "prop-types";

const Genres = props => {
  return (
    <ul className="list-group">
      <li className="list-group-item active" style={styles}>
        All Genres
      </li>
      {genres.map(genre => (
        <li
          onClick={() => props.onGenreSelect(genre)}
          style={styles}
          key={genre.name}
          className="list-group-item"
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default Genres;
