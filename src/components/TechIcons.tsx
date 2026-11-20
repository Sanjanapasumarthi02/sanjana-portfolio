import React from 'react';

export const TechIcon: React.FC<{ name: string; className?: string; size?: number }> = ({
  name,
  className = "w-6 h-6",
  size = 24
}) => {
  switch (name.toLowerCase()) {
    case 'python':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#3776AB" d="M63.5 8c-27.4 0-25.7 11.9-25.7 11.9l.1 12.3h26.2v3.7H27.8S12 34.2 12 61.8c0 27.6 13.8 26.6 13.8 26.6h8.2v-11.6s-.4-13.8 13.5-13.8h23.2s13.1.2 13.1-12.7V20.7S84.7 8 63.5 8zm-14 7.6c2.7 0 4.9 2.2 4.9 4.9s-2.2 4.9-4.9 4.9-4.9-2.2-4.9-4.9 2.2-4.9 4.9-4.9z"/>
          <path fill="#FFD43B" d="M64.5 120c27.4 0 25.7-11.9 25.7-11.9l-.1-12.3H63.9V92.1h36.3s15.8 1.7 15.8-25.9c0-27.6-13.8-26.6-13.8-26.6h-8.2v11.6s.4 13.8-13.5 13.8H57.3s-13.1-.2-13.1 12.7v29.6s-1 12.7 20.3 12.7zm14-7.6c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9-2.2 4.9-4.9 4.9z"/>
        </svg>
      );
    case 'sql':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#38bdf8"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#38bdf8"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#38bdf8"/>
          <path d="M12 12v3" stroke="#818cf8"/>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#E76F00" d="M46.7 97.4s-6.3 3.6 4.5 4.9c13.1 1.5 19.8 1.4 34.3-.8 0 0 4.1 2.6 9.8 4.9-24.9 10.4-58.4 2.1-48.6-9zm-4.4-15.6s-7.1 5.2 3.6 6.5c14.2 1.8 26.5 1.7 45.4-.9 0 0 2.9 3.2 7 4.7-29.4 8.7-65.7 3.5-56-10.3z"/>
          <path fill="#5382A1" d="M68.3 60.1c5.2 6-4 11.5-4 11.5s13.3-6.9 7.2-15.6c-5.8-8.3-10.6-12.4 14.4-25.2 0 0-25 7.1-17.6 29.3zm21.4 35.8c20.3-10.5 10.9-20.7 4.3-19.3-2.6.5-3.8.9-3.8.9s1.3-1.6 3.6-2.3c9.9-3.2 17.5 7.9-4.1 20.7z"/>
          <path fill="#E76F00" d="M60.2 119.5c18.5 1.2 37.3-1.6 47.1-7.2 0 0-4 3.7-11.4 5.2-13.4 2.8-27.1 2.9-35.7 2z"/>
        </svg>
      );
    case 'c':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#659AD2" d="M115.4 30.7L67.1 2.9c-2-.9-4.3-.9-6.3 0L12.6 30.7c-2 1.1-3.2 3.3-3.2 5.5v55.5c0 2.3 1.2 4.4 3.2 5.5l48.3 27.9c1 1 2.1 1.4 3.1 1.4s2.2-.5 3.1-1.4l48.3-27.9c2-1.1 3.2-3.3 3.2-5.5V36.3c0-2.3-1.2-4.5-3.2-5.6z"/>
          <path fill="#004482" d="M64 125.7c-1 0-2.1-.5-3.1-1.4L12.6 96.4c-2-1.1-3.2-3.3-3.2-5.5V35.4c0-2.3 1.2-4.4 3.2-5.5L60.9 2c1-1 2.1-1.4 3.1-1.4V125.7z"/>
          <path fill="#FFFFFF" d="M64.3 93.3c-16.1 0-29.2-13.1-29.2-29.3s13.1-29.3 29.2-29.3c10.3 0 19.3 5.3 24.5 13.4l-11.3 6.6c-2.9-4.6-8-7.7-13.8-7.7-9.3 0-16.9 7.6-16.9 16.9s7.6 16.9 16.9 16.9c5.8 0 10.9-3 13.8-7.7l11.3 6.6c-5.2 8.1-14.2 13.6-24.5 13.6z"/>
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 115 102" width={size} height={size} className={className} fill="#00d8ff">
          <ellipse cx="57.5" cy="51" rx="15" ry="15"/>
          <g stroke="#00d8ff" strokeWidth="5.5" fill="none">
            <ellipse cx="57.5" cy="51" rx="55" ry="21"/>
            <ellipse cx="57.5" cy="51" rx="55" ry="21" transform="rotate(60 57.5 51)"/>
            <ellipse cx="57.5" cy="51" rx="55" ry="21" transform="rotate(120 57.5 51)"/>
          </g>
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#F7DF1E" d="M1.4 1.4h125.2v125.2H1.4z"/>
          <path fill="#000000" d="M28.7 109.1l11.4-6.9c2.4 4.1 4.7 7.5 10 7.5 5.2 0 8.5-2.1 8.5-10.3V57.6h14.2v42.2c0 14.8-8.7 21.4-22.3 21.4-11.5 0-18.4-6-21.8-12.1zm53.5-1.5l11.4-6.6c3.1 5.1 7.2 9.1 14.1 9.1 6 0 9.8-2.9 9.8-7.1 0-5-4-6.9-10.9-9.8l-3.8-1.6c-10.9-4.7-18.1-10.6-18.1-22.7 0-11.3 8.7-19.9 22.3-19.9 9.7 0 16.7 3.5 21.6 12.1l-11 7.1c-2.4-4.2-5.2-6-10.5-6-4.6 0-7.7 2.9-7.7 6.6 0 4.6 3.1 6.5 8.9 9l3.8 1.6c12.7 5.5 20.3 11.2 20.3 23.8 0 13.6-10.7 21-24.3 21-13.6 0-22.2-6.7-25.9-16.6z"/>
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#E44D26" d="M19.1 117.8L7.8 0h112.4l-11.3 117.7-44.9 10.3z"/>
          <path fill="#F16529" d="M64 118.8l36.5-8.4 9.4-97.6H64z"/>
          <path fill="#EBEBEB" d="M64 51.5H45.4l-1.3-14.8H64V22.4H28.4l3.8 43.4H64zm0 39.4l-.2.1-17.7-4.8-1.1-12.7H30.4l2.2 25.1 31.4 8.7z"/>
          <path fill="#FFFFFF" d="M63.9 65.8h17.4l-1.6 18.2-15.8 4.3v14.8l31.5-8.7 3.6-40.4H63.9zm0-43.4v14.3h33.6l1.3-14.3z"/>
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#1572B6" d="M19.1 117.8L7.8 0h112.4l-11.3 117.7-44.9 10.3z"/>
          <path fill="#33A9DC" d="M64 118.8l36.5-8.4 9.4-97.6H64z"/>
          <path fill="#EBEBEB" d="M64 51.5H45.4l-1.3-14.8H64V22.4H28.4l3.8 43.4H64zm0 39.4l-.2.1-17.7-4.8-1.1-12.7H30.4l2.2 25.1 31.4 8.7z"/>
          <path fill="#FFFFFF" d="M63.9 65.8h17.4l-1.6 18.2-15.8 4.3v14.8l31.5-8.7 3.6-40.4H63.9zm0-43.4v14.3h33.6l1.3-14.3z"/>
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#00758F" d="M73.5 45.4c-8.9 0-16.2 7.3-16.2 16.2 0 5.8 3.1 10.9 7.8 13.7-2.6 2.2-6 3.6-9.8 3.6-5.8 0-10.9-3.4-13.4-8.4 2.2.8 4.7 1.3 7.2 1.3 7.8 0 14.3-5.6 15.8-13-3.6 1.8-7.7 2.8-12 2.8-12.4 0-22.5-10.1-22.5-22.5 0-3.6.9-7.1 2.4-10.1C18 36.4 8 50.8 8 67.5 8 92.5 28.5 113 53.5 113c23.2 0 42.4-17.7 44.8-40.3-6.9 7.7-17 12.7-28.3 12.7h-3.4c5-3.8 8.4-9.8 8.4-16.5 0-13-10.5-23.5-23.5-23.5z"/>
          <path fill="#F29111" d="M106.3 35.8c-3.8-9.4-10.8-17.1-19.6-21.8 4.2 4.4 7.2 10.1 8.4 16.4 2.5 1.5 5 3.3 7.4 5.3 1.3.1 2.6.1 3.8.1z"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#47A248" d="M64 4.5S36.8 35.2 36.8 69.8c0 23.3 13.9 44.1 24.3 53.7.8.7 1.9 1 2.9 1 1 0 2.1-.3 2.9-1 10.4-9.6 24.3-30.4 24.3-53.7C91.2 35.2 64 4.5 64 4.5z"/>
          <path fill="#499D4A" d="M64 4.5v120c1-.1 1.9-.4 2.7-1.1 10.4-9.6 24.3-30.4 24.3-53.7 0-34.5-27-65.2-27-65.2z"/>
          <path fill="#FFFFFF" d="M64 74.8c-.8 0-1.5-.7-1.5-1.5V18.1c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v55.2c0 .8-.7 1.5-1.5 1.5z"/>
        </svg>
      );
    case 'dsa':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="5" r="3" stroke="#a855f7" fill="#a855f7" fillOpacity="0.2"/>
          <circle cx="6" cy="18" r="3" stroke="#06b6d4" fill="#06b6d4" fillOpacity="0.2"/>
          <circle cx="18" cy="18" r="3" stroke="#06b6d4" fill="#06b6d4" fillOpacity="0.2"/>
          <line x1="10" y1="7.5" x2="7.5" y2="15.5" stroke="#94a3b8"/>
          <line x1="14" y1="7.5" x2="16.5" y2="15.5" stroke="#94a3b8"/>
        </svg>
      );
    case 'dbms':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="6" rx="2" stroke="#a855f7"/>
          <rect x="3" y="11" width="18" height="6" rx="2" stroke="#8b5cf6"/>
          <rect x="3" y="19" width="18" height="2" rx="1" stroke="#06b6d4"/>
          <circle cx="7" cy="6" r="1" fill="#a855f7"/>
          <circle cx="7" cy="14" r="1" fill="#8b5cf6"/>
        </svg>
      );
    case 'oop':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="#a855f7" fill="#a855f7" fillOpacity="0.15"/>
          <polyline points="2 17 12 22 22 17" stroke="#06b6d4"/>
          <polyline points="2 12 12 17 22 12" stroke="#8b5cf6"/>
        </svg>
      );
    case 'os':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="#38bdf8"/>
          <rect x="8" y="8" width="8" height="8" rx="1" stroke="#a855f7"/>
          <path d="M4 9H2m2 6H2m20-6h-2m2 6h-2M9 4V2m6 2V2m-6 20v-2m6 2v-2" stroke="#94a3b8"/>
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#F05032" d="M125.7 57.6L70.4 2.3c-3.1-3.1-8.1-3.1-11.2 0L47.7 13.9l14.2 14.2c3.3-1.1 7.2-.4 9.9 2.3 2.7 2.7 3.4 6.6 2.3 9.9l13.7 13.7c3.3-1.1 7.2-.4 9.9 2.3 3.8 3.8 3.8 10 0 13.8-3.8 3.8-10 3.8-13.8 0-2.8-2.8-3.5-6.9-2.1-10.3L64.8 46.8v34.4c.9.5 1.7 1.1 2.4 1.8 3.8 3.8 3.8 10 0 13.8-3.8 3.8-10 3.8-13.8 0-3.8-3.8-3.8-10 0-13.8.8-.8 1.8-1.5 2.8-1.9V45.7c-1.1-.5-2-.1-2.8 1.9-2.8 2.8-6.9 3.5-10.3 2.1L29.3 63.5c1.4 3.4.7 7.5-2.1 10.3-3.8 3.8-10 3.8-13.8 0-3.8-3.8-3.8-10 0-13.8 2.8-2.8 6.9-3.5 10.3-2.1l13.8-13.8c-1.4-3.4-.7-7.5 2.1-10.3 2.7-2.7 6.6-3.4 9.9-2.3L35.4 17.3 2.3 50.4c-3.1 3.1-3.1 8.1 0 11.2l55.3 55.3c3.1 3.1 8.1 3.1 11.2 0l56.9-56.9c3.1-3.1 3.1-8.1 0-11.2z"/>
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      );
    case 'linux':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#000000" d="M64.6 2c-15.6 0-26 13.9-26 29.8 0 8.2 2.3 16.5 5.5 24.3-3.6 5.8-6.9 12.4-6.9 19.8 0 7.8 4 14.5 9.7 18.7-2.6 5.3-7.6 11.2-14.8 14.9-3.2 1.6-4.9 5.3-4.2 8.9.7 3.5 3.5 6.2 7.1 6.6 22 2.4 34.6-9.1 40.5-16.7 3.2.4 6.5.6 9.8.6 3.3 0 6.6-.2 9.8-.6 5.9 7.6 18.5 19.1 40.5 16.7 3.6-.4 6.4-3.1 7.1-6.6.7-3.5-1-7.2-4.2-8.9-7.2-3.7-12.2-9.6-14.8-14.9 5.7-4.2 9.7-10.9 9.7-18.7 0-7.4-3.3-14-6.9-19.8 3.2-7.8 5.5-16.1 5.5-24.3C90.6 15.9 80.2 2 64.6 2z"/>
          <ellipse cx="64" cy="78" rx="20" ry="24" fill="#FFFFFF"/>
          <circle cx="56" cy="28" r="4" fill="#FFFFFF"/>
          <circle cx="72" cy="28" r="4" fill="#FFFFFF"/>
          <circle cx="57" cy="28" r="2" fill="#000000"/>
          <circle cx="73" cy="28" r="2" fill="#000000"/>
          <path fill="#FFA500" d="M64 36c-5 0-9 4-9 6s4 5 9 5 9-3 9-5-4-6-9-6z"/>
        </svg>
      );
    case 'leetcode':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.725-1.782.725s-1.316-.258-1.782-.725L4.475 15.17a2.53 2.53 0 010-3.565l5.366-5.366a2.53 2.53 0 013.564 0l2.697 2.607a1 1 0 01-1.414 1.414l-2.697-2.607a.53.53 0 00-.736 0L5.889 13.02a.53.53 0 000 .736l5.366 5.366c.197.197.539.197.736 0l2.697-2.607a1 1 0 011.414 1.415zM20 12h-9a1 1 0 010-2h9a1 1 0 010 2z" fill="#FFA116"/>
        </svg>
      );
    case 'hackerrank':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none">
          <rect width="24" height="24" rx="4" fill="#00EA64" fillOpacity="0.15"/>
          <path d="M7 6v12M17 6v12M7 12h10" stroke="#00EA64" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );
    case 'aws':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#FF9900" d="M37.8 77.2c-11.8 8.7-29 13.9-43.8 13.9-2.1 0-4.2-.1-6.2-.3-.5-.1-.8.4-.5.7 13.8 13.5 33.1 21.8 54.4 21.8 22.3 0 42.4-9.1 56.7-23.7.4-.4.1-1-.4-.8-17.6 8.3-39.7 11.8-60.2-11.6z"/>
          <path fill="#FF9900" d="M102.6 83.4c-1.3-1.6-8.5-1.2-12.7-.6-.6.1-.7.7-.2 1.1 3.5 2.6 9.3 1.9 12.3 2.6.4.1.8-.7.6-3.1z"/>
          <path fill="#FFFFFF" d="M46.7 41.6c0-6.1-4.7-10.4-12.4-10.4-6.4 0-11.4 3.2-13.6 7.9-.3.6.1 1.2.7 1.3l4.5 1.1c.5.1 1-.2 1.2-.6 1.4-2.8 3.8-4.6 7.3-4.6 4.3 0 6.9 2.1 6.9 5.8v1.7c-13.9.7-22.1 5.3-22.1 15.3 0 6.4 4.5 10.8 11.2 10.8 5.6 0 9.8-2.6 11.8-7.3.5 3.3 3.3 6.7 7.7 6.7 2.8 0 5-1.1 6.6-2.9.4-.5.3-1.1-.2-1.4l-3.3-2.6c-.4-.3-.9-.2-1.2.2-.7.8-1.5 1.3-2.3 1.3-1.2 0-2-1-2-2.7v-24zm-5.4 15.7c0 4.8-3.2 8.4-8.2 8.4-3.5 0-5.8-2-5.8-5.4 0-4.7 3.9-7.1 14-7.6v4.6zm47.9-25.7h-5.4c-.6 0-1.1.4-1.3 1l-10.6 37.9c-.2.7.3 1.4 1 1.4h5c.6 0 1.1-.4 1.3-1l2.5-9.6h14.8l2.5 9.6c.2.6.7 1 1.3 1h5.1c.7 0 1.2-.7 1-1.4L95.5 32.6c-.2-.6-.7-1-1.3-1zm-6.2 24.3l5-19.8 5 19.8H83z"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" stroke="#a855f7"/>
          <path d="M12 8v8M8 12h8" stroke="#06b6d4"/>
        </svg>
      );
  }
};
