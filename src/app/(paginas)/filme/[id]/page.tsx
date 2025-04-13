"use client"
import { useParams } from "next/navigation"

import api from "../../../../services/api"
import { useEffect, useState } from "react"
import Image from "next/image"
import { FaStar } from "react-icons/fa"
import { FaStarHalfStroke } from "react-icons/fa6"

export default function Filme() {
    const {id} = useParams()
    const [filme, setFilme] = useState({})
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
    },[])

    if(loading) {
        return(
            <div>
                <h1>Carregando filme</h1>
            </div>
        )
    }

    return (
        <div className="w-5xl mx-auto">
            <h1 className="text-5xl mb-4  font-bold">{filme.title}</h1>
            <Image 
              alt=""
                className="object-cover rounded-xl w-full"
                width={80}
                height={80}
                unoptimized
                priority
                src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
            />
        <h2 className="flex gap-2 text-2xl text-yellow-300 mt-8">Sinopse</h2>
        <span className="flex gap-2 text-2xl mb-8 mt-8">{filme.overview}</span>
        <strong className="flex gap-2 text-3xl">Avalição: 
                <FaStar size={24} className="text-yellow-400"/>
                <FaStar size={24} className="text-yellow-400"/> 
                <FaStar size={24} className="text-yellow-400"/> 
                <FaStar size={24} className="text-yellow-400"/>
                <FaStar size={24} className="text-yellow-400"/>
                <FaStarHalfStroke size={24} className="text-yellow-400" />
                {filme.vote_average}
        </strong>
        </div>
    )
}