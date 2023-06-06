import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const btChangeMovie = document.querySelector("#change-movie");
btChangeMovie.addEventListener("click", getMovie);

function getMovie() {

  const id_movie = 888;
  const url = `${BASE_URL}${id_movie}?${API_KEY}&${language}`;

  axios
    .get(url)
    .then((response) => {
      const div_movie = document.querySelector("#movie");
      div_movie.innerHTML = `<img src="${IMG_URL}${response.data.poster_path}" />`
    })
    .catch((error) => {
      console.log(error)
    })
}
