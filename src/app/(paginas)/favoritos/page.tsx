"use client"
import Container from "@/shared/Container";
import { FilmesProps } from "@/types/filmes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';

export default function Favoritos() {
  const [filmes, setFilmes] = useState<FilmesProps[]>([])

  useEffect(() => {

    const minhaLista = localStorage.getItem("@trflix");
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  function excluirFilme(id: string) {
    const filtroFilmes = filmes.filter((item) => {
      return (item.id !== id)
    })

    setFilmes(filtroFilmes);
    localStorage.setItem("@trflix", JSON.stringify(filtroFilmes))
    toast.success("Filme removido com sucesso")

  }

  return (
    <Container className="">
      <div className="flex  justify-center items-center flex-col ">
        <h1 className="text-white text-5xl mb-8  font-bold flex gap-2"> Meus Favoritos</h1>

        {filmes.length === 0 && <span className="text-yellow-300 text-3xl  font-bold ">Você ainda não possui nenhum filme salvo =(</span>}

        <ul className="items-center justify-center mx-auto gap-8 grid grid-cols-4">
          {filmes.map((item) => {
            return (
              <li key={item.id} className="flex flex-col w-full justify-center items-center bg-purple-900/90 rounded-2xl">
                <div className="">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    alt={item.title}
                    className="object-cover rounded-t-2xl w-full h-[300px]"
                    width={80}
                    height={200}
                    unoptimized
                    objectFit="cover"
                  />
                  <p className="text-xl text-center py-2 mb-2"> {item.title}</p>
                  <Link href={`/filme/${item.id}`} className=" text-yellow-500   hover:text-yellow-200 rounded-3xl flex justify-center items-center gap-2 " > <IoEyeSharp size={24} />ver detalhes</Link>
                  <span className="flex">
                  <div className="flex justify-center mx-auto mb-4">
                    <button onClick={() => excluirFilme(item.id)} className="bg-purple-200  flex gap-2 justify-center items-center rounded-4xl  px-8 text-purple-950 mt-8 text-xl hover:bg-red-400">
                      <MdDelete className="" size={24} />
                      Excluir
                    </button>
                  </div>
                </span>
                </div>
                
              </li>
            )

          })}

          <ToastContainer theme="colored" autoClose={5000} position="top-right" />
        </ul>
      </div>
    </Container>
  )
}
