const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Initial rendering of movies
getMovies(API_URL);

async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.results);
}

function showMovies(movies) {
  // clear main
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
          <img
            src="${IMG_PATH + poster_path}"
            alt="${movie.title}"
          />
          <div class="movie-info">
            <h4>${title}</h4>
            <span class=${getClassByRate(vote_average)}>${vote_average.toFixed(
      1
    )}</span>
          </div>
          <div class="overview">
          <h4>Overview:</h4>
          ${overview}
          </div>
      `;

    main.appendChild(movieEl);
  });
}

const getClassByRate = function (vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  }
});
