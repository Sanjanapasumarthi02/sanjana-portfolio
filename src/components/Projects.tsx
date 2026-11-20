import React, { useState } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  TrendingUp,
  BarChart3,
  CheckCircle,
  Cpu,
  Compass,
  Server
} from 'lucide-react';
import { TechIcon } from './TechIcons';

export const Projects: React.FC = () => {
  const [activeProjectTab, setActiveProjectTab] = useState<'aegis' | 'schemes'>('aegis');

  // --- AEGIS AI STATE & SIMULATION ---
  const aegisPresets = [
    {
      id: 'high-risk',
      name: 'Phishing Email (Spoofed PayPal)',
      input: 'URGENT: Your PayPal account has been restricted due to unauthorized login attempts. Verify immediately at http://paypa1-security-auth.net/verify to avoid permanent suspension within 24 hours.',
      riskLevel: 'HIGH RISK',
      score: 94,
      riskColor: 'text-rose-400 bg-rose-500/10 border-rose-500/40',
      progressColor: 'bg-rose-500',
      redFlags: [
        'Domain Spoofing: Lookalike domain (paypa1 instead of paypal.com)',
        'Psychological Pressure: 24-hour urgency deadline',
        'Suspicious credential harvesting redirection form'
      ],
      recommendations: [
        'Do not click the link or supply login credentials.',
        'Flag email as spam and report to security compliance.',
        'Check account status only via the official verified app.'
      ]
    },
    {
      id: 'med-risk',
      name: 'Suspicious SMS Shortlink',
      input: 'Dear customer, your bank package delivery is pending due to unpaid fee ₹45. Update details now: https://bit.ly/3xXyZ9Q-express',
      riskLevel: 'MEDIUM RISK',
      score: 64,
      riskColor: 'text-amber-400 bg-amber-500/10 border-amber-500/40',
      progressColor: 'bg-amber-500',
      redFlags: [
        'Unverified Generic URL Shortener hiding destination',
        'Unsolicited payment request disguised as postal fee',
        'Unknown sender number without verified header'
      ],
      recommendations: [
        'Expand shortened URL using safe link previewers.',
        'Verify with your registered logistics vendor directly.'
      ]
    },
    {
      id: 'low-risk',
      name: 'Safe GitHub Security Digest',
      input: 'GitHub security digest: 0 vulnerabilities found in repository sanjana-portfolio. All dependabot alerts resolved for main branch.',
      riskLevel: 'LOW RISK (SAFE)',
      score: 4,
      riskColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/40',
      progressColor: 'bg-emerald-500',
      redFlags: [
        'No malicious redirection found',
        'Sender domain matches official github.com headers',
        'Standard non-urgent informational digest'
      ],
      recommendations: [
        'Safe to proceed with regular repository workflows.'
      ]
    }
  ];

  const [selectedAegisPreset, setSelectedAegisPreset] = useState(aegisPresets[0]);

  const runAegisScan = (preset: typeof aegisPresets[0]) => {
    setSelectedAegisPreset(preset);
  };

  // --- GOVERNMENT SCHEME NAVIGATOR STATE ---
  const [schemeOccupation, setSchemeOccupation] = useState<'Student' | 'Farmer' | 'Entrepreneur' | 'Senior Citizen'>('Student');
  const [schemeState, setSchemeState] = useState<'Andhra Pradesh' | 'Central'>('Andhra Pradesh');

  // Dynamic recommendation logic based on selected profile
  const getSchemeResults = () => {
    if (schemeOccupation === 'Student') {
      return {
        matchScore: '96.8%',
        topSchemes: [
          {
            name: schemeState === 'Andhra Pradesh' ? 'Jagananna Vidya Deevena' : 'Central Sector Scholarship Scheme',
            category: 'Higher Education Tuition',
            benefit: schemeState === 'Andhra Pradesh' ? '100% Full Fee Reimbursement' : '₹20,000 / year financial stipend',
            cosineScore: 0.968
          },
          {
            name: schemeState === 'Andhra Pradesh' ? 'Jagananna Vasathi Deevena' : 'PM Uchchatar Shiksha Protsahan',
            category: 'Hostel & Food Subsidy',
            benefit: '₹20,000 / year accommodation support',
            cosineScore: 0.942
          },
          {
            name: 'National Means Merit Scholarship',
            category: 'Merit-Based Academic Grant',
            benefit: '₹12,000 / year merit grant',
            cosineScore: 0.895
          }
        ],
        sectorPercentages: [
          { name: 'Higher Education', pct: 68, color: 'bg-purple-500' },
          { name: 'Skill Dev & IT', pct: 20, color: 'bg-cyan-500' },
          { name: 'Research Grants', pct: 12, color: 'bg-indigo-500' }
        ]
      };
    } else if (schemeOccupation === 'Farmer') {
      return {
        matchScore: '97.4%',
        topSchemes: [
          {
            name: schemeState === 'Andhra Pradesh' ? 'YSR Rythu Bharosa - PM Kisan' : 'PM Kisan Samman Nidhi',
            category: 'Agricultural Input Subsidy',
            benefit: schemeState === 'Andhra Pradesh' ? '₹13,500 / year directly to bank' : '₹6,000 / year direct cash transfer',
            cosineScore: 0.974
          },
          {
            name: 'PM Fasal Bima Yojana',
            category: 'Crop Insurance Protection',
            benefit: 'Comprehensive crop loss indemnity',
            cosineScore: 0.925
          },
          {
            name: 'Kisan Credit Card (KCC)',
            category: 'Low Interest Credit',
            benefit: 'Concessional crop loans at 4% interest',
            cosineScore: 0.881
          }
        ],
        sectorPercentages: [
          { name: 'Agriculture & Irrigation', pct: 74, color: 'bg-emerald-500' },
          { name: 'Farm Equipment', pct: 16, color: 'bg-amber-500' },
          { name: 'Crop Insurance', pct: 10, color: 'bg-cyan-500' }
        ]
      };
    } else if (schemeOccupation === 'Entrepreneur') {
      return {
        matchScore: '95.2%',
        topSchemes: [
          {
            name: 'Startup India Seed Fund Scheme (SISFS)',
            category: 'Early Stage Capital',
            benefit: 'Up to ₹20 Lakhs grant + ₹50 Lakhs debt',
            cosineScore: 0.952
          },
          {
            name: schemeState === 'Andhra Pradesh' ? 'YSR Navodayam MSME Support' : 'Pradhan Mantri Mudra Yojana',
            category: 'MSME Loan Assistance',
            benefit: 'Collateral-free business loans up to ₹10 Lakhs',
            cosineScore: 0.914
          },
          {
            name: 'Stand-Up India Scheme',
            category: 'Greenfield Enterprise Credit',
            benefit: 'Bank loans between ₹10 Lakh to ₹1 Crore',
            cosineScore: 0.867
          }
        ],
        sectorPercentages: [
          { name: 'Seed Capital & Grants', pct: 55, color: 'bg-cyan-500' },
          { name: 'MSME Credit Guarantee', pct: 30, color: 'bg-purple-500' },
          { name: 'Tax Holidays', pct: 15, color: 'bg-indigo-500' }
        ]
      };
    } else {
      // Senior Citizen
      return {
        matchScore: '96.1%',
        topSchemes: [
          {
            name: schemeState === 'Andhra Pradesh' ? 'YSR Pension Kanuka' : 'Indira Gandhi National Old Age Pension',
            category: 'Social Security Pension',
            benefit: schemeState === 'Andhra Pradesh' ? '₹3,000 / month doorstep disbursement' : 'Monthly social welfare pension',
            cosineScore: 0.961
          },
          {
            name: 'Ayushman Bharat Senior Citizens (Vayo Vandana)',
            category: 'Free Healthcare Coverage',
            benefit: '₹5 Lakh free medical treatment coverage',
            cosineScore: 0.938
          },
          {
            name: 'Senior Citizens Savings Scheme (SCSS)',
            category: 'Guaranteed Interest Savings',
            benefit: '8.2% sovereign government guaranteed returns',
            cosineScore: 0.892
          }
        ],
        sectorPercentages: [
          { name: 'Social Welfare Pension', pct: 60, color: 'bg-amber-500' },
          { name: 'Geriatric Healthcare', pct: 28, color: 'bg-rose-500' },
          { name: 'Assured Income', pct: 12, color: 'bg-purple-500' }
        ]
      };
    }
  };

  const schemeData = getSchemeResults();

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading tracking-tight text-white">
            Things I've <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-cyan-400 bg-clip-text text-transparent">Built.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Production-grade software applications combining cutting-edge artificial intelligence, machine learning algorithms, and secure cloud architectures.
          </p>

          {/* Quick Project Switcher Tabs */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveProjectTab('aegis')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeProjectTab === 'aegis'
                  ? 'bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Project 01: AegisAI Threat Analyzer
            </button>
            <button
              onClick={() => setActiveProjectTab('schemes')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeProjectTab === 'schemes'
                  ? 'bg-cyan-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              Project 02: Gov Scheme Navigator
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PROJECT 01: AEGISAI – PHISHING AND THREAT ANALYZER */}
        {/* ============================================================== */}
        <div
          id="project-aegis"
          className={`rounded-3xl glass-card p-6 sm:p-8 lg:p-10 border border-white/10 space-y-8 transition-all ${
            activeProjectTab === 'aegis' ? 'ring-1 ring-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.15)]' : ''
          }`}
        >
          {/* Top Title & Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-semibold border border-purple-500/30">
                  PROJECT 01
                </span>
                <span className="text-slate-400">Artificial Intelligence | Cyber Security</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                AEGISAI – PHISHING AND THREAT ANALYZER
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                An AI-powered web application designed to detect phishing attempts in emails, SMS messages, and URLs using intelligent content analysis.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://ai-phishing-and-threat-analyzer.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-medium transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/Sanjanapasumarthi02/AI-Phishing-and-Threat-Analyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-medium border border-white/10 transition-all"
              >
                <TechIcon name="github" size={14} className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Key Features & Tech Stack Badges */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Key Features */}
            <div className="lg:col-span-5 space-y-5">
              <h4 className="text-sm font-mono uppercase tracking-wider text-purple-300 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Key Engineered Capabilities
              </h4>
              <ul className="space-y-3">
                {[
                  "Integrated Google Gemini API for contextual semantic threat understanding.",
                  "Detects suspicious content patterns, spoofed links, and deceptive sender cues.",
                  "Classifies threats into Low, Medium, and High risk with explainable reasoning.",
                  "Serverless backend deployed using Vercel for instant serverless execution.",
                  "Secure API key handling and sanitized client-server request isolation."
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2">Technology Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript", "Node.js", "Gemini API", "Vercel Serverless Functions", "Cybersecurity"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-xs text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Cyber Threat Intelligence Mockup */}
            <div className="lg:col-span-7 rounded-2xl glass-panel p-5 border border-purple-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] space-y-4">
              
              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white tracking-wide">
                    AEGIS<span className="text-cyan-400">AI</span> INTELLIGENCE CONSOLE
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <Server className="w-3.5 h-3.5 text-purple-400" />
                  <span>Vercel Serverless</span>
                </div>
              </div>

              {/* Preset Test Case Selector */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Interactive Threat Test Presets:</span>
                  <span className="text-cyan-400">Click to test live</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {aegisPresets.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => runAegisScan(preset)}
                      className={`px-2.5 py-1.5 rounded-xl text-left text-xs font-medium border transition-all ${
                        selectedAegisPreset.id === preset.id
                          ? 'bg-purple-950/70 border-purple-400 text-white shadow-sm'
                          : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <div className="truncate">{preset.name}</div>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                        {preset.score}% Risk
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Threat Input Simulation Box */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Input Content / URL Under Analysis:</span>
                  <span className="text-slate-500">{selectedAegisPreset.input.length} characters</span>
                </label>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 font-mono text-xs text-slate-300 leading-relaxed min-h-[58px]">
                  {selectedAegisPreset.input}
                </div>
              </div>

              {/* Threat Result Card */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border ${selectedAegisPreset.riskColor}`}>
                      {selectedAegisPreset.riskLevel}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Confidence: {selectedAegisPreset.score}%
                    </span>
                  </div>
                  <div className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Gemini 1.5 Flash</span>
                  </div>
                </div>

                {/* Animated Score Bar */}
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${selectedAegisPreset.progressColor}`}
                    style={{ width: `${selectedAegisPreset.score}%` }}
                  />
                </div>

                {/* Detected Red Flags */}
                <div className="space-y-1 text-xs">
                  <span className="font-mono text-[11px] text-slate-400 font-semibold block">
                    Security Red Flags Detected:
                  </span>
                  <ul className="space-y-1">
                    {selectedAegisPreset.redFlags.map((flag, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-slate-300">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{flag}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actionable Recommendations */}
                <div className="pt-2 border-t border-white/5 space-y-1 text-xs">
                  <span className="font-mono text-[11px] text-cyan-400 font-semibold block">
                    Recommended Action:
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedAegisPreset.recommendations[0]}
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* PROJECT 02: AI-BASED GOVERNMENT SCHEME NAVIGATOR */}
        {/* ============================================================== */}
        <div
          id="project-scheme"
          className={`rounded-3xl glass-card p-6 sm:p-8 lg:p-10 border border-white/10 space-y-8 transition-all ${
            activeProjectTab === 'schemes' ? 'ring-1 ring-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.15)]' : ''
          }`}
        >
          {/* Top Title & Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">
                  PROJECT 02
                </span>
                <span className="text-slate-400">Artificial Intelligence | Machine Learning | Data Analytics</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                AI-BASED GOVERNMENT SCHEME NAVIGATOR
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
                A smart recommendation platform that helps users discover eligible Central and Andhra Pradesh government welfare schemes based on their profiles, including age, income, and occupation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/Sanjanapasumarthi02/AI-Based-Government-Scheme-Navigator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>Live Demo (GitHub)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/Sanjanapasumarthi02/AI-Based-Government-Scheme-Navigator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-medium border border-white/10 transition-all"
              >
                <TechIcon name="github" size={14} className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Key Features & Interactive ML Dashboard Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Key Features & Tech Stack */}
            <div className="lg:col-span-5 space-y-5">
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-300 flex items-center gap-2">
                <Compass className="w-4 h-4 text-purple-400" />
                Key Engineered Capabilities
              </h4>
              <ul className="space-y-3">
                {[
                  "Rule-based deterministic eligibility filtering based on state policies.",
                  "Machine learning ranking using cosine similarity on citizen profile feature vectors.",
                  "Personalized recommendations for Central & Andhra Pradesh state schemes.",
                  "Comprehensive administrative dashboard for monitoring eligibility trends.",
                  "Interactive bar and pie chart visualizations for demographic distribution."
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2">Technology Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "Machine Learning", "Scikit-learn", "Streamlit", "Pandas", "Cosine Similarity", "Git"].map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/10 text-xs text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive Application Mockup & Analytics Charts */}
            <div className="lg:col-span-7 rounded-2xl glass-panel p-5 border border-cyan-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.5)] space-y-4">
              
              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-white tracking-wide">
                    SCHEME NAVIGATOR · ML DASHBOARD
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Cosine Similarity: {schemeData.matchScore}</span>
                </div>
              </div>

              {/* Interactive Citizen Profile Controls */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Interactive Citizen Profile:</span>
                  <span className="text-cyan-400">Select demographic to re-rank</span>
                </div>
                
                {/* Occupation selector */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Student', 'Farmer', 'Entrepreneur', 'Senior Citizen'] as const).map((occ) => (
                    <button
                      key={occ}
                      onClick={() => setSchemeOccupation(occ)}
                      className={`px-2.5 py-1.5 rounded-xl text-center text-xs font-medium border transition-all ${
                        schemeOccupation === occ
                          ? 'bg-cyan-950/80 border-cyan-400 text-cyan-200 shadow-sm'
                          : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>

                {/* State selector */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] font-mono text-slate-400">Jurisdiction:</span>
                  {(['Andhra Pradesh', 'Central'] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => setSchemeState(st)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                        schemeState === st
                          ? 'bg-purple-950/70 border-purple-400 text-purple-200'
                          : 'bg-slate-900/50 border-white/5 text-slate-400'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recommended Schemes List */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-mono text-slate-400 block font-semibold">
                  Top Recommended Schemes (Ranked by Scikit-Learn Cosine Similarity):
                </span>
                <div className="space-y-2">
                  {schemeData.topSchemes.map((scheme, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-between gap-3 hover:border-cyan-500/40 transition-colors"
                    >
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white font-heading">
                            {scheme.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-cyan-300">
                            {scheme.category}
                          </span>
                        </div>
                        <div className="text-xs text-slate-300">
                          Benefit: <span className="text-emerald-400 font-medium">{scheme.benefit}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="text-[11px] font-mono font-bold text-cyan-400 block">
                          {(scheme.cosineScore * 100).toFixed(1)}%
                        </span>
                        <span className="text-[9px] font-mono text-slate-500">Vector Match</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Analytics Visualization: Bar & Trend Charts */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Eligibility Distribution by Sector</span>
                  </div>
                  <span className="text-[10px] text-purple-300">Pandas Trend Analysis</span>
                </div>

                {/* Visual Bar Breakdown */}
                <div className="space-y-1.5 pt-1">
                  {schemeData.sectorPercentages.map((sector, i) => (
                    <div key={i} className="space-y-1 text-xs">
                      <div className="flex justify-between text-[11px] text-slate-300 font-mono">
                        <span>{sector.name}</span>
                        <span>{sector.pct}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className={`h-full ${sector.color} transition-all duration-500`}
                          style={{ width: `${sector.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
