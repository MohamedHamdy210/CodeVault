import React from "react";
import { Zap, Code2, ShieldCheck, Box } from "lucide-react";

export default function HeroSection() {
  const tags = [
    { name: "MERN Stack", icon: <Zap size={12} /> },
    { name: "Reusable Code", icon: <Code2 size={12} /> },
    { name: "Next.js 15 Ready", icon: <Box size={12} /> }, 
    { name: "Secure Vault", icon: <ShieldCheck size={12} /> },
  ];

  return (
    <section className="w-full relative pt-24 pb-20 px-4 md:px-8 flex flex-col items-center text-center overflow-hidden bg-[#0a0a0a]">
      {/* Full-Width Gradient Blurs */}
      <div className="absolute inset-0 -z-10 w-full overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] h-100 w-150 rounded-full bg-blue-600/10 blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[20%] right-[10%] h-75 w-125 rounded-full bg-indigo-600/5 blur-[100px] opacity-40"></div>
      </div>

      
      <div className="w-full max-w-5xl">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[1.1]">
          Your Personal <br />
          <span className="bg-linear-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
            Snippet Engine
          </span>
        </h1>
      </div>

      
      <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
        Stop rewriting the same boilerplate. Store your logic in a professional
        vault designed for speed, security, and the modern full-stack workflow.
      </p>

      
      <div className="w-full mt-12 flex flex-wrap justify-center gap-4">
        {tags.map((tag) => (
          <div
            key={tag.name}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#161616] border border-gray-800 rounded-xl hover:border-blue-500/40 hover:bg-[#1c1c1c] transition-all duration-300 group shadow-lg"
          >
            <span className="text-blue-500 group-hover:scale-110 transition-transform duration-300">
              {tag.icon}
            </span>
            <span className="text-[11px] font-bold text-gray-300 tracking-widest uppercase">
              {tag.name}
            </span>
          </div>
        ))}
      </div>

      
    </section>
  );
}
