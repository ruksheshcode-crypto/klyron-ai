import { useEffect, useRef, useCallback } from "react";

const codeSnippets = [
  "const ai =", "await gen()", "import {}", "=> {}", "async fn",
  "0x1F4A1", "null", "true", "fetch()", "parse()",
  "model.run", "token[]", "neural.init", "cpu.exec",
  "void 0", "yield*", "::after", "0b1010", "new Map()",
  "<T>", "Promise", "export", "return", "class AI",
  "kernel.boot", "sys.call()", "pipe |>", "match =>",
];

interface Particle {
  x: number;
  y: number;
  text: string;
  opacity: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
}

const CursorCodeEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const animFrame = useRef<number>(0);
  const lastSpawn = useRef(0);

  const spawn = useCallback((x: number, y: number) => {
    const count = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) {
      particles.current.push({
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        opacity: 0.4 + Math.random() * 0.3,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -0.3 - Math.random() * 0.7,
        size: 10 + Math.random() * 3,
        life: 1,
      });
    }
    // cap particles
    if (particles.current.length > 60) {
      particles.current = particles.current.slice(-60);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onScroll = () => {
      canvas.height = document.documentElement.scrollHeight;
    };
    window.addEventListener("scroll", onScroll);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY + window.scrollY };
      const now = Date.now();
      if (now - lastSpawn.current > 60) {
        spawn(mouse.current.x, mouse.current.y);
        lastSpawn.current = now;
      }
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '12px "JetBrains Mono", monospace';

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.008;
        p.opacity = Math.max(0, p.life * 0.35);

        ctx.fillStyle = `hsla(185, 100%, 50%, ${p.opacity})`;
        ctx.font = `${p.size}px "JetBrains Mono", monospace`;
        ctx.fillText(p.text, p.x, p.y);
      });

      particles.current = particles.current.filter((p) => p.life > 0);
      animFrame.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [spawn]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CursorCodeEffect;
