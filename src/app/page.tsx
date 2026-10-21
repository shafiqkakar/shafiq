"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const skills = ["MS Excel", "Communication", "HTML", "Next.js", "Canva", "Python", "Tailwind CSS", "TypeScript", "MySQL", "Git & GitHub"];

  const projects = [
    {
      title: "shaiq",
      description: "A modern web application project showcasing modern web development techniques and interactive user interfaces.",
      tag: "Next.js & Web Dev",
      icon: "🚀",
      github: "https://github.com/shafiqkakar/project01",
      demo: "#"
    },
    {
      title: "Student Management System",
      description: "A relational database project developed using MySQL Workbench for tracking student enrollment, fee records, and quota details.",
      tag: "MySQL & Database",
      icon: "📊",
      github: "#",
      demo: "#"
    },
    {
      title: "The Smart Choice Hub",
      description: "A multi-niche web portal featuring optimized content, SEO configurations, and Google Search Console integration.",
      tag: "Web & SEO",
      icon: "🌐",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-blue-500 selection:text-white relative overflow-hidden">
      {/* Background Glowing Ambient Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-[#030712]/70 backdrop-blur-xl border-b border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-extrabold tracking-tight text-white hover:text-blue-400 transition-colors flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm">MS</span>
            MSK<span className="text-blue-500">.</span>
          </a>
          <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors hidden sm:inline-block">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors hidden sm:inline-block">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            <a 
              href="https://github.com/shafiqkakar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-slate-200 hover:border-blue-500 hover:text-blue-400 transition-all"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 py-12 relative z-10">
        {/* Hero Section */}
        <section className="min-h-[75vh] flex flex-col justify-center items-start space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Available for opportunities
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Muhammad Shafiq Khan
          </h1>
          <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed">
            BS IT Student at <span className="text-slate-200 font-medium">University of Sargodha</span>, passionate about modern web development and AI.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 hover:scale-105 active:scale-95"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-900/80 text-slate-200 border border-slate-800 font-medium hover:bg-slate-800 hover:border-slate-700 transition-all backdrop-blur-xl hover:scale-105 active:scale-95"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">About Me</h2>
          </div>
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-4 text-slate-300 leading-relaxed">
            <p className="text-lg">
              I am an Information Technology student pursuing my degree at the <span className="text-blue-400 font-semibold">University of Sargodha</span>. I specialize in building responsive web applications and exploring modern software engineering principles.
            </p>
            <p className="text-slate-400">
              My core focus is on learning advanced web technologies like Next.js, React, TypeScript, and Python, while combining analytical problem-solving with creative design to build impactful digital solutions.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Skills & Tools</h2>
          </div>
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-blue-300 text-sm font-medium hover:border-blue-500 hover:text-white hover:bg-blue-500/10 transition-all shadow-sm hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-2xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-6 p-4 bg-slate-800/50 rounded-2xl w-fit border border-slate-700/50 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-colors">
                    {proj.icon}
                  </div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                    {proj.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60 text-xs">
                  <a href={proj.github} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1 font-medium">
                    <span>Code</span> ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Contact Me</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Let us Build Something Together</h3>
                <p className="text-slate-400">
                  Feel free to reach out for collaborations, project opportunities, or professional queries!
                </p>
              </div>
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 text-slate-300">
                  <span className="p-3.5 bg-slate-800/60 rounded-2xl border border-slate-700/60 text-lg">📧</span>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Email Address</p>
                    <a href="mailto:shafiqkhn@966gmail.com" className="hover:text-blue-400 transition-colors text-sm sm:text-base font-medium">
                      shafiqkhn@966gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <span className="p-3.5 bg-slate-800/60 rounded-2xl border border-slate-700/60 text-lg">📍</span>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Location</p>
                    <p className="text-sm sm:text-base font-medium text-slate-200">Sargodha, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl shadow-2xl space-y-4">
              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Muhammad Shafiq"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="shafiqkhn@966gmail.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/25 active:scale-98 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 mt-32 py-8 bg-[#030712]/80 backdrop-blur-xl relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Muhammad Shafiq Khan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}