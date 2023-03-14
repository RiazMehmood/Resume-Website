import { BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { RiCopyrightLine } from "react-icons/ri";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="flex justify-between mx-10 py-8 border-t-[2px]">
      <div>
        <p className="font-bold text-lg">Number</p>
        <span>+92-307-2791683</span>
      </div>
      <div>
        <p className="font-bold text-lg">Email</p>
        <span>engr.riaz2010@gmail.com</span>
      </div>
      <div>
        <p className="font-bold text-lg">Follow Me</p>
        <span className="flex justify-evenly">
          <Link href={"https://www.linkedin.com/in/riaz-mehmood-258a8640/"}>
            <BsLinkedin />
          </Link>
          <Link href={'https://twitter.com/RiazMeh33261036'}>
          <BsTwitter />
          </Link>
          <Link href={'https://github.com/RiazMehmood'}>
          <BsGithub />
          </Link>
        </span>
      </div>
      <div>
        <p className="flex items-center">
          <RiCopyrightLine />
          CopyRight 2023-24
        </p>
      </div>
    </div>
  );
}
