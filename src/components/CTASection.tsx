import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-24 relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative glass rounded-2xl p-10 sm:p-16 gradient-border overflow-hidden text-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Start Building <span className="gradient-text">With AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Join the next generation of builders creating companies with AI-powered software infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 glow-border" asChild>
              <a href="mailto:ruksheshcode@gmail.com?subject=Early%20Access%20Request&body=I%20want%20my%20self%20to%20be%20registered%20for%20the%20early%20access%20of%20the%20vibe%20coding%20tool">
                <Mail className="mr-2 h-4 w-4" /> Request Early Access <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border/50 text-foreground hover:bg-secondary font-semibold text-base px-8" asChild>
              <a href="mailto:ruksheshcode@gmail.com?subject=Early%20Access%20Request&body=I%20want%20my%20self%20to%20be%20registered%20for%20the%20early%20access%20of%20the%20vibe%20coding%20tool">
                <Mail className="mr-2 h-4 w-4" /> Request Early Access
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
