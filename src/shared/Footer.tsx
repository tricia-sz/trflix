"use client"
import Image from "next/image"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"
import logo from "../../public/logo4.svg"
import Container from "./Container"
import waveBottom from "../../public/wave.svg"

export default function Footer() {
    return (
       <>
            <Image src={waveBottom} className="w-full rotate-180" alt="waveTop"/>
        
         <footer className="bg-slate-950 justify-center items-center py-8 ">
            <Container className="flex  flex-col justify-center items-center" >
                <Link href="/" className="">
                    <Image alt="teste" src={logo}  />
                </Link>
                
                <Link href={`https://tricia-sz.netlify.app/`} target="blank" rel="external" className="">
                  <span className="text-sm text-slate-500 bg-Inc-950  font-mono  w-full flex items-center justify-center tracking-wide hover:text-purple-500 cursor-pointer ">
                    Developed by Parícia Souza{" "}
                    <span className="text-purple-600 px-2">
                        <FaHeart size={18} color="" />
                    </span>{" "}
                    2025
                </span>
                </Link>
            </Container>

        </footer>
       </>
    )
}