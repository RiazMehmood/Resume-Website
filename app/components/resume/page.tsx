import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiChakraui, SiTypescript } from "react-icons/si";

export default function Resume() {
  return (
    <div className="min-h-screen mx-auto px-6 md:px-12">
      <p className="mt-18 text-4xl font-sans border-b-2">Resume</p>
      <div className="bg-gray-100 -my-9">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10">
          <div className="text-3xl font-semibold my-10 md:col-span-1">
            Education
          </div>
          <div className="md:col-span-1">
            <ul>
              <li className="my-10">2000-2001</li>
              <li className="my-10">2002-2004</li>
              <li className="my-10">2005-2009</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <ul className="text-xl font-bold font-mono">
              <li className="my-10 flex">
                Matriculation<p className="mx-5 font-medium text-xl">Science</p>
              </li>
              <li className="my-10 flex">
                Intermediate
                <p className="mx-5 font-medium text-xl">Pre-Engineering</p>
              </li>
              <li className="my-10 flex">
                Graduate
                <p className="mx-5 font-medium text-xl">B.E Electrical</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
          <div className="text-3xl font-semibold my-10 md:col-span-1">Skills</div>
          <div className="md:col-span-1">
            <ul className="text-xl font-bold font-mono">
              <li className="my-10 flex">
                HTML <FaHtml5 />, JavaScript <IoLogoJavascript />, CSS
                <FaCss3 />
              </li>
              <li className="my-10 flex">
                ReactJs
                <FaReact />
              </li>
              <li className="my-10 flex">
                NextJs
                <TbBrandNextjs />
              </li>
              <li className="my-10 flex">
                TailwindCSS
                <TbBrandTailwind />
              </li>
              <li className="my-10 flex">
                ChakraUI
                <SiChakraui />
              </li>
              <li className="my-10 flex">
                TypeScript
                <SiTypescript />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
