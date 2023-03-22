import Link from "next/link";
import { BsFillArrowUpRightCircleFill, BsGithub } from "react-icons/bs";

export default function Projects() {
  return (
    <div className="min-h-screen mx-10 py-12">
      <h1 className="text-4xl font-sans border-b-2 mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Website Templates</h2>

          <div className="flex items-center mb-4">
            <BsGithub className="text-2xl mr-2" />
            <Link
              legacyBehavior
              href="https://github.com/RiazMehmood/Resume-Website"
            >
              <a className="text-lg font-semibold hover:underline">
                Resume
              </a>
            </Link>
            <div className="flex items-center ml-4">
              <Link legacyBehavior href="https://panaversedao.vercel.app/">
                <a className="text-lg font-semibold hover:underline">
                  www.myresume.com
                </a>
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <BsGithub className="text-2xl mr-2" />
            <Link
              legacyBehavior
              href="https://github.com/RiazMehmood/piaic-website"
            >
              <a className="text-lg font-semibold hover:underline">
                PIAIC
              </a>
            </Link>
            
            <div className="flex items-center ml-4">
              <Link legacyBehavior href="https://panaversedao.vercel.app/">
                <a className="text-lg font-semibold hover:underline">
                  www.panaversedao.com
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">TypeScript CLI Projects</h2>

          <div className="flex items-center mb-4">
            <BsGithub className="text-2xl mr-2" />
            <Link
              legacyBehavior
              href="https://github.com/RiazMehmood/Resume-Website"
            >
              <a className="text-lg font-semibold hover:underline">
                Resume Website
              </a>
            </Link>
          </div>

          <div className="flex items-center mb-4">
            <BsGithub className="text-2xl mr-2" />
            <Link
              legacyBehavior
              href="https://github.com/RiazMehmood/piaic-website"
            >
              <a className="text-lg font-semibold hover:underline">
                PIAIC Website
              </a>
            </Link>
          </div>

          <div className="flex items-center">
            <BsGithub className="text-2xl mr-2" />
            <Link
              legacyBehavior
              href="https://github.com/RiazMehmood/panaverse-website"
            >
              <a className="text-lg font-semibold hover:underline">
                Panaverse Website
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
