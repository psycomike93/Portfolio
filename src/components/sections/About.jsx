import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vite",
    "TailwindCSS",
    "Bootstrap",
    "JQuery",
    "JavaScript",
  ];

  const backendSkills = ["Node.js", "Express.js", "PostgreSQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/0 border hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-8 text-3xl">
              Passionate developer with an emphasis on frontend. My goal is to ensure each web app I build
              is an honest representation of each client and what their business is all about.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl  mb-4 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-center"> Frontend</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500 text-white py-1 px-3 rounded-full text-sm hover:bg-red-500/20 
                                    hover:shadow-[0_2px_8px_rgba(159,30,46,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl  mb-4 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-center"> Backend</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-500 text-white py-1 px-3 rounded-full text-sm hover:bg-red-500/20 
                                    hover:shadow-[0_2px_8px_rgba(159,30,46,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/30 border hover:-translate-y-1 transition-all bg-orange-500/65">
              <h3 className="text-2xl  mb-4 text-center"> Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  Associate's of Applied Science in Drafting and Design Technology  -ITT Technical Institute
                  (2013-2015)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/30 border hover:-translate-y-1 transition-all bg-orange-500/65">
              <h3 className="text-2xl  mb-4 text-center"> Certifications</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  FullStack Web Developer - Udemy
                </li>
                <li>
                  Google IT - Coursera
                </li>
              </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};