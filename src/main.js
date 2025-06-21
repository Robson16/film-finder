import './style.css'
import {
  getRandomMovie,
  clearCurrentMovie,
  populateGenreDropdown,
  getSelectedGenre,
  displayMovie
} from './helpers'

document.querySelector('#app').innerHTML = `
  <header>
  <h1 id="appTitle">
    <img src="./popcorn.png" alt="Popcorn">
      Film Finder
      <img src="./popcorn.png" alt="Popcorn">
    </h1>
  </header>
  <form id="genreForm">
    <label>Choose a genre:</label>
    <select name="genres" id="genres"></select>
  </form>
  <button id="playBtn">Let's Play!</button>
  <div id="movieInfo">
    <div id="moviePoster"></div>
    <div id="movieText"></div>
  </div>
  <div id="likeOrDislikeBtns" hidden>
    <button id="likeBtn"><i class="fa-solid fa-thumbs-up"></i></button>
    <button id="dislikeBtn"><i class="fa-solid fa-thumbs-down"></i></button>
  </div>
`

const tmdbKey = import.meta.env.VITE_TMDB_API_KEY;;
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + genreRequestEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch);

    if (response.ok) {
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "/discover/movie";
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = tmdbBaseUrl + discoverMovieEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch);

    if (response.ok) {
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      return movies;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = tmdbBaseUrl + movieEndpoint + requestParams;

  try {
    const response = await fetch(urlToFetch);

    if (response.ok) {
      const movieInfo = await response.json();
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
export const showRandomMovie = async () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }

  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);

  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;

