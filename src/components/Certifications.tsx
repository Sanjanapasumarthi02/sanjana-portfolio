import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Cloud } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certification } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-300 text-xs font-mono tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-white">
            Credentials & <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Industry-recognized cloud and software certifications validating core technical competencies and best practices.
          </p>
        </div>

        {/* AWS Certified Cloud Practitioner Card */}
        <div className="relative group rounded-3xl glass-card p-6 sm:p-10 border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 shadow-[0_15px_40px_rgba(245,158,11,0.12)]">
          
          {/* Subtle Ambient Glow Behind Card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none -z-10 group-hover:bg-amber-500/15 transition-all" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: AWS Official Styled Badge Visual */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-amber-500/20 shadow-inner space-y-4">
              <div className="relative">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-transparent p-4 flex items-center justify-center border border-amber-500/30">
                  <TechIcon name="aws" size={72} className="w-16 h-16 sm:w-20 sm:h-20" />
                </div>
                <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-amber-500 text-slate-950 shadow-md">
                  <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono font-bold tracking-wider uppercase text-amber-400">
                  Amazon Web Services
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  Issued: <span className="text-white font-medium">{certification.issuedDate}</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500">
                  Credential ID: {certification.credentialIdPlaceholder}
                </div>
              </div>
            </div>

            {/* Right: Detailed Verified Knowledge Domains */}
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                  <Cloud className="w-3.5 h-3.5 text-amber-400" />
                  <span>{certification.badgeLabel}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                  {certification.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {certification.description}
                </p>
              </div>

              {/* Verified Domains Grid */}
              <div className="space-y-2.5 pt-1">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  Validated Knowledge Domains:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {certification.domains.map((domain, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{domain}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.45)]"
                >
                  <span>View Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-400 font-mono">
                  Verified via AWS Training & Certification
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
