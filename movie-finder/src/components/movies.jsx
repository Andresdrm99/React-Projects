export function ListOfMovies ({ movies }) {
    return(
    <>
        <ul className="movies">
            {
            movies.map(movie =>(
            <li key={movie.id} className="movie">
                <div className="info">
                    <h2>
                    {movie.title}
                    </h2>
                    <p>{movie.year}</p>
                </div>
                <img src={movie.poster} alt={movie.title}></img>
            </li>
            ))}
        </ul>
    </>)
}

export function NoResults(){
    return(<p>Theres no movies</p>)
}

export function Movies({ movies }){
    const hasMovies = movies.length > 0 ? true : false
    return( hasMovies ? <ListOfMovies movies={movies}/> : <NoResults/> )
}