import { motion } from "framer-motion";
import { Clock, DollarSign, Puzzle, Zap } from "lucide-react";

const problems = [
  { icon: Clock, title: "Development is Slow", desc: "Building internal systems often takes months when it should take hours." },
  { icon: DollarSign, title: "Hiring is Expensive", desc: "Finding and retaining qualified developers costs startups a fortune." },
  { icon: Puzzle, title: "Tools Are Fragmented", desc: "Businesses juggle dozens of disconnected platforms to run operations." },
  { icon: Zap, title: "Automation is Hard", desc: "Setting up automated workflows requires technical expertise most teams lack." },
];

const ProblemSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
    <div className="relative section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">The Problem</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Building Software Shouldn't Be <span className="gradient-text">This Hard</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Modern businesses face critical challenges that slow growth and drain resources.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-xl p-6 gradient-border group hover:bg-card/80 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <p.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
