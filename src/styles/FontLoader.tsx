import { FC } from 'react';

const FontLoader: FC = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Caveat:wght@400;600&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { 
      scroll-behavior: smooth; 
      overflow-x: hidden; 
      width: 100%; 
      max-width: 100%;
      margin: 0;
      padding: 0;
    }
    #root {
      width: 100%;
      overflow-x: hidden;
    }
    * { cursor: none !important; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes scanLine {
      0%   { left: -100%; }
      100% { left: 100%; }
    }
    .anim-fade-up-1 { opacity: 0; animation: fadeUp 0.7s 0.1s forwards; }
    .anim-fade-up-2 { opacity: 0; animation: fadeUp 0.8s 0.25s forwards; }
    .anim-fade-up-3 { opacity: 0; animation: fadeUp 0.8s 0.5s forwards; }
    .anim-fade-up-4 { opacity: 0; animation: fadeUp 0.8s 0.9s forwards; }

    .hi-word {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      font-weight: 400;
      display: inline-block;
      position: relative;
      transition: color 0.18s ease;
    }
    .hi-word::after {
      content: '';
      position: absolute;
      bottom: -1px; left: 0; right: 0;
      height: 1px;
      background: currentColor;
      opacity: 0.25;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.25s ease, opacity 0.25s ease;
    }
    .hi-word:hover::after { transform: scaleX(1); opacity: 0.55; }

    .thub-wrap { position: relative; display: inline-block; }
    .thub-note {
      position: absolute;
      bottom: 100%;
      left: 70%;
      transform: translateY(20%);
      margin-left: 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 8px;
      pointer-events: none;
      white-space: nowrap;
      opacity: 0.7;
      transition: opacity 0.2s;
    }
    .thub-wrap:hover .thub-note { opacity: 1; }

    .work-card {
      background: var(--c-bg2);
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .work-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

    .nav-icon-link:hover { color: var(--c-accent) !important; border-color: var(--c-accent) !important; transform: translateY(-1px); }
    .nav-link:hover { color: var(--c-ink) !important; background: var(--c-btn) !important; }
    .btn-primary:hover { background: var(--c-accent) !important; transform: translateY(-2px); }
    .btn-secondary:hover { color: var(--c-accent) !important; }
    .theme-toggle:hover { border-color: var(--c-accent) !important; color: var(--c-accent) !important; transform: rotate(20deg); }
    .section-link:hover { color: var(--c-accent) !important; border-color: var(--c-accent) !important; }

    .scroll-line {
      width: 36px; height: 1px;
      background: var(--c-ink3);
      position: relative; overflow: hidden;
    }
    .scroll-line::after {
      content: ''; position: absolute; top: 0; left: -100%;
      width: 100%; height: 100%;
      background: var(--c-accent);
      animation: scanLine 2s 1.5s infinite;
    }
  `}</style>
);

export default FontLoader;
