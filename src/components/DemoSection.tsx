import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DemoSection = () => (
  <section className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="relative section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs tracking-widest text-primary/70 uppercase">Live Demo</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-4">
          See It in <span className="gradient-text">Action</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass rounded-2xl overflow-hidden glow-md">
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30 bg-card/60">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground ml-3">klyron://workspace</span>
          </div>

          {/* Demo content */}
          <div className="p-8 space-y-6">
            {/* User input */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent text-xs font-mono font-bold">U</span>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-mono mb-1">User</p>
                <p className="text-foreground">"Create a presentation about AI trends in 2026"</p>
              </div>
            </div>

            {/* System processing */}
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/5 border border-primary/10">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono text-xs text-primary/80">
                Analyzing intent → Generating presentation editor → Loading AI templates...
              </span>
            </div>

            {/* Generated UI preview */}
            <div className="glass rounded-xl p-5 gradient-border">
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-primary/60">Generated Tool: Presentation Editor</span>
                <span className="text-xs text-muted-foreground/50 font-mono">ready in 0.3s</span>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["Slide 1", "Slide 2", "Slide 3", "+"].map((label) => (
                  <div
                    key={label}
                    className="aspect-[16/9] rounded-md bg-secondary/60 border border-border/30 flex items-center justify-center"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="h-7 px-3 rounded-md bg-primary/10 flex items-center">
                  <span className="font-mono text-[10px] text-primary/70">AI Assist</span>
                </div>
                <div className="h-7 px-3 rounded-md bg-secondary/60 flex items-center">
                  <span className="font-mono text-[10px] text-muted-foreground">Export</span>
                </div>
                <ArrowRight className="ml-auto h-3 w-3 text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DemoSection;
