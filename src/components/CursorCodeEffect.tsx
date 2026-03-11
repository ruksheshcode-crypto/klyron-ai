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
  size: number;
  life: number;
  maxLife: number;
  fadeIn: boolean;
}

const CursorCodeEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const animFrame = useRef<number>(0);
  const lastSpawn = useRef(0);

  const spawn = useCallback((x: number, y: number) => {
    // Place 1-2 static snippets around the cursor
    const count = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < count; i++) {
      const maxLife = 0.6 + Math.random() * 0.6;
      particles.current.push({
        x: x + (Math.random() - 0.5) * 120,
        y: y + (Math.random() - 0.5) * 120,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        opacity: 0,
        size: 10 + Math.random() * 3,
        life: maxLife,
        maxLife,
        fadeIn: true,
      });
    }
    if (particles.current.length > 40) {
      particles.current = particles.current.slice(-40);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      const now = Date.now();
      if (now - lastSpawn.current > 80) {
        spawn(mouse.current.x, mouse.current.y);
        lastSpawn.current = now;
      }
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.life -= 0.008;

        // Fade in quickly, then hold, then fade out
        const progress = 1 - p.life / p.maxLife;
        if (progress < 0.15) {
          p.opacity = (progress / 0.15) * 0.25;
        } else if (p.life < 0.2) {
          p.opacity = (p.life / 0.2) * 0.25;
        } else {
          p.opacity = 0.25;
        }

        ctx.fillStyle = `hsla(185, 100%, 55%, ${p.opacity})`;
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
