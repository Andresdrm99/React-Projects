export async function getMovies({search}) {
  
  if(search === '') return null
  try{
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=53d648f4&s=${search}`)
    if (!response.ok) {
      throw new Error("Error fetching movies");
    }
    
    const data = await response.json()
    if (data.Response === "False") {
      return [];
    }

    return data.Search?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    })) || [];
  }
  catch(e){
    throw new Error('Error searching the movie')
  }
}