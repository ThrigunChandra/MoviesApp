// const API_KEY = EnterYourAPIKEY;
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movies/popular?api_keys=${API_KEY}`)
}