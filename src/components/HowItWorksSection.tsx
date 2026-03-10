import { motion } from "framer-motion";
import { MessageSquare, Brain, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    num: "01",
    title: "State Your Task",
    desc: '"Edit my video" or "Create a presentation" — just say what you need.',
    example: "Create a presentation →",
  },
  {
    icon: Brain,
    num: "02",
    title: "AI Understands Intent",
    desc: "The system analyzes your request, context, and preferences to determine exactly what you need.",
    example: "Parsing intent...",
  },
  {
    icon: Zap,
    num: "03",
    title: "Tool Generated Instantly",
    desc: "A purpose-built interface appears in milliseconds — no downloads, no installations, no waiting.",
    example: "Generating editor...",
  },
  {
    icon: CheckCircle,
    num: "04",
    title: "Complete Seamlessly",
    desc: "Work with a tool perfectly tailored to your task. When done, it dissolves — no clutter, no bloat.",
    example: "Task complete ✓",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-28 relative">
    <div className="absolute inset-0 grid-bg opacity-50" />
    <div className="relative section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-mono text-xs tracking-widest text-primary/70 uppercase">Process</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-4">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Four steps from thought to execution. No apps required.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/20 to-transparent" />
            )}

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl glass gradient-border flex items-center justify-center mx-auto mb-5">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="font-mono text-xs text-primary/60 tracking-wider">{s.num}</span>
              <h3 className="font-semibold text-lg mt-1 mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <span className="inline-block font-mono text-xs text-primary/50 px-3 py-1 rounded-full bg-primary/5">
                {s.example}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
