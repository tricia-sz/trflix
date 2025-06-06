"use client"
import Container from "@/shared/Container"
import { FilmesProps } from "@/types/filmes"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import api from "../services/api"

export default function Filmes() {
  const [filmes, setFilmes] = useState<FilmesProps[]>([])

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "0bf465eb3695dec02ebac539f2b99444",
          language: "pt-BR",
          page: 1,
          include: "include_image_language",

        }
      })

      setFilmes(response.data.results)


    }

    loadFilmes()

  }, [])

  return (

    <Container>
      <div className="mx-auto justify-center items-center flex">
        <div className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid gap-8 mx-auto justify-center items-center">
          {filmes.map((filme) => {
            return (
              <div key={filme.id} className="justify-center items-center mb-8 mt-8">
                <Link href={`/filme/${filme.id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                    alt={filme.title}
                    className="object-cover rounded-xl w-full"
                    width={80}
                    height={80}
                    unoptimized />

                  <div className="flex mt-2 justify-center items-center text-xl">
                    {filme.title}
                  </div>
                </Link>

              </div>
            )
          })}
        </div>
      </div>
    </Container>

  )
}
