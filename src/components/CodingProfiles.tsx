import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CodingProfiles: React.FC = () => {
  const { codingProfiles } = PORTFOLIO_DATA;

  return (
    <section id="coding-profiles" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-xs font-mono tracking-wider uppercase">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>CONTINUOUS PRACTICE & MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-white">
            Problem Solving & <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Coding.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            I regularly practice programming problems to strengthen my logical thinking, algorithmic skills, and coding efficiency.
          </p>
        </div>

        {/* 3 Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {codingProfiles.map((profile, index) => (
            <div
              key={index}
              className="group rounded-3xl glass-card p-6 sm:p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Top Icon & Platform Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-white/10 group-hover:scale-105 transition-transform shadow-md">
                    <TechIcon name={profile.iconType} size={32} className="w-8 h-8" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/5">
                    {profile.role}
                  </span>
                </div>

                {/* Platform Name & Focus */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                    {profile.platform}
                  </h3>
                  <div className="text-xs text-purple-400 font-mono">
                    {profile.platform === 'LeetCode' && 'Data Structures & Algorithms'}
                    {profile.platform === 'HackerRank' && 'Python & SQL Problem Solving'}
                    {profile.platform === 'GitHub' && 'Repositories & Version Control'}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {profile.description}
                </p>
              </div>

              {/* Action Button (Placeholder link with clear tag) */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs sm:text-sm font-medium border border-white/10 hover:border-purple-500/40 transition-all group-hover:shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                >
                  <span>Visit {profile.platform} Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
