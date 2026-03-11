import { useEffect, useRef, FC } from "react";

const Cursor: FC<{ dark: boolean }> = () => {
  const pointerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const entered = useRef(false);
  const tagPos = useRef({ x: 0, y: 0 });
  const tagTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const pointer = pointerRef.current;
    const tag = tagRef.current;
    if (!pointer || !tag) return;
    let rafId: number;

    function lerp() {
      const ease = 0.15;
      tagPos.current.x += (tagTarget.current.x - tagPos.current.x) * ease;
      tagPos.current.y += (tagTarget.current.y - tagPos.current.y) * ease;
      tag!.style.left = `${tagPos.current.x}px`;
      tag!.style.top = `${tagPos.current.y}px`;
      rafId = requestAnimationFrame(lerp);
    }
    rafId = requestAnimationFrame(lerp);

    function onMove(e: MouseEvent) {
      pointer!.style.left = `${e.clientX}px`;
      pointer!.style.top = `${e.clientY}px`;
      tagTarget.current = { x: e.clientX + 18, y: e.clientY + 18 };
      if (!entered.current) {
        tagPos.current = { x: e.clientX + 18, y: e.clientY + 18 };
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
      cancelAnimationFrame(rafId);
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
          <path d="M4.5 4.5 L20 10.5 L12.5 12.5 L10.5 20 L4.5 4.5Z" fill="#5551FF" stroke="#FFFFFF" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      </div>
      <div
        ref={tagRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          background: '#5551FF',
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

export default Cursor;
