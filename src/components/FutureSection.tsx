import { motion } from "framer-motion";

const FutureSection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
    </div>
    <div className="relative section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">The Future</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
          The Future of Software is{" "}
          <span className="gradient-text">AI-Generated</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Software creation is shifting from manual coding to AI-generated systems. The companies that embrace this shift will build faster, iterate quicker, and scale further than anyone thought possible.
        </p>
        <p className="text-lg text-muted-foreground">
          Klyron represents the future of how companies are built — where artificial intelligence handles the infrastructure so founders can focus on vision, strategy, and growth.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FutureSection;
