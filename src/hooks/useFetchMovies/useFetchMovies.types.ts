export interface IResult {
  page: number
  results: IResults[] | null
  total_pages: number
  total_results: number
}
export interface IResults {
  adult: boolean
  backdrop_path: string
  genre_ids?: number[] | null
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface IMoviePage {
  adult: boolean
  backdrop_path: string
  belongs_to_collection?: null
  budget: number
  genres?: IGenres[] | null
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies?: IProductionCompanies[] | null
  production_countries?: IProductionCountries[] | null
  release_date: string
  revenue: number
  runtime: number
  spoken_languages?: ISpokenLanguages[] | null
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
export interface IGenres {
  id: number
  name: string
}
export interface IProductionCompanies {
  id: number
  logo_path: string
  name: string
  origin_country: string
}
export interface IProductionCountries {
  iso_3166_1: string
  name: string
}
export interface ISpokenLanguages {
  english_name: string
  iso_639_1: string
  name: string
}

export interface IGenresPage {
  genres: IGenres[] | null
}

export type ICurrentPageType = IResult | IMoviePage | IGenresPage | undefined

export type IUseFetchMoviesReturnType = {
  data: ICurrentPageType
  isLoading: boolean
}

export interface IUseFetchMoviesParams {
  baseUrl?: string | URL
  currentPage?: number
  listingType?: string | string[]
  releaseYear: string
  genre?: number
  apiKey?: string
}
