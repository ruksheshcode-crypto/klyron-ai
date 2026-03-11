import { motion } from "framer-motion";
import { ArrowLeft, Zap, Cpu, Store, Infinity, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const perks = [
  {
    icon: Cpu,
    title: "Max Performance Environment",
    desc: "Your dev environment runs on dedicated high-performance infrastructure — no throttling, no queues.",
  },
  {
    icon: Sparkles,
    title: "Unlimited AI Access",
    desc: "Full access to all Klyron AI models with no usage caps. Build smarter, faster, without limits.",
  },
  {
    icon: Store,
    title: "Free Marketplace Publishing",
    desc: "Publish unlimited apps to the Klyron marketplace at zero cost. No listing fees, ever.",
  },
  {
    icon: Infinity,
    title: "Unlimited Free Marketplace Apps",
    desc: "Download and use every app on the marketplace for free — all paid apps unlocked for early devs.",
  },
  {
    icon: Zap,
    title: "Free App Creation Tools",
    desc: "All creation tools, templates, and frameworks are completely free. Build anything without paying a cent.",
  },
  {
    icon: Shield,
    title: "Priority Support & Early Features",
    desc: "Get direct access to the Klyron team, priority bug fixes, and early access to new platform features.",
  },
];

const EarlyDev = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="section-container flex items-center h-14 gap-4">
          <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <a href="/" className="font-display text-lg font-bold tracking-tight">
            <span className="gradient-text">Klyron</span>
            <span className="text-muted-foreground font-mono text-[10px] ml-1.5 align-super">OS</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/6 blur-[120px]" />

        <div className="relative section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-primary/80 px-4 py-2 rounded-full glass mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              EARLY DEV PROGRAM
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
              Everything Free.
              <br />
              <span className="gradient-text">No Exceptions.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
              Join our Early Dev Program and get full access to the Klyron platform —
              max performance environments, unlimited AI, free marketplace, and more. All at zero cost.
            </p>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 glow-sm"
              asChild
            >
              <a href="mailto:ruksheshcode@gmail.com?subject=Early%20Dev%20Program%20Application&body=I%20want%20to%20join%20the%20Early%20Dev%20Program%20for%20Klyron%20OS">
                Apply Now — It's Free
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-widest text-primary/70 uppercase">What You Get</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
              Pro Perks, <span className="gradient-text">Zero Price</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Early devs get everything — no limits, no paywalls, no catches.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-7 gradient-border group hover:bg-card/60 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <p.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 relative">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 sm:p-20 gradient-border text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-primary/8 blur-[120px]" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
                Start Building <span className="gradient-text">Today</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                No credit card. No trial period. Just pure, unlimited access to build the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 glow-sm"
                  asChild
                >
                  <a href="mailto:ruksheshcode@gmail.com?subject=Early%20Dev%20Program%20Application&body=I%20want%20to%20join%20the%20Early%20Dev%20Program%20for%20Klyron%20OS">
                    Join Early Dev Program
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border/50 text-foreground hover:bg-secondary font-semibold text-base px-8"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-12">
        <div className="section-container text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Klyron. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EarlyDev;
