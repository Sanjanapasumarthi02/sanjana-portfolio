import React, { useState, useEffect } from 'react';
import {
  FileDown,
  ArrowRight,
  Terminal,
  Cpu,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Copy
} from 'lucide-react';
import { TechIcon } from './TechIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const { personal } = PORTFOLIO_DATA;

  // Animated typewriter headline rotation
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const fullText = personal.animatedHeadlines[headlineIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setHeadlineIndex((prev) => (prev + 1) % personal.animatedHeadlines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, headlineIndex, personal.animatedHeadlines]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Top greeting pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3" />
            <span className="font-mono text-xs tracking-wider uppercase font-semibold text-purple-300">
              HELLO, WORLD! I'M
            </span>
          </div>

          {/* Main Name Heading */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading leading-[1.08]">
              <span className="block text-white drop-shadow-[0_2px_15px_rgba(255,255,255,0.1)]">
                PASUMARTHY
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">
                SANJANA
              </span>
            </h1>
          </div>

          {/* Animated Headline */}
          <div className="h-9 sm:h-11 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400 shrink-0" />
            <span className="font-mono text-lg sm:text-2xl font-medium text-slate-200">
              {currentText}
              <span className="inline-block w-2.5 h-6 bg-cyan-400 ml-1 translate-y-1 animate-pulse" />
            </span>
          </div>

          {/* Main Tagline */}
          <blockquote className="border-l-2 border-purple-500/50 pl-4 py-1">
            <p className="text-lg sm:text-xl font-medium text-purple-200 italic font-heading">
              "{personal.tagline}"
            </p>
          </blockquote>

          {/* Introduction Paragraph */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
            {personal.intro}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:via-indigo-500 hover:to-cyan-400 text-white font-medium text-sm transition-all duration-300 shadow-[0_4px_25px_rgba(168,85,247,0.35)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.45)] hover:-translate-y-0.5"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/Sanjana_Pasumarthy_Resume.pdf"
              download="Sanjana_Pasumarthy_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-white/10 hover:border-purple-500/40 transition-all duration-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onOpenResumeModal}
              title="Preview CV online"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white text-sm font-medium border border-white/5 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Quick View</span>
            </button>
          </div>

          {/* Social Profiles & Direct Email */}
          <div className="pt-3 flex flex-wrap items-center gap-4 text-slate-400 text-xs sm:text-sm">
            <span className="font-mono text-slate-500">Connect:</span>

            {/* LinkedIn */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-all"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-purple-300 transition-all"
            >
              <TechIcon name="github" size={14} className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {/* Email with copy tooltip */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-all"
              title="Click to copy email"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Futuristic Developer 3D / Holographic Terminal Visual */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Cybernetic Radial Rings */}
          <div className="absolute w-[360px] h-[360px] sm:w-[420px] h-[420px] rounded-full border border-purple-500/20 -z-0 animate-[spin_35s_linear_infinite]" />
          <div className="absolute w-[300px] h-[300px] sm:w-[350px] h-[350px] rounded-full border border-dashed border-cyan-500/20 -z-0 animate-[spin_25s_linear_infinite_reverse]" />
          <div className="absolute w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-purple-600/10 via-transparent to-cyan-500/10 blur-xl" />

          {/* Floating Floating Code Badge 1: Engineer Status */}
          <div className="absolute -top-4 -left-2 sm:-left-6 z-20 animate-float" style={{ animationDelay: '0s' }}>
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-purple-500/30 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex items-center gap-2.5 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-slate-400">status:</span>
              <span className="text-purple-300 font-semibold">'Building AI Apps'</span>
            </div>
          </div>

          {/* Floating Badge 2: AWS Certified */}
          <div className="absolute -bottom-3 -right-2 sm:-right-4 z-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="px-3.5 py-2 rounded-xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex items-center gap-2 text-xs font-medium">
              <TechIcon name="aws" size={16} className="w-4 h-4 shrink-0" />
              <span className="text-amber-300">AWS Cloud Practitioner</span>
            </div>
          </div>

          {/* Main Futuristic Glass Card Terminal */}
          <div className="relative w-full max-w-md rounded-2xl glass-card border border-white/10 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl z-10 space-y-4">
            
            {/* Window Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs font-mono text-slate-400 ml-2">sanjana@developer:~</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-950/60 border border-purple-800/40 text-[10px] font-mono text-purple-300">
                <Cpu className="w-3 h-3 text-cyan-400" />
                <span>AI_ACTIVE</span>
              </div>
            </div>

            {/* Interactive Code Stream Block */}
            <div className="font-mono text-xs leading-relaxed space-y-2 text-slate-300">
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-300">developer</span> = {'{'}
              </div>
              <div className="pl-4 space-y-1">
                <div>
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-emerald-300">"Pasumarthy Sanjana"</span>,
                </div>
                <div>
                  <span className="text-slate-400">degree:</span>{' '}
                  <span className="text-emerald-300">"B.Tech CSE @ KL University"</span>,
                </div>
                <div>
                  <span className="text-slate-400">cgpa:</span>{' '}
                  <span className="text-amber-300 font-bold">8.09</span>,
                </div>
                <div>
                  <span className="text-slate-400">focusAreas:</span> [
                  <span className="text-purple-300">"AI"</span>,{' '}
                  <span className="text-purple-300">"FullStack"</span>,{' '}
                  <span className="text-cyan-300">"DataAnalytics"</span>],
                </div>
                <div>
                  <span className="text-slate-400">featuredProjects:</span> [
                  <span className="text-cyan-200">"AegisAI"</span>,{' '}
                  <span className="text-cyan-200">"SchemeNavigator"</span>],
                </div>
                <div>
                  <span className="text-slate-400">cloudCert:</span>{' '}
                  <span className="text-amber-300">"AWS Certified"</span>
                </div>
              </div>
              <div>{'};'}</div>
              
              <div className="pt-2 text-slate-400 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-cyan-400">
                  &gt; developer.buildSolutions();
                </span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Ready to deploy
                </span>
              </div>
            </div>

            {/* Quick Tech Badge Strip */}
            <div className="pt-2 flex items-center justify-between border-t border-white/5">
              <span className="text-[11px] font-mono text-slate-400">Tech Stack:</span>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-slate-800/80 border border-white/5" title="Python">
                  <TechIcon name="python" size={16} />
                </div>
                <div className="p-1.5 rounded-lg bg-slate-800/80 border border-white/5" title="React.js">
                  <TechIcon name="react" size={16} />
                </div>
                <div className="p-1.5 rounded-lg bg-slate-800/80 border border-white/5" title="SQL">
                  <TechIcon name="sql" size={16} />
                </div>
                <div className="p-1.5 rounded-lg bg-slate-800/80 border border-white/5" title="Git">
                  <TechIcon name="git" size={16} />
                </div>
                <div className="p-1.5 rounded-lg bg-slate-800/80 border border-white/5" title="Linux">
                  <TechIcon name="linux" size={16} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
        <a href="#about" className="flex flex-col items-center gap-1 focus:outline-none">
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
            Scroll Down
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </a>
      </div>
    </section>
  );
};
