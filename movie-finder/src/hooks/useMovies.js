import { useRef, useState, useMemo } from 'react'
import {getMovies} from '../services/getMovies.js'

export function useMovies({search, sort}) { 
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef({search})
  
  const getSearchMovies = useMemo(() => {
    return async ({search}) => {
      if(search === previousSearch) return 
      try{
        setError(null)
        setLoading(true)
        previousSearch.current = search
        const searchMovies = await getMovies({search})
        setMovies(searchMovies)
      } catch(e){
        setError(e.message)
      }
      finally{
        setLoading(false)
      }
    }
  },[])

  const sortMovies = useMemo(()=>{
    return sort ? [...movies].sort((a,b) => a.title.localeCompare(b.title)) : movies
  }) 

  return {movies: sortMovies ,getSearchMovies, loading}
}

