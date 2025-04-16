"use client"
import Filmes from "@/components/Filmes"
import Container from "@/shared/Container"
import { ToastContainer, toast } from 'react-toastify';
export default function Home() {
  return (

    <Container className="mt-24 mb-36">
      <Filmes />
    </Container>
    

  )
}
