"use client"
import Image from "next/image"
import Link from "next/link"
import { FaHeart } from "react-icons/fa"
import logo from "../../public/logo2.svg"
import Container from "./Container"

export default function Footer() {
    return (
        <footer className="bg-zinc-950 justify-center items-center py-8 ">
            <Container className="flex  flex-col justify-center items-center" >
                <Link href="/" className="">
                    <Image alt="teste" src={logo}  />
                </Link>
                
                <span className="text-sm text-slate-500 bg-Inc-950  font-mono  w-full flex items-center justify-center tracking-wide hover:text-slate-500 cursor-pointer">
                    Developed by Parícia Souza{" "}
                    <span className="text-red-600 px-2">
                        <FaHeart size={18} color="" />
                    </span>{" "}
                    2025
                </span>
            </Container>

        </footer>
    )
}