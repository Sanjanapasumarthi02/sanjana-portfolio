import React, { useEffect } from 'react';
import { X, FileDown, GraduationCap, Award, BookOpen, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, education, certification, projects } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-slate-900 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/70">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="text-xs sm:text-sm font-mono font-bold text-white uppercase tracking-wider">
              Official Resume Preview · Pasumarthy Sanjana
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Sanjana_Pasumarthy_Resume.pdf"
              download="Sanjana_Pasumarthy_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-medium shadow-md transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content (ATS-Format Document Replica) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-200">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
              PASUMARTHY SANJANA
            </h2>
            <p className="text-xs sm:text-sm text-cyan-300 font-mono">
              Computer Science and Engineering Undergraduate · Aspiring Software Developer & AI Enthusiast
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                {personal.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personal.location}
              </span>
              <span>GitHub: github.com/Sanjanapasumarthi02</span>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase font-bold text-purple-300 tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              EDUCATION
            </h3>
            <div className="space-y-4 text-xs sm:text-sm">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-wrap justify-between font-semibold text-white">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-purple-300">{edu.period}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-amber-300 font-bold">{edu.scoreLabel}: {edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase font-bold text-amber-300 tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              CERTIFICATIONS
            </h3>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex justify-between font-semibold text-white">
                <span>{certification.title}</span>
                <span className="font-mono text-amber-300">{certification.issuedDate}</span>
              </div>
              <p className="text-slate-400">
                {certification.issuer} — Validating core cloud architecture, security, networking, and cost optimization.
              </p>
            </div>
          </div>

          {/* Technical Arsenal */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono uppercase font-bold text-cyan-300 tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              TECHNICAL SKILLS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <span className="font-mono font-bold text-purple-300 block">Programming Languages:</span>
                <span className="text-slate-300">Python, SQL, Java, C</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <span className="font-mono font-bold text-cyan-300 block">Frontend Technologies:</span>
                <span className="text-slate-300">HTML, CSS, JavaScript, React.js</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <span className="font-mono font-bold text-emerald-300 block">Databases:</span>
                <span className="text-slate-300">MySQL, MongoDB</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 space-y-1">
                <span className="font-mono font-bold text-amber-300 block">Core CS & Tools:</span>
                <span className="text-slate-300">DSA, DBMS, OOP, OS, Git, GitHub, Linux</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase font-bold text-purple-300 tracking-wider">
              FEATURED PROJECTS
            </h3>
            <div className="space-y-5 text-xs sm:text-sm">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-2 p-4 rounded-2xl bg-slate-950/50 border border-white/5">
                  <div className="flex flex-wrap justify-between font-bold text-white">
                    <span>{proj.title}</span>
                    <span className="font-mono text-cyan-300 text-xs">{proj.category}</span>
                  </div>
                  <p className="text-slate-300 text-xs">
                    {proj.description}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-400">
                    {proj.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <span className="text-purple-400">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-slate-400 pt-1">
                    <strong className="text-white">Stack:</strong> {proj.techStack.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coding Practice */}
          <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
            <span className="font-mono font-bold text-slate-300 block">Problem Solving Profiles:</span>
            <p className="text-slate-400">
              Active problem solver on LeetCode (Data Structures & Algorithmic efficiency), HackerRank (Python & SQL assessments), and GitHub (Open source version-controlled architectures).
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
