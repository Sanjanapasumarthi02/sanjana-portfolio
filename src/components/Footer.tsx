import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#030712]/90 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Left: Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
          <div className="flex items-center gap-1.5 text-lg font-bold font-heading text-white">
            <span className="font-mono text-cyan-400 font-normal">&lt;</span>
            <span className="tracking-widest font-extrabold">{personal.shortName}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7] inline-block animate-pulse" />
            <span className="font-mono text-cyan-400 font-normal">/&gt;</span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Designed & Developed with passion by Sanjana.
          </p>
          <div className="text-[11px] font-mono text-slate-500">
            © {currentYear} Pasumarthy Sanjana · All Rights Reserved.
          </div>
        </div>

        {/* Center: Quick Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-400 font-medium">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="hover:text-purple-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Social Icons & Back to top button */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-purple-500/40 text-slate-400 hover:text-white transition-colors"
            >
              <TechIcon name="github" size={16} />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/40 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Direct Email"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            title="Back to Top"
            aria-label="Back to Top"
            className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-purple-400 hover:text-white border border-purple-500/30 hover:border-purple-400 transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
