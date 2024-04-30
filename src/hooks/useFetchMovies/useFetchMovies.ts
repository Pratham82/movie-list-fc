import { useCallback, useEffect, useState } from 'react'
import {
  ICurrentPageType,
  IUseFetchMoviesReturnType,
  IUseFetchMoviesParams,
} from './useFetchMovies.types'
import { TMDB_MOVIES_BASE_URL } from '../../constants/movie_constants'
import { constructURL } from '../../utils'

const useFetchMovies = ({
  baseUrl = TMDB_MOVIES_BASE_URL,
  currentPage = 1,
  listingType = '',
  releaseYear = '2012',
  genre,
}: IUseFetchMoviesParams): IUseFetchMoviesReturnType => {
  const [data, setData] = useState<ICurrentPageType>()
  const [isLoading, setIsLoading] = useState(false)

  const finalUrl = constructURL({
    baseUrl,
    apiKey: encodeURIComponent(import.meta.env.VITE_TMDB_API_KEY || ''),
    currentPage,
    genre,
    releaseYear,
  })

  const fetchMovies = useCallback(async () => {
    setIsLoading(true)

    try {
      const res = await fetch(finalUrl)
      const movieResponse: ICurrentPageType = await res.json()

      setData(movieResponse)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }, [finalUrl])

  useEffect(() => {
    if (genre === 1) {
      return
    }
    fetchMovies()
  }, [currentPage, fetchMovies, listingType, genre])

  return {
    data,
    isLoading,
  }
}

export { useFetchMovies }
