import Link from "next/link"
import { FaYoutube, FaTwitter, FaGithub, FaLaptop, FaInstagram } from "react-icons/fa"

const youtubeUrl = "https://www.youtube.com/@nerdoladecartola5348";
const githubUrl = "https://github.com/nerdola-de-cartola";
const instagramUrl = "https://www.instagram.com/matheux19946/";
const twitterUrl = "https://twitter.com/MatheusLMP5772";

export default function Navbar() {
   return (
      <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
         <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
               <Link href="/" className="text-white/90 no-underline hover:text-white">Matheus Lucas</Link>
            </h1>
            <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
               <Link className="text-white/90 hover:text-white" href={youtubeUrl}>
                  <FaYoutube />
               </Link>
               <Link className="text-white/90 hover:text-white" href={instagramUrl}>
                  <FaInstagram />
               </Link>
               <Link className="text-white/90 hover:text-white" href={githubUrl}>
                  <FaGithub />
               </Link>
               <Link className="text-white/90 hover:text-white" href={twitterUrl}>
                  <FaTwitter />
               </Link>
            </div>
         </div>
      </nav>
   )
}