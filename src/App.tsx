import './App.css'
import { Layout, MovieList } from './components'
import TopBar from './components/TopBar/TopBar'
import { TMDB_GENRE_URL } from './constants/movie_constants'
import { useFetchMovies } from './hooks/useFetchMovies/useFetchMovies'
import { IResult } from './hooks/useFetchMovies/useFetchMovies.types'

function App() {
  const { data, isLoading } = useFetchMovies({
    currentPage: 1,
    releaseYear: '2012',
  })

  const { data: genreData, isLoading: isGenreLoading } = useFetchMovies({
    baseUrl: TMDB_GENRE_URL,
    currentPage: 1,
    releaseYear: '2012',
  })

  const pageData = data as IResult

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      {/* <TopBar genres={genreData?.genres} /> */}
      <TopBar genres={genreData?.genres} />
      <MovieList movies={pageData?.results} />
    </Layout>
  )
}

export default App
