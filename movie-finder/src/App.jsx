import { useState } from 'react'
import './App.css'
import responseMovie from './mocks/found.json'
import noResponseMovie from './mocks/not-found.json'

function App() {
  const movies = responseMovie.Search;
  const hasMovies = movies?.length > 0
  return (
    <div className='page'>
    <header>
      <h1>Movie Finder</h1>
      <div>
        <form className='form' action="">
          <input placeholder='Star Wars, Lord of Rings, Cars ... '></input>
          <button type='submit'>Search</button>
        </form>
      </div>
    </header>
    <main>
      {hasMovies && 
        <ul>
          {
          movies.map(movie =>(
            <li key={movie.imdbID}>
              <h2>
                {movie.Title}
              </h2>
              <p>{movie.year}</p>
              <img src={movie.Poster} alt={movie.Title}></img>
            </li>
          ))}
        </ul>
      }
    </main>
 
    </div>
  )
}

export default App
