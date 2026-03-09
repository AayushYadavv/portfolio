import { useState, useEffect, useRef, useCallback, FC } from "react";

/* ── Theme definitions ─────────────────────────────────────────── */
const THEMES = {
  light: {
    bg: '#FDFCFB',
    bg2: '#F4F2EE',
    navBg: 'rgba(253,252,251,0.85)',
    ink: '#1C1810',
    ink2: '#5C574E',
    ink3: '#A9A49C',
    accent: '#C4622D',
    btn: 'rgba(0,0,0,0.03)',
    border: 'rgba(0,0,0,0.06)',
  },
  dark: {
    bg: '#141824',
    bg2: '#1E2230',
    navBg: 'rgba(20,24,36,0.85)',
    ink: '#E8E4DE',
    ink2: '#9D9A94',
    ink3: '#565450',
    accent: '#E07848',
    btn: 'rgba(255,255,255,0.04)',
    border: 'rgba(255,255,255,0.08)',
  },
};

const PALETTE = ['#F7E8E3', '#E8EFF7', '#F0E8F7', '#E8F7F0', '#F7F0E8'];

/* ── Gallery data ─────────────────────────────────────────────── */
const GALLERY: Record<string, { imgs: Array<{ src?: string; label: string }> }> = {
  'founding-designer': {
    imgs: [
      { src: '/fd5.jpg', label: 'At Work' },
      { src: '/fd2.jpg', label: 'Volkswagen Pitch' },
      { src: '/fd3.jpg', label: 'Team @ T-Hub' },
      { src: '/fd6.jpg', label: 'First Runner Up' },
      { src: '/fd4.jpg', label: 'Conference Booth' },
    ]
  },
  'cat-mom': {
    imgs: [
      { src: "data:image/jpeg;base64,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", label: '🐱' },
      { src: "", label: '😻' },
      { src: "", label: '🐈' },
    ]
  },
  'hyderabad': {
    imgs: [
      { src: "", label: '🏛️' },
      { src: "", label: '🌆' },
      { src: "", label: '🍛' },
    ]
  },
  'waveflowdb': {
    imgs: [
      { label: '📊' },
      { label: '🗄️' },
      { label: '⚡' },
    ]
  },
  'waveflow-studio': {
    imgs: [
      { label: '🎨' },
      { label: '✨' },
      { label: '🎯' },
    ]
  },
};

/* ── Google Fonts ─────────────────────────────────────────────── */
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

/* ── Custom Cursor ────────────────────────────────────────────── */
const Cursor: FC<{ dark: boolean }> = () => {
  const pointerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const entered = useRef(false);

  useEffect(() => {
    const pointer = pointerRef.current;
    const tag = tagRef.current;
    if (!pointer || !tag) return;

    function onMove(e: MouseEvent) {
      pointer!.style.left = `${e.clientX}px`;
      pointer!.style.top = `${e.clientY}px`;
      tag!.style.left = `${e.clientX + 18}px`;
      tag!.style.top = `${e.clientY + 18}px`;
      if (!entered.current) {
        pointer!.style.opacity = '1';
        tag!.style.opacity = '1';
        entered.current = true;
      }
    }

    function onLeave() {
      pointer!.style.opacity = '0';
      tag!.style.opacity = '0';
      entered.current = false;
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <div
        ref={pointerRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 28, height: 28,
          pointerEvents: 'none',
          zIndex: 999999,
          opacity: 0,
          transition: 'opacity 0.2s ease',
          transform: 'translate(-20%, -20%)'
        }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}>
          <path d="M4.5 4.5 L20 10.5 L12.5 12.5 L10.5 20 L4.5 4.5Z" fill="#141824" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
      </div>
      <div
        ref={tagRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          background: '#141824',
          color: '#ffffff',
          padding: '6px 14px',
          borderRadius: '20px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          fontWeight: 600,
          pointerEvents: 'none',
          zIndex: 999998,
          opacity: 0,
          transition: 'opacity 0.2s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          border: '1.5px solid rgba(255,255,255,0.1)'
        }}
      >
        You
      </div>
    </>
  );
};

