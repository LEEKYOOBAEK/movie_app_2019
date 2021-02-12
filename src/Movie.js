import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function Movie({id, year, title, summary, poster}) {
    return <h1>{title}</h1>
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    years:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;