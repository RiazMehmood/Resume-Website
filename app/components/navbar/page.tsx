import Link from "next/link";
import { CiHashtag } from "react-icons/ci";
export default function Navbar() {
  return (
    <div className=" ml-10 my-6 flex justify-between ">
      <div className="flex justify-around">
        <h1 className="flex font-bold text-3xl font-sans">
          <p className="pt-1">
            <CiHashtag />
          </p>
          <Link href={'./'}>RiazMehmood</Link><p className="mx-2 font-extralight">Engineer</p>
        </h1>
      </div>
      <div>
        <ul className="mr-8 flex text-xl justify-around">
          <li className="mx-2"><Link type="text" href={'./components/resume'}>Resume</Link> </li>|
          <li className="mx-2"><Link type="text" href={'./components/projects'}>Projects</Link> </li>|
          <li className="mx-2"><Link type="text" href={'./components/contact'}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
