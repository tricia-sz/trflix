"use client"
import Link from "next/link"
import { BiCameraMovie } from "react-icons/bi"
import { LuPopcorn } from "react-icons/lu"
import { RiMovieAiLine } from "react-icons/ri"
import Container from "./Container"
import Image from "next/image"
import logo from "../../public/logo5.svg"
import { Input } from "@/components/ui/input"
import { IoIosSearch } from "react-icons/io"

export default function Header() {
    return (
        <header className="bg-slate-950 justify-center items-center py-8">
            <Container className="flex  justify-between items-center gap-8 cursor-pointer" >
                <Link href="/" className="">
                    <Image alt="teste" src={logo}  />
                </Link>
                <div className="w-2xl mx-auto bg-slate-900 border-none rounded-4xl  py-1 px-4 cursor-pointer">
                    <div className="flex">
                        <Input className="border-none rounded-4x placeholder:text-slate-400 " placeholder="" />
                        <button className="">
                            <IoIosSearch size={24} className="" />
                        </button>
                    </div>
                    
                </div>
                <nav className="flex justify-between gap-16 mx-auto  bg-slate-950 rounded-4xl cursor-pointer" >

                    <Link href="/" className="flex gap-2">
                        <div className="flex gap-2">
                            <LuPopcorn size={24} className="text-sky-500" />
                            FILMES
                        </div>
                    </Link>
                    <Link href="" className="flex gap-2">
                        <BiCameraMovie size={24} className="text-sky-500"/>
                        SÉRIES
                    </Link>

                    <Link href="" className="flex gap-2">
                        <RiMovieAiLine size={24} className="text-sky-500" />
                        ANIMES

                    </Link>
                </nav>
                <Link href="" className="flex gap-2">
                        {/* <RiMovieAiLine size={24} /> */}
                        {/* <User size={26} className="text-sky-500"/> */}

                    </Link>
            </Container>

        </header>
    )
}