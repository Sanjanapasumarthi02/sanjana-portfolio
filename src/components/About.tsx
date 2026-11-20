import React, { useEffect, useState, useRef } from 'react';
import { Award, BookOpen, Code2, Sparkles, Brain, Database, ShieldCheck, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [cgpaCounter, setCgpaCounter] = useState(0);
  const [projectCounter, setProjectCounter] = useState(0);

  // Trigger animated counters when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate CGPA to 8.09
          let startCgpa = 0;
          const targetCgpa = 8.09;
          const duration = 1400;
          const interval = 25;
          const steps = duration / interval;
          const increment = targetCgpa / steps;

          const cgpaTimer = setInterval(() => {
            startCgpa += increment;
            if (startCgpa >= targetCgpa) {
              setCgpaCounter(targetCgpa);
              clearInterval(cgpaTimer);
            } else {
              setCgpaCounter(parseFloat(startCgpa.toFixed(2)));
            }
          }, interval);

          // Animate project counter to 2
          let startProj = 0;
          const projTimer = setInterval(() => {
            startProj += 1;
            if (startProj >= 2) {
              setProjectCounter(2);
              clearInterval(projTimer);
            } else {
              setProjectCounter(startProj);
            }
          }, 400);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const pillars = [
    {
      icon: Brain,
      title: "AI & Intelligent Systems",
      desc: "Integrating state-of-the-art LLMs (Gemini API) and ML recommendation engines to solve complex challenges.",
      color: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: Code2,
      title: "Robust Full-Stack Engineering",
      desc: "Building maintainable, responsive web applications using React.js, TypeScript, Python, and serverless backends.",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400"
    },
    {
      icon: Database,
      title: "Data Analytics & Management",
      desc: "Architecting structured schemas in MySQL & MongoDB, and extracting actionable insights with Pandas.",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      icon: ShieldCheck,
      title: "Security & Cloud Reliability",
      desc: "Certified AWS Cloud Practitioner applying secure API keys handling and defensive threat modeling.",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>ABOUT PASUMARTHY SANJANA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-white">
            Beyond the <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Code.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            A relentless curiosity for software architecture, artificial intelligence, and engineering high-impact digital solutions.
          </p>
        </div>

        {/* Narrative & Statistics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Authentic Bio Narrative */}
          <div className="lg:col-span-7 rounded-2xl glass-card p-6 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I'm currently pursuing my <strong className="text-white font-semibold">Bachelor of Technology in Computer Science and Engineering</strong> at <span className="text-purple-300 font-medium">Koneru Lakshmaiah Education Foundation (KL University)</span>.
              </p>
              <p>
                I have strong foundations in <strong className="text-white font-semibold">Python, SQL, Data Structures and Algorithms, Object-Oriented Programming</strong>, and database management systems.
              </p>
              <p>
                I have hands-on experience building <strong className="text-cyan-300 font-semibold">AI-powered applications</strong>, machine learning-based recommendation systems, and interactive data analytics solutions.
              </p>
              <p>
                I'm always excited to learn new technologies, solve challenging problems, and turn innovative ideas into useful, production-ready applications.
              </p>
            </div>

            {/* University & Degree Badge */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-purple-400" />
                <span>KL University · Vijayawada, India</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Undergraduate (2023–2027)</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Real Statistics Cards with Animated Counters */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            
            {/* Stat 1: 8.09 CGPA */}
            <div className="rounded-2xl glass-card p-5 border border-white/10 flex flex-col justify-center items-center text-center group hover:border-purple-500/40 transition-all">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 mb-2">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                {hasAnimated ? cgpaCounter.toFixed(2) : "8.09"}
              </div>
              <div className="text-xs font-semibold text-purple-300 mt-1 uppercase tracking-wider font-mono">
                8.09 CGPA
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                KL University B.Tech
              </div>
            </div>

            {/* Stat 2: 2 Featured Projects */}
            <div className="rounded-2xl glass-card p-5 border border-white/10 flex flex-col justify-center items-center text-center group hover:border-cyan-500/40 transition-all">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 mb-2">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                {hasAnimated ? projectCounter : "2"}
              </div>
              <div className="text-xs font-semibold text-cyan-300 mt-1 uppercase tracking-wider font-mono">
                Featured Projects
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                AI Threat & Scheme ML
              </div>
            </div>

            {/* Stat 3: AWS Certified */}
            <div className="rounded-2xl glass-card p-5 border border-white/10 flex flex-col justify-center items-center text-center group hover:border-amber-500/40 transition-all">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight leading-tight">
                AWS
              </div>
              <div className="text-xs font-semibold text-amber-300 mt-1 uppercase tracking-wider font-mono">
                Cloud Practitioner
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Issued: May 2025
              </div>
            </div>

            {/* Stat 4: 2023-2027 Academic Journey */}
            <div className="rounded-2xl glass-card p-5 border border-white/10 flex flex-col justify-center items-center text-center group hover:border-violet-500/40 transition-all">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 mb-2">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
                2023–2027
              </div>
              <div className="text-xs font-semibold text-violet-300 mt-1 uppercase tracking-wider font-mono">
                Academic Journey
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Computer Science Eng.
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Engineering Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-5 glass-card border ${pillar.borderColor} hover:-translate-y-1 transition-all duration-300 space-y-3`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center ${pillar.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-base">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
