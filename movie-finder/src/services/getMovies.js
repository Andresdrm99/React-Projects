import noMovies from '../mocks/not-found.json'

export async function getMovies({search}) {
    if(search){
      const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=53d648f4&s=${search}`)
      const data = await response.json()
      return data
    }
     return noMovies
}