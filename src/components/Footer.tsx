const Footer = () => (
  <footer className="border-t border-border/20 py-12">
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#" className="font-display text-lg font-bold gradient-text">
            Klyron
          </a>
          <span className="text-muted-foreground font-mono text-[10px] ml-1 align-super">OS</span>
        </div>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {link}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Klyron. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
