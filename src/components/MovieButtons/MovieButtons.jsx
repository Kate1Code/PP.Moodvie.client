import React from 'react';
import './MovieButtons.scss';

function MovieButtons({ onAction }) {
  const handleActionClick = (action) => {
    onAction(action);
  };

  return (
    <div className="movie-buttons">
      <button onClick={() => handleActionClick('yes')}>Yes</button>
      <button onClick={() => handleActionClick('maybe')}>Maybe</button>
      <button onClick={() => handleActionClick('no')}>No</button>
    </div>
  );
}

export default MovieButtons;