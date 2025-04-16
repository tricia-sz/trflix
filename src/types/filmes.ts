import { ReactNode } from "react"

export interface FilmesProps {
  name: ReactNode
  title: string
  poster_path: string
  id: string,
  backdrop_path: string
  overview: string
  vote_average: string
  genre_ids: string 
  genres: string[] | null
  origin_country: string
  parent_company: string
  release_date: string
  runtime: string
}