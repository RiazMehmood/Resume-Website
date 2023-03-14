import { FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function Projects() {
  return (
    <div className="min-h-[70vh] mx-10">
      <p className="mt-18 text-4xl font-sans border-b-2">Projects</p>
      <div className="bg-gray-100 -my-9">
        <div className="grid grid-cols-[10rem,20rem,1fr,2rem] my-10 ">
        <div className="text-4xl underline font-semibold"></div>
          
          <div>
            <h1 className="text-4xl font-bold underline">Website Templates</h1>
          </div>
        </div>
        <div className="grid grid-cols-[18rem,9rem,1fr,2rem] ">
          <div className="text-4xl underline font-semibold my-10"></div>
          <div>
            <h1>Resume Website</h1>
          </div>
          <div>
            <h2>Github Url</h2>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-[18rem,9rem,1fr,2rem] my-10 ">
          <div className="text-4xl underline font-semibold my-10"></div>
          <div>
            <h1> Website Templates</h1>
          </div>
          <div>
            <h2>Project Name</h2>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-[18rem,9rem,1fr,2rem] my-10 ">
          <div className="text-4xl underline font-semibold my-10"></div>
          <div>
            <h1> Website Templates</h1>
          </div>
          <div>
            <h2>Project Name</h2>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
