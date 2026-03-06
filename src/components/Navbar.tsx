import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          <span className="gradient-text">Klyron</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Who It's For"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-").replace("'", "")}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
            Start Building
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-border/30 p-4 space-y-3">
          {["Features", "How It Works", "Who It's For"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-").replace("'", "")}`}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button size="sm" className="w-full bg-primary text-primary-foreground" onClick={() => { setIsOpen(false); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}>Start Building</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
