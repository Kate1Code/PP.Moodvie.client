import React from 'react';
import './MovieCard.scss';

function MovieCard({ movie, trailerUrl, posterUrl }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>Overview: {movie.overview}</p>
      {trailerUrl && (
        <iframe
          width="560"
          height="315"
          src={trailerUrl}
          frameBorder="0"
          allowFullScreen
          title="Movie Trailer"
        ></iframe>
      )}
      {posterUrl && (
        <img
          src={posterUrl}
          alt={`${movie.title} Poster`}
        />
      )}
    </div>
  );
}

export default MovieCard;
