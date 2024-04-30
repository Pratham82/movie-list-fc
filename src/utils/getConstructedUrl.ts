import { IUseFetchMoviesParams } from '../hooks/useFetchMovies/useFetchMovies.types'

const constructURL = (params: IUseFetchMoviesParams) => {
  const { baseUrl, apiKey, currentPage, releaseYear, genre } = params

  const url = new URL(String(baseUrl))
  const searchParams = new URLSearchParams()

  searchParams.append('api_key', encodeURIComponent(apiKey || ''))
  searchParams.append('page', String(currentPage))
  searchParams.append('primary_release_year', releaseYear)
  if (genre) {
    searchParams.append('with_genres', String(genre))
  }
  searchParams.append('language', 'en-US')
  searchParams.append('sort_by', 'popularity.desc')
  searchParams.append('vote_count.gte', '100')

  url.search = searchParams.toString()

  return url.toString()
}

export { constructURL }
