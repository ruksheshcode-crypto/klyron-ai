import { motion } from "framer-motion";
import { MessageSquare, Sparkles, Sliders, Rocket } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "Describe What You Want", desc: "Tell Klyron what you need in plain language — an app, a workflow, a dashboard, or an entire system." },
  { icon: Sparkles, num: "02", title: "AI Generates the System", desc: "Klyron's AI engine builds your software architecture, logic, and interfaces in seconds." },
  { icon: Sliders, num: "03", title: "Customize & Refine", desc: "Fine-tune your platform with visual tools and natural language commands until it's exactly right." },
  { icon: Rocket, num: "04", title: "Launch & Scale", desc: "Deploy your business infrastructure and let AI agents run your operations while you grow." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          From Idea to Infrastructure in{" "}
          <span className="gradient-text">Minutes</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative text-center"
          >
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
            )}
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 gradient-border">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xs text-primary font-mono font-bold">{s.num}</span>
            <h3 className="font-display font-semibold text-lg mt-2 mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
