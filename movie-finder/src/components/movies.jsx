export function ListOfMovies ({ movies }) {
    return(
    <>
        <ul className="movies">
            {
            movies.map(movie =>(
            <li key={movie.id} className="movie">
                <img src={movie.poster} alt={movie.title} className="poster"></img>
                <div className="info">
                    <h2>
                    {movie.title}
                    </h2>
                    <p>{movie.year}</p>
                </div>
            </li>
            ))}
        </ul>
       
    </>)
}

export function NoResults(){
    return(<p>Find a movie</p>)
}

export function Movies({ movies }){
    const hasMovies = movies.length > 0 ? true : false
    return( hasMovies ? <ListOfMovies movies={movies}/> : <NoResults/> )
}