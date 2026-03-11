import { FC, useState, useEffect, useRef } from 'react';
import { THEMES } from '../constants/themes';
import { GALLERY, PALETTE } from '../constants/gallery';

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

export default HoverGallery;
