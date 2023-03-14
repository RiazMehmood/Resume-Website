import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-[70vh] mx-10">
      <p className="mt-18 text-4xl font-sans border-b-2">Projects</p>
      <div className="bg-gray-100 -my-9">
        <div className="grid grid-cols-[10rem,20rem,1fr,2rem] my-10 ">
        <div className="text-4xl underline font-semibold"></div>
          
          <div>
            <h1 className="text-2xl font-bold">Website Templates</h1>
          </div>
        </div>
        <div className="grid grid-cols-[10rem,14rem,1fr,2rem] ">
          <div></div>
          <div className="text-xl font-semibold">
            <h1>Resume Website</h1>
          </div>
          <div className="text-2xl font-semibold">
            <h2><Link href={'https://github.com/RiazMehmood/Resume-Website'}><BsGithub/></Link></h2>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-[10rem,14rem,1fr,2rem] ">
          <div></div>
          <div className="text-xl font-semibold">
            <h1>PIAIC Website</h1>
          </div>
          <div className="text-2xl font-semibold">
            <h2><Link href={'https://github.com/RiazMehmood/Resume-Website'}><BsGithub/></Link></h2>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-[10rem,14rem,1fr,2rem] ">
          <div></div>
          <div className="text-xl font-semibold">
            <h1>Panaverse Website</h1>
          </div>
          <div className="text-2xl font-semibold">
            <h2><Link href={'https://github.com/RiazMehmood/Resume-Website'}><BsGithub/></Link></h2>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-[10rem,20rem,1fr,2rem] my-10 ">
        <div className="text-4xl underline font-semibold"></div>
          
          <div>
            <h1 className="text-2xl font-bold">TypeScript CLI Projects</h1>
          </div>
        </div>
        <div className="grid grid-cols-[10rem,14rem,1fr,2rem] ">
          <div></div>
          <div className="text-xl font-semibold">
            <h1>Resume Website</h1>
          </div>
          <div className="text-2xl font-semibold">
            <h2><Link href={'https://github.com/RiazMehmood/Resume-Website'}><BsGithub/></Link></h2>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-[10rem,14rem,1fr,2rem] ">
          <div></div>
          <div className="text-xl font-semibold">
            <h1>PIAIC Website</h1>
          </div>
          <div className="text-2xl font-semibold">
            <h2><Link href={'https://github.com/RiazMehmood/Resume-Website'}><BsGithub/></Link></h2>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-[10rem,14rem,1fr,2rem] ">
          <div></div>
          <div className="text-xl font-semibold">
            <h1>Panaverse Website</h1>
          </div>
          <div className="text-2xl font-semibold">
            <h2><Link href={'https://github.com/RiazMehmood/Resume-Website'}><BsGithub/></Link></h2>
          </div>
          <div></div>
        </div>         
        
      </div>
    </div>
  );
}
