import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-28 relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative glass rounded-3xl p-12 sm:p-20 gradient-border overflow-hidden text-center"
      >
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[200px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
            Stop opening apps.
            <br />
            <span className="gradient-text">Start commanding your computer.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Join the waitlist and be among the first to experience
            the future of computing.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-10 glow-sm"
            asChild
          >
            <a href="mailto:aradhya@klyron.io,rukshesh@klyron.io?subject=Early%20Access%20Request&body=I%20want%20to%20join%20the%20future%20of%20computing">
              Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
