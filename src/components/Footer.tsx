const footerLinks = {
  Product: ["Features", "Pricing", "Integrations", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "API Reference", "Community", "Tutorials"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => (
  <footer className="border-t border-border/30 py-16">
    <div className="section-container">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="font-display text-xl font-bold gradient-text">Klyron</a>
          <p className="text-sm text-muted-foreground mt-3">
            The AI operating system for building businesses.
          </p>
        </div>
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-display font-semibold text-sm mb-4">{category}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/30 mt-12 pt-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Klyron. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
