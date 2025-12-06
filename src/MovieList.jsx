import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({
    movies,
    rateMovie,
    toggleWatched,
    deleteMovie,
}) => {

  return (
    <div className="mt-4">
            {movies.length === 0 ? (
                <p className="text-center text-gray-400">
                    No movies in your watchlist. Add some!
                </p>
            ) : (
                <ul className="space-y-3">
                    {movies.map((movie) => (
                        <MovieItem
                            key={movie.id}
                            movie={movie}
                            rateMovie={rateMovie}
                            toggleWatched={toggleWatched}
                            deleteMovie={deleteMovie}
                        />
                    ))}
                </ul>
            )}
        </div>
  )
}

export default MovieList