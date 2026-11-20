import React, { useState, useEffect } from 'react';
import { FileDown, Menu, X, Eye } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          isScrolled
            ? 'glass-nav shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10'
            : 'bg-slate-900/40 backdrop-blur-md border border-white/5'
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-1.5 text-base sm:text-lg font-bold tracking-tight text-white focus:outline-none"
        >
          <span className="font-mono text-cyan-400 font-normal">&lt;</span>
          <span className="tracking-widest font-heading font-extrabold group-hover:text-purple-300 transition-colors">
            SANJANA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7] inline-block animate-pulse" />
          <span className="font-mono text-cyan-400 font-normal">/&gt;</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-cyan-500/20 border border-purple-500/40 -z-10 shadow-[0_0_12px_rgba(168,85,247,0.25)]"
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action Buttons: Resume Download & Modal */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            title="Preview Resume Details"
            className="p-2 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors text-xs flex items-center gap-1.5 border border-white/10"
          >
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-medium">View</span>
          </button>

          <a
            href="/Sanjana_Pasumarthy_Resume.pdf"
            download="Sanjana_Pasumarthy_Resume.pdf"
            className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-cyan-600 text-white text-xs lg:text-sm font-medium transition-all duration-200 shadow-[0_0_15px_rgba(168,85,247,0.35)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <FileDown className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="/Sanjana_Pasumarthy_Resume.pdf"
            download="Sanjana_Pasumarthy_Resume.pdf"
            className="p-1.5 rounded-lg bg-purple-600/30 border border-purple-500/40 text-purple-200"
            title="Download Resume"
          >
            <FileDown className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-2 mx-auto max-w-sm rounded-2xl glass-nav p-4 border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="flex-1 py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-xs text-slate-200 font-medium flex items-center justify-center gap-1.5 border border-white/10"
            >
              <Eye className="w-3.5 h-3.5 text-cyan-400" />
              Preview CV
            </button>
            <a
              href="/Sanjana_Pasumarthy_Resume.pdf"
              download="Sanjana_Pasumarthy_Resume.pdf"
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-xs text-white font-medium flex items-center justify-center gap-1.5 shadow-md"
            >
              <FileDown className="w-3.5 h-3.5" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
