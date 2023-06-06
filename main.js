import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js"

const btFind = document.querySelector("#bt-find")
btFind.addEventListener("click", getMovie)

function getMovie() {
  const id_movie = Math.floor(Math.random() * 1000 + 1)
  const url = `${BASE_URL}${id_movie}?${API_KEY}&${language}`

  axios
    .get(url)
    .then((response) => {
      const poster = document.querySelector(".poster")
      const title = document.querySelector(".title")
      const description = document.querySelector(".description")
      poster.src = `${IMG_URL + response.data.poster_path}`
      title.innerHTML = response.data.title
      description.innerHTML = response.data.overview
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
