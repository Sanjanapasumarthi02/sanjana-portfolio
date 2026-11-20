import React, { useState } from 'react';
import { Layers, Search } from 'lucide-react';
import { TechIcon } from './TechIcons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'frontend', label: 'Frontend Technologies' },
    { id: 'databases', label: 'Databases' },
    { id: 'core_cs', label: 'Core Computer Science' },
    { id: 'tools', label: 'Developer Tools' },
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>CAPABILITIES & PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-white">
            My Technical <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            A comprehensive foundation in programming languages, modern web frameworks, scalable databases, and core computer science fundamentals.
          </p>
        </div>

        {/* Filter Tabs and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] border border-purple-400/30'
                      : 'bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Filter Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills..."
              className="w-full pl-9 pr-3.5 py-1.5 rounded-full bg-slate-900/70 border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-2xl glass-card p-5 border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(168,85,247,0.15)] flex flex-col justify-between space-y-4"
            >
              <div className="flex items-start justify-between">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-white/10 group-hover:scale-105 group-hover:border-purple-500/40 transition-transform shadow-inner">
                  <TechIcon name={skill.iconName} size={28} className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-400 border border-white/5">
                  {skill.tag}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-white text-base group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>{skill.categoryLabel}</span>
                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center pt-4">
          <p className="text-xs text-slate-400 font-mono">
            * All competencies backed by hands-on engineering projects, academic coursework, and verified practical coding problems.
          </p>
        </div>

      </div>
    </section>
  );
};
