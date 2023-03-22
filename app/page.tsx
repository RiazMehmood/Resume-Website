export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[70vh]">
      <div className="rounded-full w-80 h-70 overflow-hidden flex-shrink-0 md:mr-8">
        <img
          src="/image.jfif"
          alt="mypic"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="text-center md:text-left">
        <div>
          <h1 className="font-bold text-4xl md:text-7xl mb-4 md:mb-8">Hello</h1>
          <p className="font-light text-xl md:text-3xl tracking-wide mb-4 md:mb-8">A Bit About Me</p>
          <span className="w-full md:w-96 flex text-justify items-center justify-center">
            I specialize in building high-performance web applications using
            cutting-edge technologies such as Next.js, Tailwind CSS, and
            TypeScript. With Next.js, I have expertise in building
            server-rendered React applications that provide fast and responsive
            user experiences. I also have experience in using Tailwind CSS, a
            utility-first CSS framework, to create custom and responsive user
            interfaces. Additionally, my proficiency in TypeScript enables me to
            write safer and more maintainable code by providing static typing
            and other advanced features.
          </span>
        </div>
      </div>
    </div>
  );
}