/* ── Interactive Grid Canvas ──────────────────────────────────── */
const GridCanvas: FC<{ dark: boolean }> = ({ dark }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gmRef = useRef({ x: -9999, y: -9999 });
  const cellsRef = useRef<Array<{ r: number; c: number; heat: number }>>([]);
  const isDarkRef = useRef(dark);

  useEffect(() => { isDarkRef.current = dark; }, [dark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const CELL = 28;
    let rafId: number;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const cols = Math.ceil(canvas.width / CELL) + 1;
      const rows = Math.ceil(canvas.height / CELL) + 1;
      cellsRef.current = [];
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          cellsRef.current.push({ r, c, heat: 0 });
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x, y } = gmRef.current;
      const dark = isDarkRef.current;
      cellsRef.current.forEach(cell => {
        const cx = cell.c * CELL, cy = cell.r * CELL;
        const d = Math.hypot(cx - x, cy - y);
        const t = Math.max(0, 1 - d / 180);
        cell.heat += (t - cell.heat) * 0.12;
        if (cell.heat > 0.015) {
          const [r, g, b] = dark ? [224, 120, 72] : [196, 98, 45];
          ctx.fillStyle = `rgba(${r},${g},${b},${cell.heat * 0.5})`;
          ctx.fillRect(cx, cy, CELL, CELL);
        }
        ctx.strokeStyle = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.05)';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(cx, cy, CELL, CELL);
      });
      rafId = requestAnimationFrame(draw);
    }

    function onMove(e: MouseEvent) {
      if (!canvas) return;
      const r = canvas.getBoundingClientRect();
      gmRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    }
    function onLeave() { gmRef.current = { x: -9999, y: -9999 }; }

    canvas.parentElement?.addEventListener('mousemove', onMove);
    canvas.parentElement?.addEventListener('mouseleave', onLeave);
    window.addEventListener('resize', resize);

    resize();
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      canvas.parentElement?.removeEventListener('mousemove', onMove);
      canvas.parentElement?.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  );
};

/* ── Hover Gallery — crossfade, all images stacked ────────────── */
interface HoverGalleryProps {
  activeKey: string | null;
  anchorEl: HTMLElement | null;
  dark: boolean;
}

