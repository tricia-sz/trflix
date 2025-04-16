"use client"
import Container from "@/shared/Container";
import { FilmesProps } from "@/types/filmes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

export default function Favoritos() {
  const [filmes, setFilmes] = useState<FilmesProps[]>([])

  useEffect(() => {
    const minhaLista = localStorage.getItem("@trflix");
    setFilmes(JSON.parse(minhaLista) || [])
  }, [])

  // function excluirFilme() {
  //   return ""
  // }

  return (
    <Container className="">
      <div className="flex  justify-center items-center flex-col ">
      <h1 className="text-white text-5xl mb-8  font-bold flex gap-2"> Meus Favoritos</h1>


        <ul className="flex items-center justify-center mx-auto gap-8 flex-wrap">
          
          {filmes.map((item) => {
            return (
              <li key={item.id} className="flex ">
                <span className="flex  bg-purple-900 gap-2 justify-center items-center mx-auto flex-col px-8 ">
                  {item.title}
                  <Link href={`/filme/${item.id}`} className=" text-yellow-400 hover:text-yellow-600" > Ver detalhes</Link>
                   <button className="bg-purple-200  flex gap-2 justify-center items-center rounded-4xl py-3 px-8 mb-8 text-purple-950 mt-8 text-xl hover:bg-red-400"><MdDelete className="" size={24} />Excluir</button>
                </span>
              </li>
            )

          })}
        </ul>
      </div>
    </Container>
  )
}