import { Movies } from './components/movies'
import { useState, useEffect, useRef } from 'react'
import { useMovies } from './hooks/useMovies'
import './App.css'

export function useSearch(){
  const [search, setSearch] = useState('')
  const [inputError, setInputError] = useState(null)
  const isFirstInput = useRef(true)
  
  useEffect(() => {
    if(isFirstInput.current){
      isFirstInput.current = search ===''
      return 
    }
    if (search === '') {
      setInputError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setInputError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setInputError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setInputError(null)
  }, [search])

  return [ search, setSearch, inputError ]
}


function App() {
  const [search, setSearch, error ]= useSearch()
  const {movies, getMovies}= useMovies(search)

  const handleSubmit = (event) =>{
    event.preventDefault()
    getMovies()
  }

  function handleChange(event){
    setSearch(event.target.value)
  }

  return (
    <div className='page'>
    <header>
      <h1>Movie Finder</h1>
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name="query" value={search}placeholder='Star Wars, Lord of Rings, Cars ... '></input>
          <button type='submit'>Search </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </header>
    <main>
      <Movies movies={movies} />
    </main>
 
    </div>
  )
}

export default App
