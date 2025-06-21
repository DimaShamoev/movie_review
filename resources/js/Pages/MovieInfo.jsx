import React from 'react'

const MovieInfo = ({ movie }) => {
  return (
    <div>

        <div>

            <p>{ movie.id }</p>
            <p>{ movie.movie_title }</p>

        </div>

    </div>
  )
}

export default MovieInfo