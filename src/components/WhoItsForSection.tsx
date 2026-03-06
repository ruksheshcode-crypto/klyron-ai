import { motion } from "framer-motion";
import { Lightbulb, Building2, ShoppingBag, Users, Cpu } from "lucide-react";

const audiences = [
  { icon: Lightbulb, title: "Startup Founders", desc: "Launch MVPs, build internal tools, and automate operations from day one — without a dev team." },
  { icon: Building2, title: "SaaS Companies", desc: "Prototype features faster, create admin dashboards, and deploy AI-powered automation for customers." },
  { icon: ShoppingBag, title: "Online Businesses", desc: "Generate storefronts, manage inventory systems, and build customer portals in minutes." },
  { icon: Users, title: "Operators & Teams", desc: "Create workflow automations, reporting dashboards, and internal tools without writing code." },
  { icon: Cpu, title: "AI-Native Entrepreneurs", desc: "Build the next generation of AI-powered companies with infrastructure designed for the future." },
];

const WhoItsForSection = () => (
  <section id="who-its-for" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
    <div className="relative section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Who It's For</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
          Built for <span className="gradient-text">Ambitious Builders</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass rounded-xl p-7 gradient-border group hover:bg-card/80 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <a.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsForSection;
