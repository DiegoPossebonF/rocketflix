import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js"

const btFind = document.querySelector("#bt-find")
btFind.addEventListener("click", getMovie)

function getMovie() {
  const id_movie = Math.floor(Math.random() * 1000 + 1)
  const url = `${BASE_URL}${id_movie}?${API_KEY}&${language}`
  const poster = document.querySelector(".poster")
  const title = document.querySelector(".title")
  const description = document.querySelector(".description")
  axios
    .get(url)
    .then((response) => {
      poster.src = `${IMG_URL + response.data.poster_path}`
      title.innerHTML = response.data.title
      description.innerHTML = response.data.overview
      console.log(response.data)
    })
    .catch((error) => {
      console.log("ERROR!!")
      console.log(error)
      poster.src = "assets/poster-error.jpg"
      title.innerHTML = "Ops, hoje não é dia de assistir filme. Bora codar! 🚀"
      description.innerHTML = ""
    })
}
