import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  Terminal,
  Briefcase,
} from "lucide-react";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "AI-Powered Analytics Platform",
      desc: "Real-time data visualization with machine learning insights",
      tags: ["React", "Python", "TensorFlow", "AWS"],
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "Distributed Task Scheduler",
      desc: "High-performance job queue system handling 1M+ tasks/day",
      tags: ["Go", "Redis", "Docker", "Kubernetes"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "E-Commerce Microservices",
      desc: "Scalable payment processing and inventory management",
      tags: ["Node.js", "PostgreSQL", "GraphQL", "Stripe"],
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Real-Time Collaboration Tool",
      desc: "WebSocket-based collaborative editing platform",
      tags: ["TypeScript", "WebSockets", "MongoDB", "Next.js"],
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const skills = [
    { name: "JavaScript/TypeScript", level: 95, color: "bg-yellow-400" },
    { name: "React & Next.js", level: 90, color: "bg-cyan-400" },
    { name: "Python & FastAPI", level: 85, color: "bg-green-400" },
    { name: "Cloud & DevOps", level: 80, color: "bg-purple-400" },
    { name: "System Design", level: 88, color: "bg-pink-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-violet-500/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePos.x - 192}px`,
            top: `${mousePos.y - 192}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 px-8 py-4 shadow-2xl">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Okeowo Oluwadarasimi David
              </div>
              <div className="flex gap-8 items-center">
                <a href="#work" className="hover:text-violet-400 transition-colors duration-300">
                  Work
                </a>
                <a href="#skills" className="hover:text-cyan-400 transition-colors duration-300">
                  Skills
                </a>
                <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">
                  Contact
                </a>
                <button className="px-6 py-2 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105">
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className={`max-w-6xl w-full transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-violet-400 animate-pulse" size={24} />
            <span className="text-violet-400 font-mono text-sm tracking-wider">
              AVAILABLE FOR WORK
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
              Building the Future,
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              One Line at a Time
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed">
            Full-stack software engineer specializing in scalable architectures,
            cloud infrastructure, and creating exceptional digital experiences.
          </p>

          <div className="flex gap-6 items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3">
              View My Work
              <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="flex gap-4">
              <a href="https://github.com/darasimiOk" className="p-4 backdrop-blur-xl bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-violet-400/50 transition-all duration-300 hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/okeowodarasimi/" className="p-4 backdrop-blur-xl bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-4 backdrop-blur-xl bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 font-mono text-sm hidden lg:block">
            <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10">
              <Terminal className="mb-2 text-violet-400" size={20} />
              <pre className="text-green-400">
{`const engineer = {
  code: ['JS', 'Python', 'Go'],
  stack: ['React', 'Node', 'AWS'],
  passion: 'Building Products'
};`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Briefcase className="text-cyan-400" size={32} />
            <h2 className="text-5xl font-bold">Featured Work</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Code2 className={`text-transparent bg-gradient-to-br ${project.gradient} bg-clip-text`} size={32} />
                    <ExternalLink className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:text-violet-400" size={24} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm border border-white/20 hover:border-violet-400/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Sparkles className="text-purple-400" size={32} />
            <h2 className="text-5xl font-bold">Technical Expertise</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {skills.map((skill, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between mb-3">
                    <span className="text-lg font-semibold group-hover:text-violet-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: isLoaded ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-3xl border border-white/10 p-12 hover:scale-105 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                What I Bring to the Table
              </h3>
              <ul className="space-y-4 text-slate-300 leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1">▹</span>
                  <span>
                    5+ years building production-grade applications serving
                    millions of users
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▹</span>
                  <span>
                    Deep expertise in cloud architecture, microservices, and
                    distributed systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▹</span>
                  <span>
                    Passionate about clean code, testing, and continuous
                    improvement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">▹</span>
                  <span>
                    Strong communicator with experience leading technical teams
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-3xl border border-white/10 p-16 hover:scale-105 transition-all duration-500 shadow-2xl">
            <h2 className="text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              I'll get back to you!
            </p>
            <button className="group px-12 py-5 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-semibold text-xl hover:shadow-2xl hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
              Get In Touch
              <Mail size={24} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-slate-400">
            © 2024 Your Name. Crafted with precision and passion.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-violet-400 transition-colors duration-300">
              GitHub
            </a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              LinkedIn
            </a>
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;