"use client"
import { useEffect, useState } from "react"
import api from "../services/api"
import Container from "@/shared/Container"

// interface FilmesProps {
//   title: string,
//   filme: string
// }
export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "0bf465eb3695dec02ebac539f2b99444",
          language: "pt-BR",
          page: 1,
        }
      })

      setFilmes(response.data.results)
      
      
    }

    loadFilmes()
    
  }, [])

  return (
   <Container>
      <div className="bg-red-300">
        {filmes.map((filme) => {
          return(
              <article key={filme.id}>
                  <strong>{filme.title}</strong>
              </article>
          )
        } )}
      </div>
   </Container>
  );
}
