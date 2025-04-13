import Link from "next/link"
import { BiCameraMovie, BiUser } from "react-icons/bi"
import { LuPopcorn } from "react-icons/lu"
import { RiMovieAiLine } from "react-icons/ri"
import Container from "./Container"

export default function Header() {
    return (
        <header className="bg-red-950">
            <Container className="flex flex-1 justify-between items-center">
                     {/* <Link href="/" className="mt-8">
                        <Image alt="teste" src={logo} priority sizes="200px" quality={100}/>
                     </Link> */}
                <nav className="flex justify-between gap-32 mx-auto  bg-red-900 rounded-4xl py-4 px-8" >
                    <Link href="" className="flex gap-2">
                       <div>
                        <LuPopcorn size={24} />
                        Filmes
                       </div>
                    </Link>
                    <Link href="" className="flex gap-2">
                        <div>
                            <BiCameraMovie size={24}  />
                            Séries
                        </div>
                    </Link>
                    <Link href="" className="flex gap-2">
                       <div>
                        <RiMovieAiLine size={24}  />
                        Animes
                       </div>

                    </Link>
                </nav>
                <Link href="" className="flex gap-2 mt-8">
                        <BiUser size={24}/>
                     </Link>
            
            </Container>
            
        </header>
    )
}