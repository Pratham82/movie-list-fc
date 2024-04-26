import isEmpty from 'lodash.isempty'
import './TopBar.css'

interface ITopBarProps {
  genres: { id: number; name: string }[]
}

export default function TopBar(props: ITopBarProps) {
  const { genres } = props

  if (isEmpty(genres)) {
    return null
  }

  const modifiedGenres = [{ id: 'dfdf', name: 'All' }].concat(genres)

  return (
    <div className="topbar__container">
      {/* {!isEmpty(genres) && genres?.map(g => <div>{g.name}</div>)} */}
      <div className="topbar__genres">
        {modifiedGenres?.map(genre => {
          return (
            <button
              // onClick={() => push(`/${genre.id}`)}
              type="button"
              // className={classNames(
              //   "mx-2 rounded-lg py-2 px-4 text-base font-light transition ease-in",
              //   isActiveRoute(genre.id) &&
              //     "bg-slate-600 font-normal text-slate-200",
              // )}
              key={genre.id}
              className="topbar__button"
            >
              {genre?.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
