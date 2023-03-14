import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { RiCopyrightLine } from "react-icons/ri";
import Link from "next/link";



export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-10 py-8 border-t-2">
      <div className="md:w-1/4 flex flex-row md:flex-col mx-4 items-center">
        <p className="font-bold text-lg  md:mb-4">Number</p>
        <span className="text-sm mx-4">+92-307-2791683</span>
      </div>
      <div className="md:w-1/4 flex flex-row md:flex-col mx-4 items-center">
        <p className="font-bold text-lg  md:mb-4">Email</p>
        <span className="text-sm mx-4">engr.riaz2010@gmail.com</span>
      </div>
      <div className="md:w-1/4 mb-4 md:mb-0 flex flex-row md:flex-col mx-4 items-center">
        <p className="font-bold text-lg md:mb-0">Follow Me</p>
        <div className="flex justify-center items-center mx-4">
          <Link href={"https://www.linkedin.com/in/riaz-mehmood-258a8640/"}>
            <BsLinkedin size={24} />
          </Link>
          <Link href={'https://twitter.com/RiazMeh33261036'}>
            <BsTwitter size={24} style={{margin: '20px'}} />
          </Link>
          <Link href={'https://github.com/RiazMehmood'}>
            <BsGithub size={24}  />
          </Link>
        </div>
      </div>
      <div className="md:w-1/4 flex flex-row md:flex-col mx-4 items-center">
        <p className="flex items-center text-sm">
          <RiCopyrightLine />
          CopyRight 2023-24
        </p>
      </div>
    </div>
  );
}
