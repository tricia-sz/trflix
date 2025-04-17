"use client"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { BiCameraMovie } from "react-icons/bi"
import { IoIosSearch } from "react-icons/io"
import { LuPopcorn } from "react-icons/lu"
import logo from "../../public/logo.svg"
import Container from "./Container"

import { FaStar, FaUserCircle } from "react-icons/fa"
import waveTop from "../../public/wave.svg"

export default function Header() {
    return (
      <>
          <header className="bg-slate-950 justify-center items-center py-8">
            <Container className="flex  justify-between items-center gap-8 cursor-pointer" >
                <Link href="/" className="">
                    <Image alt="teste" src={logo} width={250} />
                </Link>
                <div className="w-2xl mx-auto bg-purple-950 border-none rounded-4xl  py-1 px-4 cursor-pointer">
                    <div className="flex">
                        <Input className="border-none rounded-4x placeholder:text-slate-400 " placeholder="" />
                        <button className="">
                            <IoIosSearch size={24} className="" />
                        </button>
                    </div>
                    
                </div>
                <nav className="flex justify-between gap-16 mx-auto   rounded-4xl cursor-pointer" >

                    <Link href="/" className="flex gap-2">
                        <div className="flex gap-2">
                            <LuPopcorn size={24} className="text-purple-500" />
                            FILMES
                        </div>
                    </Link>
                    <Link href="" className="flex gap-2">
                        <BiCameraMovie size={24} className="text-purple-500"/>
                        SÉRIES
                    </Link>

                    <Link href="/favoritos/" className="flex gap-2">
                        <FaStar size={24} className="text-purple-500" />
                        FAVORITOS

                    </Link>
                    <Link href="" className="flex gap-2">
                  <FaUserCircle size={36} className="text-purple-800"/>

                </Link>
                </nav>
            </Container>
            

        </header>
         <Image src={waveTop} className="w-full" alt="waveTop" />
      </>
    )
}