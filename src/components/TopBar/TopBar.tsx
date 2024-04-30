import isEmpty from 'lodash.isempty'
import './TopBar.css'
import { IGenres } from '../../hooks/useFetchMovies/useFetchMovies.types'

interface ITopBarProps {
  state: {
    genres: IGenres[] | null
    currentGenre: number
  }
  actions: {
    onSelectGenre: (id: number) => void
  }
}

export default function TopBar(props: ITopBarProps) {
  const { genres, currentGenre } = props.state || {}
  const { onSelectGenre } = props.actions || {}

  const modifiedGenres = [{ id: 1, name: 'All' }].concat(genres)

  if (isEmpty(genres)) {
    return null
  }

  return (
    <div className="topbar__container">
      {/* {!isEmpty(genres) && genres?.map(g => <div>{g.name}</div>)} */}
      <div className="topbar__genres">
        {modifiedGenres?.map(genre => {
          const calcClass = `topbar__button ${
            currentGenre == genre.id ? 'top__button-selected' : ''
          }`
          return (
            <button
              type="button"
              key={genre.id}
              className={calcClass}
              onClick={() => onSelectGenre(genre.id)}
            >
              {genre?.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
