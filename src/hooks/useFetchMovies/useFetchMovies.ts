import { useCallback, useEffect, useState } from 'react'
import { ICurrentPageType } from './useFetchMovies.types'
import { TMDB_MOVIES_BASE_URL } from '../../constants/movie_constants'

const useFetchMovies = ({
  baseUrl = TMDB_MOVIES_BASE_URL,
  currentPage = 1,
  listingType = '',
  releaseYear = '2012',
}: {
  baseUrl?: string
  currentPage?: number
  listingType?: string | string[]
  releaseYear: string
}) => {
  const [data, setData] = useState<ICurrentPageType>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchMovies = useCallback(async () => {
    const url = `${baseUrl}?api_key=${encodeURIComponent(
      import.meta.env.VITE_TMDB_API_KEY || ''
    )}&page=${currentPage}&language=en-US&sort_by=popularity.desc&primary_release_year=${releaseYear}&vote_count.gte=100`

    setIsLoading(true)

    try {
      const res = await fetch(url)
      const movieResponse: ICurrentPageType = await res.json()

      setData(movieResponse)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }, [baseUrl, currentPage, releaseYear])

  useEffect(() => {
    fetchMovies()
  }, [currentPage, fetchMovies, listingType])

  return {
    data,
    isLoading,
  }
}

export { useFetchMovies }

// https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d&sort_by=popularity.desc&primary_release_year=2023&page=1&vote_count.gte=100
