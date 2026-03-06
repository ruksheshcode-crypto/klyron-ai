import { motion } from "framer-motion";
import { Code, Layers, Bot, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "AI Vibe Coding",
    desc: "Describe the system you want and Klyron generates the complete application structure — frontend, backend, and logic.",
    tags: ["Natural Language", "Full-Stack", "Instant"],
  },
  {
    icon: Layers,
    title: "Industry Modes",
    desc: "Specialized AI environments tuned for your industry with pre-built templates, workflows, and integrations.",
    tags: ["eCommerce", "SaaS", "Finance", "Education"],
  },
  {
    icon: Bot,
    title: "Workflow Automation",
    desc: "Deploy AI agents that automate repetitive business processes — from lead nurturing to invoice processing.",
    tags: ["AI Agents", "Triggers", "Pipelines"],
  },
  {
    icon: BarChart3,
    title: "Business Dashboards",
    desc: "Real-time analytics and performance insights so you always know what's working and what needs attention.",
    tags: ["Real-Time", "KPIs", "Custom Views"],
  },
  {
    icon: Globe,
    title: "Website & Portal Builder",
    desc: "Create websites, customer portals, and internal tools instantly — all connected to your backend systems.",
    tags: ["Drag & Drop", "Portals", "Instant Deploy"],
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
    <div className="relative section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Platform Features</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Everything You Need to{" "}
          <span className="gradient-text">Build & Scale</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          One platform. Every tool. Powered by AI.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`glass rounded-xl p-7 gradient-border group hover:bg-card/80 transition-colors ${
              i >= 3 ? "lg:col-span-1 md:col-span-1" : ""
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">{f.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{f.desc}</p>
            <div className="flex flex-wrap gap-2">
              {f.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/80">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
