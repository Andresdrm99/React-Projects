import { Movies } from './components/movies'
import { useState, useEffect, useRef } from 'react'
import { useMovies } from './hooks/useMovies'
import  calendar  from './assets/calendar.svg'
import logo from './assets/Logo.png'
import searchIcon from './assets/searchIcon.svg'
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
  const [sort, setSort] = useState(false)
  const {movies, getSearchMovies, loading}= useMovies({search, sort})


  const handleSubmit = (event) =>{
    event.preventDefault()
    getSearchMovies({ search })
  }

  function handleChange(event){
    setSearch(event.target.value)
  }

  return (
    <div className='page'>
    <header>
    <img  className="logo" src={logo} alt="Logo" />
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <input className='inputSearch' onChange={handleChange} name="query" value={search} placeholder='Star Wars, Lord of Rings, Cars ... '></input>
          <button type='submit' className='searchButton'><img src={searchIcon} alt="Logo" /></button>
          <buton onClick={()=>setSort(!sort)}><img src={calendar} alt="Logo" /></buton>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </header>
    <main>
      {loading ? <p>Cargando</p> : <Movies movies={movies} />}
    </main>
    </div>
  )
}

export default App
