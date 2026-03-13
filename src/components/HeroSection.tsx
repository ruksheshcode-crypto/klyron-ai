import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const commands = [
  "Edit my video",
  "Create a presentation",
  "Analyze this dataset",
  "Design a logo",
  "Write a business plan",
];

const HeroSection = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const command = commands[currentCommand];
    if (isTyping) {
      if (displayText.length < command.length) {
        const timeout = setTimeout(() => {
          setDisplayText(command.slice(0, displayText.length + 1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentCommand((prev) => (prev + 1) % commands.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentCommand]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/6 blur-[120px]" />

      <div className="relative section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-primary/80 px-4 py-2 rounded-full glass">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            NEXT-GEN COMPUTING PLATFORM
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-6"
        >
          Computing
          <br />
          <span className="gradient-text">Without Apps.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance"
        >
          The first AI Operating System that understands your intent
          and builds the tools you need — instantly.
        </motion.p>

        {/* Terminal demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-lg mx-auto mb-12"
        >
          <div className="glass rounded-xl p-1 glow-md">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border/30">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground ml-2">klyron://command</span>
            </div>
            <div className="px-5 py-5 text-left">
              <div className="flex items-center gap-2">
                <span className="text-primary font-mono text-sm">→</span>
                <span className="font-mono text-sm text-foreground">{displayText}</span>
                <span className="terminal-cursor text-primary font-mono text-sm">▊</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 glow-sm"
            asChild
          >
            <a href="mailto:aradhya@klyron.io,rukshesh@klyron.io?subject=Early%20Access%20Request&body=I%20want%20to%20join%20the%20future%20of%20computing">
              Join the Future <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border/50 text-foreground hover:bg-secondary font-semibold text-base px-8"
            onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
          >
            See How It Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
