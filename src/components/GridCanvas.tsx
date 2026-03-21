import { FC, useEffect, useRef } from "react";

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

export default GridCanvas;