import { useRef, useState, useMemo, useCallback } from 'react'
import {getMovies} from '../services/getMovies.js'

export function useMovies({search, sort}) { 
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef({search})
  
  const getSearchMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;
    try {
      setError(null);
      setLoading(true);
      previousSearch.current = search;
      const searchMovies = await getMovies({ search });
      setMovies(searchMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.year.localeCompare(b.year)) : movies;
  }, [sort, movies]);

  return {movies: sortMovies ,getSearchMovies, loading}
}

