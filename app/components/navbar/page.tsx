import Link from "next/link";
import { CiHashtag } from "react-icons/ci";

export default function Navbar() {
  return (
    <div className="mx-4 md:mx-10 my-6 flex flex-col md:flex-row justify-between">
      <div className="flex items-center">
        <h1 className="flex font-bold text-xl md:text-3xl font-sans">
          <p className="pt-1">
            <CiHashtag />
          </p>
          <Link href={'./'}>RiazMehmood</Link>
          <p className="mx-2 font-extralight hidden md:block">Engineer</p>
        </h1>
      </div>
      <div>
        <ul className="flex text-lg md:text-xl justify-around">
          <li className="mx-2"><Link type="text" href={'./components/resume'}>Resume</Link> </li>
          <li className="mx-2"><Link type="text" href={'./components/projects'}>Projects</Link> </li>
          <li className="mx-2"><Link type="text" href={'./components/contact'}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