const HoverGallery: FC<HoverGalleryProps> = ({ activeKey, anchorEl, dark }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [idx, setIdx] = useState(0);
  const cycleRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const activeKeyRef = useRef(activeKey);
  const t = dark ? THEMES.dark : THEMES.light;

  useEffect(() => { activeKeyRef.current = activeKey; }, [activeKey]);

  useEffect(() => {
    if (!activeKey || !anchorEl) {
      setVisible(false);
      if (cycleRef.current) clearInterval(cycleRef.current);
      return;
    }

    const def = GALLERY[activeKey];
    if (!def) return;

    setIdx(0);
    if (cycleRef.current) clearInterval(cycleRef.current);

    requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      const r = anchorEl.getBoundingClientRect();
      const gw = el.offsetWidth || 200;
      const gh = el.offsetHeight || 150;
      const PAD = 12;
      let top = r.top - gh - PAD + window.scrollY;
      let left = r.left + r.width / 2 - gw / 2;
      if (top < 70) top = r.bottom + PAD + window.scrollY;
      left = Math.max(12, Math.min(left, window.innerWidth - gw - 12));
      setPos({ top, left });
      setVisible(true);
    });

    cycleRef.current = setInterval(() => {
      const key = activeKeyRef.current;
      if (key && GALLERY[key]) {
        setIdx(p => (p + 1) % GALLERY[key].imgs.length);
      }
    }, 600);

    return () => {
      if (cycleRef.current) clearInterval(cycleRef.current);
    };
  }, [activeKey, anchorEl]);

  const def = activeKey ? GALLERY[activeKey] : null;
  if (!def) return null;

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        zIndex: 9000,
        pointerEvents: 'none',
        width: 200,
        height: 160,
        borderRadius: 12,
        overflow: 'hidden',
        top: pos.top,
        left: pos.left,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.95)',
        transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(.22,1,.36,1)',
        background: dark ? 'rgba(22,22,22,0.92)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: `1px solid ${dark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)'}`,
        boxShadow: dark
          ? '0 12px 40px rgba(0,0,0,0.5)'
          : '0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {def.imgs.map((item, i) => (
          item.src ? (
            <img
              key={i}
              src={item.src}
              alt={item.label}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                opacity: i === idx ? 1 : 0,
                transition: 'opacity 0.1s ease',
              }}
            />
          ) : (
            <div
              key={i}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                background: PALETTE[i % PALETTE.length],
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: item.label.length <= 2 ? 36 : 13,
                color: t.ink2,
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: '0.04em',
                opacity: i === idx ? 1 : 0,
                transition: 'opacity 0.1s ease',
              }}
            >
              {item.label}
            </div>
          )
        ))}
      </div>
      <div style={{
        position: 'absolute', bottom: 8, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', gap: 5,
        zIndex: 1,
      }}>
        {def.imgs.map((_, i) => (
          <div key={i} style={{
            width: i === idx ? 16 : 5, height: 5,
            borderRadius: 3,
            background: i === idx ? t.accent : 'rgba(255,255,255,0.5)',
            transition: 'width 0.3s ease, background 0.3s ease',
          }} />
        ))}
      </div>
    </div>
  );
};

/* ── Highlight word ───────────────────────────────────────────── */
interface HiProps {
  dataKey: string;
  children: React.ReactNode;
  accent: string;
  ink: string;
  onEnter: (key: string, el: HTMLElement) => void;
  onLeave: () => void;
}

const Hi: FC<HiProps> = ({ dataKey, children, accent, ink, onEnter, onLeave }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);
  return (
    <span
      ref={ref}
      className="hi-word"
      style={{ color: hovered ? accent : ink }}
      onMouseEnter={() => { setHovered(true); if (ref.current) onEnter(dataKey, ref.current); }}
      onMouseLeave={() => { setHovered(false); onLeave(); }}
    >
      {children}
    </span>
  );
};

/* ── Icons ────────────────────────────────────────────────────── */
const LinkedInIcon: FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const MailIcon: FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon: FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.58 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.62-1.62a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const SunIcon: FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const MoonIcon: FC = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const ArrowIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Main App ─────────────────────────────────────────────────── */
const App: FC = () => {
  const [dark, setDark] = useState(false);
  const [galleryKey, setGalleryKey] = useState<string | null>(null);
  const [galleryAnchor, setGalleryAnchor] = useState<HTMLElement | null>(null);
  const t = dark ? THEMES.dark : THEMES.light;

  const onHiEnter = useCallback((key: string, el: HTMLElement) => {
    setGalleryKey(key);
    setGalleryAnchor(el);
  }, []);
  const onHiLeave = useCallback(() => {
    setGalleryKey(null);
    setGalleryAnchor(null);
  }, []);

  const hiProps = { accent: t.accent, ink: t.ink, onEnter: onHiEnter, onLeave: onHiLeave };

  const iconLinkStyle: React.CSSProperties = {
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    width: 36, height: 36, borderRadius: '50%',
    color: t.ink2, border: `1px solid ${t.border}`,
    transition: 'color 0.2s, border-color 0.2s, transform 0.2s',
    textDecoration: 'none',
  };

  return (
    <div style={{ background: t.bg, color: t.ink, fontFamily: "'DM Sans', sans-serif", fontWeight: 300, transition: 'background 0.3s, color 0.3s', minHeight: '100vh', width: '100vw', maxWidth: '100vw', overflowX: 'hidden', boxSizing: 'border-box' }}>
      <FontLoader />

      <style>{`
        :root {
          --c-accent: ${t.accent};
          --c-ink: ${t.ink};
          --c-ink2: ${t.ink2};
          --c-ink3: ${t.ink3};
          --c-bg2: ${t.bg2};
          --c-btn: ${t.btn};
          --c-border: ${t.border};
        }
      `}</style>

      <Cursor dark={dark} />

      {/* ── Navbar ──────────────────────────────────────────────── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999999,
        background: t.navBg,
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${t.border}`,
        height: 60,
        display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center',
        padding: '0 32px',
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        <a href="#" style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 22, fontWeight: 700, fontStyle: 'italic', color: t.ink, letterSpacing: '0.01em', textDecoration: 'none' }}>
          Bhavya
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="#" className="nav-icon-link" style={iconLinkStyle}><LinkedInIcon /></a>
          <a href="mailto:bhavya@example.com" className="nav-icon-link" style={iconLinkStyle}><MailIcon /></a>
          <a href="tel:+91" className="nav-icon-link" style={iconLinkStyle}><PhoneIcon /></a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
          {['Work', 'About', 'Resume'].map(l => (
            <a key={l} href="#" className="nav-link" style={{ fontSize: 13, fontWeight: 400, letterSpacing: '0.04em', color: t.ink2, textDecoration: 'none', padding: '6px 12px', borderRadius: 20, transition: 'color 0.2s, background 0.2s' }}>
              {l}
            </a>
          ))}
          <button
            className="theme-toggle"
            onClick={() => setDark(d => !d)}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              border: `1px solid ${t.border}`, background: t.btn, color: t.ink2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginLeft: 8, transition: 'all 0.2s',
            }}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        id="hero"
        style={{
          position: 'relative', minHeight: '100vh',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', padding: '80px 0 60px',
          width: '100%',
        }}
      >
        <GridCanvas dark={dark} />

        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: `radial-gradient(ellipse 80% 80% at 50% 50%, transparent 25%, ${t.bg} 100%)`,
          transition: 'background 0.3s',
        }} />

        {galleryKey && (
          <HoverGallery activeKey={galleryKey} anchorEl={galleryAnchor} dark={dark} />
        )}

        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: 860, padding: '0 32px', width: '100%' }}>

          <p className="anim-fade-up-1" style={{ fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: t.ink3, marginBottom: 36, fontWeight: 500 }}>
            Product Designer &amp; Strategist
          </p>

          <p className="anim-fade-up-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(15px, 2vw, 24px)', textWrap: 'balance', maxWidth: 700, fontWeight: 300, lineHeight: 1.55, letterSpacing: '-0.01em', color: t.ink, transition: 'color 0.3s' }}>
            <Hi dataKey="founding-designer" {...hiProps}>Founding Designer</Hi>
            {' '}at AgentAnalytics.AI (
            <span className="thub-wrap">
              T&#8209;Hub
              <span className="thub-note">
                <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'scaleX(-1)' }}>
                  <path d="M4 3 C7 5, 14 9, 18 15" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M14 12.5 L18 15 L15.5 10.5" stroke={t.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "'Caveat', cursive", fontSize: 13, fontWeight: 400, color: t.accent, lineHeight: 1.3, textAlign: 'left', marginBottom: 3, whiteSpace: 'nowrap' }}>
                  world's largest innovation center
                </span>
              </span>
            </span>
            ), and a <Hi dataKey="cat-mom" {...hiProps}>cat mom</Hi> based in{' '}
            <Hi dataKey="hyderabad" {...hiProps}>Hyderabad</Hi>,{' '}
            designing humanist AI experiences.{' '}
            Currently crafting AI experiences for{' '}
            <Hi dataKey="waveflowdb" {...hiProps}>WaveflowDB</Hi>{' '}
            and <Hi dataKey="waveflow-studio" {...hiProps}>Waveflow Studio</Hi>.<br />
            Previously shaped products at Hashira and PossibleWorks.<br />
            Passionate about working with startups to create magical experiences that drive growth.
          </p>

          <div className="anim-fade-up-3" style={{ marginTop: 44, display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'center' }}>
            <a
              href="#works"
              className="btn-primary"
              onClick={e => { e.preventDefault(); document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                background: t.ink, color: t.bg,
                fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                padding: '12px 28px', borderRadius: 40, border: 'none',
                textDecoration: 'none', display: 'inline-block',
                transition: 'background 0.2s, transform 0.2s',
              }}
            >
              View Work
            </a>
            <a href="#" className="btn-secondary" style={{ fontSize: 13, color: t.ink3, textDecoration: 'none', letterSpacing: '0.04em', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}>
              About me <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="anim-fade-up-4" style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="scroll-line" />
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: t.ink3 }}>Scroll to explore</span>
        </div>
      </section>

      {/* ── Works ─────────────────────────────────────────────── */}
      <section id="works" style={{ padding: '120px 10vw', position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, color: t.ink }}>
            Selected Work
          </h2>
          <a href="#" className="section-link" style={{ fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', color: t.ink3, textDecoration: 'none', borderBottom: `1px solid ${t.border}`, paddingBottom: 2, transition: 'color 0.2s, border-color 0.2s' }}>
            View all &rarr;
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {[
            { tag: 'AI / Product Design', title: 'Redesigning the Checkout Experience' },
            { tag: 'Strategy / UX', title: 'AI Onboarding Flow' },
            { tag: 'Systems Design', title: 'Design System at Scale' },
            { tag: 'Research / Vision', title: 'Future of Conversational UI' },
          ].map((card, i) => (
            <div key={i} className="work-card">
              <div style={{ aspectRatio: '16/9', background: t.btn, display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.ink3, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Project Mockup
              </div>
              <div style={{ padding: '20px 24px' }}>
                <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: t.accent, marginBottom: 6 }}>{card.tag}</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: t.ink }}>{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
