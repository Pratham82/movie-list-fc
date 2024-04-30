import { useEffect, useState } from 'react'
import './App.css'
import { Layout, MovieList } from './components'
import TopBar from './components/TopBar/TopBar'
import { TMDB_GENRE_URL } from './constants/movie_constants'
import { useFetchMovies } from './hooks/useFetchMovies/useFetchMovies'
import {
  IGenresPage,
  IResult,
} from './hooks/useFetchMovies/useFetchMovies.types'

function App() {
  const [currentGenre, setCurrentGenre] = useState<number>()
  const { data, isLoading } = useFetchMovies({
    currentPage: 1,
    releaseYear: '2012',
    genre: currentGenre,
  })

  const { data: genreData } = useFetchMovies({
    baseUrl: TMDB_GENRE_URL,
    currentPage: 1,
    releaseYear: '2012',
  })

  const onSelectGenre = (id: number): void => {
    setCurrentGenre(id)
  }

  useEffect(() => {
    onSelectGenre(1)
  }, [])

  const pageData = data as IResult
  const genrePageData = genreData as IGenresPage

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <TopBar
        state={{
          currentGenre,
          genres: genrePageData?.genres,
        }}
        actions={{
          onSelectGenre,
        }}
      />
      <MovieList movies={pageData?.results} />
    </Layout>
  )
}

export default App
