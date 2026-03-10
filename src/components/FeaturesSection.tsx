import { motion } from "framer-motion";
import { Sparkles, Download, Cpu, Database, Zap } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Intent-Based Computing",
    desc: "No menus, no app stores. Describe what you want and the OS understands and delivers.",
  },
  {
    icon: Download,
    title: "Zero Installations",
    desc: "Every tool is generated on-the-fly. No downloads, no updates, no storage wasted.",
  },
  {
    icon: Cpu,
    title: "AI-Generated Tools",
    desc: "Purpose-built interfaces appear for every task — perfectly tailored, instantly ready.",
  },
  {
    icon: Database,
    title: "Personal Knowledge System",
    desc: "Your work history, preferences, and patterns are remembered. The OS gets smarter with you.",
  },
  {
    icon: Zap,
    title: "Ultra-Fast Automation",
    desc: "Chain tasks together naturally. The OS anticipates what comes next and prepares it.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-28 relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="font-mono text-xs tracking-widest text-primary/70 uppercase">Capabilities</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-4">
          Built for the <span className="gradient-text">Post-App Era</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Everything you need, nothing you don't.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-2xl p-7 gradient-border group hover:bg-card/60 transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
