import { motion } from "framer-motion";
import { Store, Upload, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Upload,
    title: "Upload Your App",
    desc: "Built something cool? Share it with the Klyron community in minutes.",
  },
  {
    icon: DollarSign,
    title: "Just $1 to Publish",
    desc: "List your app on the marketplace for as little as $1. No hidden fees.",
  },
  {
    icon: Users,
    title: "Reach Every User",
    desc: "Your app is instantly available to all Klyron OS users worldwide.",
  },
];

const MarketplaceSection = () => {
  const navigate = useNavigate();

  return (
    <section id="marketplace" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs tracking-widest text-primary/70 uppercase">Marketplace</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 mb-4">
            Build. Publish. <span className="gradient-text">Earn.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            A developer marketplace where anyone can upload and share apps — starting at just $1.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-7 gradient-border text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-5">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-10 gradient-border glow-md max-w-2xl mx-auto">
            <Store className="h-10 w-10 text-primary mx-auto mb-5" />
            <h3 className="text-2xl font-bold mb-3">
              Be a Member of Our <span className="gradient-text">Early Dev Program</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Get your environment at max performance. Everything free — from app creation to unlimited AI to unlimited marketplace apps.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 glow-sm"
              onClick={() => navigate("/early-dev")}
            >
              Join Early Dev Program
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
