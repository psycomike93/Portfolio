import { RevealOnScroll } from "../RevealOnScroll";



export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4  " >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Mike Means
          </h1>

          <p className="border border-white/40 tex-gray-400 text-lg mb-8 max-w-lg mx-auto bg-orange-500/85 rounded">
            I’m a full-stack developer with a focus on putting personality into web applications.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="border border-white/40 text-white bg-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 30, 46, 0.2)] hover:bg-orange-500/65"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white/40 text-white bg-orange-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 30, 46, 0.2)] hover:bg-orange-500/65"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};