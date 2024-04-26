import isEmpty from 'lodash.isempty'
import './MovieList.css'
import { IMovieCardListProps } from './MovieList.types'
import { IMovieCard } from '../MovieCard/MovieCard.types'
import MovieCard from '../MovieCard'

export default function MovieList(props: IMovieCardListProps) {
  const { movies = [] } = props

  if (isEmpty(movies)) {
    return null
  }

  return (
    <div className="movie-list__container">
      {movies?.map((movieData: IMovieCard) => (
        <MovieCard {...movieData} key={movieData?.id} />
      ))}
    </div>
  )
}
