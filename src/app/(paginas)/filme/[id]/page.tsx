"use client"
import { useParams } from "next/navigation"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BiMoviePlay } from "react-icons/bi"
import { FaStar } from "react-icons/fa"
import { FaStarHalfStroke } from "react-icons/fa6"
import { LuPopcorn } from "react-icons/lu"
import api from "../../../../services/api"
import { FilmesProps } from "@/types/filmes"
import { FcStart } from "react-icons/fc"
import { IoIosSave } from "react-icons/io"
import { toast, ToastContainer } from 'react-toastify';

export default function Filme() {
  const { id } = useParams()
  const [filme, setFilme] = useState<FilmesProps>()
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: "0bf465eb3695dec02ebac539f2b99444",
          language: "pt-BR",
         
        }
      }).then((resoinse) => {
        setFilme(resoinse.data)
        setLoading(false)
      }).catch(() => {

      toast.error("Filme não encontrado =/")

      })
    }

    loadFilme()


  }, [id, filme, loading])


  function salvarFilme() {
    const minhaLista: string | null = localStorage.getItem("@trflix")
    const filmesSalvos = JSON.parse(minhaLista as string) || []
    const hasFilme = filmesSalvos.some((filmesSalvo: { id: string | undefined }) => filmesSalvo.id === filme?.id)

    if (hasFilme) {
      toast.warn("Esse filme já está na sua lista")
      return;
    }

    filmesSalvos.push(filme)
    localStorage.setItem("@trflix", JSON.stringify(filmesSalvos))
    toast.success("Filme salvo com sucesso =)")
  }

  if (loading) {
    return (
      <div>
        <h1>Carregando filme</h1>
      </div>
    )
  }


  return (
    <div className="w-full mx-auto justify-center p-4 cursor-pointer  lg:w-7xl md:w-3xl sm:w-xl">
      <h1 className="text-white text-3xl mb-8  font-bold flex gap-2 p-2 text-center lg:text-5xl"> {filme?.title}</h1>

      <Image
        alt=""
        className="object-cover  w-full p-4 rounded-4xl"
        width={300}
        height={100}
        unoptimized
        priority
        src={`https://image.tmdb.org/t/p/original/${filme?.backdrop_path}`}
      />
      <div className=" bg-purple-500 rounded-2xl py-4 px-2  mb-4 mt-8 flex flex-col w-full lg:w-7xl md:w-3xl sm:w-xl">
        <div className="bg-purple-950 rounded-2xl px-4">
          <h2 className="flex gap-2 text-2xl font-medium mt-8 text-purple-300"><BiMoviePlay size={36} className="" />Sinopse</h2>
          <span className="flex gap-2 text-2xl mb-8 mt-4 text-gray-300   -tracking-tighter ">{filme?.overview}</span>
        </div>
       <div className="rounded-3xl px-2 py-4 md:full sm:w-xl lg:w-full">
        <h2 className=" text-2xl mb-4  font-bold flex gap-2 text-purple-950">
            País de origem:
            <span className="font-normal">{filme?.origin_country}</span>
          </h2>
          <h2 className=" text-2xl mb-4  font-bold flex gap-2 text-purple-950">
            Duração: 
            <span className="font-normal">{filme?.runtime}</span>
            <span className="font-normal">minutos</span>
          </h2>
          
          <h2 className="text-2xl mb-4  font-bold flex gap-2 text-purple-950"> 
            Lançamento: 
            <span className="font-normal ">{filme?.release_date}</span>
          </h2>
        <div className="flex">
          <h2 className=" text-2xl mb-4  font-bold flex gap-2 text-purple-950">
            Gênero:
            <div className="flex gap-2">
              <span className="flex px-4 rounded-4xl text-purple-200 font-light gap-2">
                {filme?.genres?.map((genero) => (
                  <span key={genero?.id} className="w-full flex px-2 gap-2 bg-purple-900 rounded-2xl text-sm justify-center items-center">{genero?.name}</span>
                ))}
                
              </span> 
            </div>
          
          </h2>
         
        </div>
        <strong className="flex gap-2 text-3xl text-purple-950 mx-auto justify-center items-center">
        <LuPopcorn size={32} />
        <FaStar size={24} className="text-yellow-400" />
        <FaStar size={24} className="text-yellow-400" />
        <FaStar size={24} className="text-yellow-400" />
        <FaStar size={24} className="text-yellow-400" />
        <FaStarHalfStroke size={24} className="text-yellow-400" />
        {filme?.vote_average}
      </strong>
       </div>
      </div>

     
      <div className="flex gap-6  mt-4 mx-auto justify-center items-center">
        <Link href={""} >
          <button 
            onClick={salvarFilme} 
            className="bg-purple-200  flex gap-2 justify-center items-center rounded-4xl py-3 px-8 text-purple-950 mt-8 text-xl">
            <IoIosSave size={24} />
            Salvar
            <ToastContainer  theme="colored" autoClose={5000} position="top-right"/>
          </button>
          
        </Link>
        <Link href={`https://youtube.com/results?search_query=${filme?.title} Trailer`} target="blank" rel="external" >
          <button className="flex bg-purple-200  gap-2 justify-center items-center rounded-4xl px-4 py-3  text-purple-950 mt-8 text-xl"><FcStart size={24} />Assistir Trailer</button>
        </Link>
      </div>
    </div>
  )
}