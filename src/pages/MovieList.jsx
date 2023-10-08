import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
import MovieButtons from '../components/MovieButtons/MovieButtons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const YOUTUBE_API_KEY = 'AIzaSyDTCitv--BQVm_cUr6kCNTFs5CR2B9cJMc';
const TMDB_API_KEY = '2eaab7db3b1aff5624e05ed8efc81367';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/discover/movie?api_key=' + TMDB_API_KEY
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchMovies();
  }, []);

  async function fetchYouTubeTrailer(movieName) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${encodeURIComponent(
          `${movieName} official trailer`
        )}&key=${YOUTUBE_API_KEY}`
      );
      const data = await response.json();
  
      if (data.items.length > 0) {
        const videoId = data.items[0].id.videoId;
        const trailerUrl = `https://www.youtube.com/embed/${videoId}`;
        return trailerUrl;
      } else {
        return null; // No trailer found
      }
    } catch (error) {
      console.error('Error fetching YouTube trailer: ', error);
      return null;
    }
  }

  const handleAction = async (action) => {
    try {
      // Save data on the backend if action is 'yes' or 'maybe'
      if (action === 'yes' || action === 'maybe') {
        const movie = movies[currentIndex];
        const trailerUrl = await fetchYouTubeTrailer(movie.title);
        const posterUrl = fetchMoviePoster(movie);
  
        // Show a toast message
        toast.success('Movie added to your MoviePool list', {
          position: toast.POSITION.TOP_CENTER,
        });
  
        // Now you can use 'trailerUrl' and 'posterUrl' to display the trailer and poster.
        // Implement your logic to display them in the MovieCard component.
        console.log('Trailer URL:', trailerUrl);
        console.log('Poster URL:', posterUrl);
      }
  
      // Move to the next movie
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } catch (error) {
      console.error('Failed to post action', error);
    }
  };

  // Function to fetch the movie poster URL
  const fetchMoviePoster = (movie) => {
    // Extract the poster_path from the movie object and construct the poster URL.
    const posterPath = movie.poster_path;
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    }
    return null; // No poster image found
  };

  // Derive the posterUrl for the current movie
  const currentMovie = movies[currentIndex];
  const posterUrl = currentMovie ? fetchMoviePoster(currentMovie) : null;

  return (
    <div>
      <ToastContainer />
      {currentIndex < movies.length ? (
        <>
          <MovieCard movie={movies[currentIndex]} posterUrl={posterUrl} />
          <MovieButtons onAction={handleAction} />
        </>
      ) : (
        <div>No more movies to show</div>
      )}
    </div>
  );
}

export default MovieList;
