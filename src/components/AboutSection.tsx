import { motion } from "framer-motion";

const timeline = [
  { era: "1980s", label: "Command Line", desc: "Users typed commands to interact with computers." },
  { era: "1990s", label: "Desktop OS", desc: "GUIs and apps made computing visual — Windows, Mac." },
  { era: "2010s", label: "Mobile & Cloud", desc: "Apps moved to phones and the cloud." },
  { era: "Now", label: "Klyron", desc: "Intent-based computing. No apps. Just results.", highlight: true },
];

const AboutSection = () => (
  <section className="py-28 relative">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs tracking-widest text-primary/70 uppercase">About</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-6">
            The Next Evolution of{" "}
            <span className="gradient-text">Computing</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For decades, computing has been defined by applications — isolated programs designed for single purposes. You open a word processor to write, a spreadsheet to calculate, a browser to search.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Klyron eliminates this paradigm entirely. Instead of navigating between apps, you simply express intent. The operating system understands what you need and generates the perfect tool — instantly, temporarily, intelligently.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This isn't an upgrade to Windows or macOS. It's what comes after.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {timeline.map((t, i) => (
            <motion.div
              key={t.era}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-start gap-5 p-5 rounded-xl transition-colors ${
                t.highlight
                  ? "glass gradient-border glow-sm"
                  : "bg-secondary/20 border border-border/20"
              }`}
            >
              <span className={`font-mono text-sm font-bold flex-shrink-0 mt-0.5 ${
                t.highlight ? "text-primary" : "text-muted-foreground"
              }`}>
                {t.era}
              </span>
              <div>
                <h4 className={`font-semibold mb-1 ${t.highlight ? "text-foreground" : "text-secondary-foreground"}`}>
                  {t.label}
                </h4>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
