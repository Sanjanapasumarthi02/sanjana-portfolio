import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/40 text-violet-300 text-xs font-mono tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-white">
            My Academic <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
            A continuous trajectory of academic dedication, analytical rigor, and computer science foundations.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-purple-500/20 space-y-12 ml-2 sm:ml-4">
          
          {education.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Luminous Node on the timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center group-hover:border-cyan-400 group-hover:scale-110 transition-all shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                <span className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-cyan-300 transition-colors" />
              </div>

              {/* Education Card */}
              <div className="rounded-2xl glass-card p-6 sm:p-7 border border-white/10 group-hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(168,85,247,0.12)] space-y-4">
                
                {/* Degree & Period Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                      {item.degree}
                    </h3>
                    <div className="text-sm font-medium text-slate-300 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  {/* Year badge & Score */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 shrink-0">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                      <Award className="w-3 h-3 text-amber-400" />
                      {item.scoreLabel}: {item.score}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
