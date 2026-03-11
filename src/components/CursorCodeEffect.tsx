import { useEffect, useRef } from "react";

const codeLines = [
  '<!DOCTYPE html>',
  '<html lang="en">',
  '<head>',
  '  <meta charset="UTF-8" />',
  '  <meta name="viewport" content="width=device-width" />',
  '  <title>Klyron OS</title>',
  '  <link rel="stylesheet" href="core.css" />',
  '</head>',
  '<body>',
  '  <div id="klyron-root">',
  '    <header class="os-shell">',
  '      <nav class="intent-bar">',
  '        <input type="text" placeholder="What do you need?" />',
  '        <button class="ai-trigger">Execute</button>',
  '      </nav>',
  '    </header>',
  '    <main class="workspace">',
  '      <section class="tool-canvas">',
  '        <div class="generated-ui" data-intent="active">',
  '          <script type="module">',
  '            import { AI } from "./core/engine.js";',
  '            const os = new AI({ mode: "intent" });',
  '            os.listen("user.command", async (e) => {',
  '              const tool = await os.generate(e.intent);',
  '              document.querySelector(".tool-canvas")',
  '                .appendChild(tool.render());',
  '            });',
  '            os.on("ready", () => {',
  '              console.log("Klyron OS v2.0 loaded");',
  '              os.activate();',
  '            });',
  '          </script>',
  '        </div>',
  '        <aside class="ai-context-panel">',
  '          <div class="memory-graph" />',
  '          <div class="intent-history" />',
  '        </aside>',
  '      </section>',
  '    </main>',
  '    <footer class="os-status">',
  '      <span class="uptime">System Active</span>',
  '      <span class="ai-status">AI: Online</span>',
  '    </footer>',
  '  </div>',
  '</body>',
  '</html>',
];

const CursorCodeEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animFrame = useRef<number>(0);

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
    };
    window.addEventListener("mousemove", onMove);

    const lineHeight = 20;
    const startX = 40;
    const revealRadius = 250;

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '13px "JetBrains Mono", monospace';

      const mx = mouse.current.x;
      const my = mouse.current.y + window.scrollY;

      // Calculate how many lines fit on the page
      const totalHeight = Math.max(document.documentElement.scrollHeight, canvas.height);
      const scrollY = window.scrollY;

      // Only render lines visible in viewport (with buffer)
      const firstVisibleLine = Math.max(0, Math.floor((scrollY - 100) / lineHeight));
      const lastVisibleLine = Math.min(codeLines.length - 1, Math.ceil((scrollY + canvas.height + 100) / lineHeight));

      for (let i = firstVisibleLine; i <= lastVisibleLine; i++) {
        const lineText = codeLines[i % codeLines.length];
        const y = (i * lineHeight + 14) - scrollY;

        // Calculate distance from mouse to this line
        const lineCenterY = i * lineHeight + 10;
        const dx = mx - startX - (lineText.length * 3.5);
        const dy = my - lineCenterY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < revealRadius) {
          const opacity = Math.max(0, 0.35 * (1 - dist / revealRadius));
          
          // Color keywords differently
          const indent = lineText.length - lineText.trimStart().length;
          const trimmed = lineText.trimStart();
          
          if (trimmed.startsWith('<') || trimmed.startsWith('</')) {
            ctx.fillStyle = `hsla(185, 100%, 55%, ${opacity})`;
          } else if (trimmed.startsWith('import') || trimmed.startsWith('const') || trimmed.startsWith('await') || trimmed.startsWith('async')) {
            ctx.fillStyle = `hsla(270, 100%, 70%, ${opacity})`;
          } else if (trimmed.startsWith('//') || trimmed.startsWith('console')) {
            ctx.fillStyle = `hsla(120, 40%, 50%, ${opacity})`;
          } else {
            ctx.fillStyle = `hsla(200, 60%, 60%, ${opacity})`;
          }

          ctx.fillText(lineText, startX, y);
        }
      }

      animFrame.current = requestAnimationFrame(loop);
    };
    loop();

    const onScroll = () => {}; // loop handles it via scrollY
    window.addEventListener("scroll", onScroll);

    return () => {
      cancelAnimationFrame(animFrame.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CursorCodeEffect;
