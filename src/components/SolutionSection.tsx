import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const SolutionSection = () => (
  <section className="py-24 relative">
    <div className="section-container">
      <div className="relative glass rounded-2xl p-10 sm:p-16 gradient-border overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-accent/5 blur-[80px]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Cpu className="h-7 w-7 text-primary" />
          </div>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">The Solution</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            The AI Operating System for{" "}
            <span className="gradient-text">Building Companies</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-4">
            Klyron is a new category of platform — an AI operating system that lets you create software, build systems, and automate workflows with artificial intelligence.
          </p>
          <p className="text-muted-foreground">
            Stop stitching together tools. Start building with intelligence.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SolutionSection;
