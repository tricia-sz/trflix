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


export default function Filme() {

    const {id} = useParams()
    const [filme, setFilme] = useState<FilmesProps>()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "0bf465eb3695dec02ebac539f2b99444",
                    language: "pt-BR",
            }
            }).then((resoinse) => {
                setFilme(resoinse.data)
                setLoading(false)
            }).catch(() => {
                console.log('FILME NAO ENCONTRADO');
            })
        }

        loadFilme()

        return () => {
            console.log('COMPONENTE DESMONTADO');
        }
    },[id, filme, loading])

    if(loading) {
        return(
            <div>
                <h1>Carregando filme</h1>
            </div>
        )
    }

    return (
        <div className="w-5xl mx-auto cursor-pointer">
             <h1 className="text-5xl mb-4  font-bold flex gap-2"> {filme?.title}</h1>
            <Image 
              alt=""
                className="object-cover rounded-xl w-full"
                width={80}
                height={80}
                unoptimized
                priority
                src={`https://image.tmdb.org/t/p/original/${filme?.backdrop_path}`}
            />
        {/* <span className="flex gap-2 text-3xl  text-red-500">{filme.genres.name}</span> */}
        <h2 className="flex gap-2 text-2xl font-medium mt-8"><BiMoviePlay size={36} className="" />Sinopse</h2>
        <span className="flex gap-2 text-2xl mb-8 mt-8">{filme?.overview}</span>
        <strong className="flex gap-2 text-3xl">
                <LuPopcorn  size={32}/>
                <FaStar size={24} className="text-yellow-400"/>
                <FaStar size={24} className="text-yellow-400"/> 
                <FaStar size={24} className="text-yellow-400"/> 
                <FaStar size={24} className="text-yellow-400"/>
                <FaStarHalfStroke size={24} className="text-yellow-400" />
                {filme?.vote_average}
        </strong>

        <Link href={`https://youtube.com/results?search_query=${filme?.title} Trailer`} target="blank" rel="external" >
           <button className="bg-white  rounded-4xl py-4 px-8 text-purple-950 mt-8 text-xl">Assistir Trailer</button>
        </Link>
        </div>
    )
}