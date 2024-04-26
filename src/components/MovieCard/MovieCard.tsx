import { TMDB_MOVIE_PREFIX } from '../../constants/movie_constants'
import { IMovieCard } from './MovieCard.types'
import './MovieCard.css'

export default function MovieCard(props: IMovieCard) {
  const { original_title: title = '', poster_path: poster = '' } = props
  return (
    <div className="movie-card__layout">
      <div className="movie-card__container">
        <img
          src={`${TMDB_MOVIE_PREFIX}${poster}`}
          width="150px"
          height="225px"
          className="movie-card__image"
        />
      </div>
      <h3 className="movie-card__title">{title}</h3>
    </div>
  )
}
