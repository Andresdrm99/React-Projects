import { useState } from 'react'
import MoviesFound from '../mocks/found.json'
import noMovies from '../mocks/not-found.json'

export function useMovies(search) {
  const [responseMovies, setResponseMovies] = useState([])

  const movies = responseMovies.Search || []

  const mappedMovies = movies?.map( movie =>({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

   async function getMovies() {
    
  }

  return {movies:mappedMovies, getMovies}
}

