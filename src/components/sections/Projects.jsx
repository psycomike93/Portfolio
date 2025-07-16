import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-red-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/40 bg-orange-500/75 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_2px_8px_rgba(159,30,46,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> </h3>
              <p className="text-gray-400 mb-4">
                
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-orange-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-orange-500/20 
                                    hover:shadow-[0_2px_8px_rgba(159,30,46,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-white hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 bg-orange-500/75
              hover:-translate-y-1 hover:border-orange-500/30
              hover:shadow-[0_4px_20px_rgba(159,30,46,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"></h3>
              <p className="text-gray-400 mb-4">
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-orange-500/10 text-orange-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-orange-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(159,30,46,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-white hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 bg-orange-500/75
              hover:-translate-y-1 hover:border-orange-500/30
              hover:shadow-[0_4px_20px_rgba(159,30,46,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"></h3>
              <p className="text-gray-400 mb-4">
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-orange-500/10 text-orange-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-orange-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(159,30,46,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-white hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 bg-orange-500/75
              hover:-translate-y-1 hover:border-orange-500/30
              hover:shadow-[0_4px_20px_rgba(159,30,46,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"></h3>
              <p className="text-gray-400 mb-4">
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-orange-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-orange-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(159,30,46,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-white hover:text-orange-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};