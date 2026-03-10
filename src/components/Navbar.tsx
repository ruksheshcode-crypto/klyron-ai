import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const userInitial = user?.user_metadata?.full_name?.[0] || user?.email?.[0] || "U";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="section-container flex items-center justify-between h-14">
        <a href="#" className="font-display text-lg font-bold tracking-tight">
          <span className="gradient-text">Klyron</span>
          <span className="text-muted-foreground font-mono text-[10px] ml-1.5 align-super">OS</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}

          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs px-5" asChild>
            <a href="mailto:ruksheshcode@gmail.com?subject=Early%20Access%20Request&body=I%20want%20to%20join%20the%20future%20of%20computing">
              Early Access
            </a>
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="outline-none">
                  <Avatar className="h-7 w-7">
                    <AvatarImage src={user.user_metadata?.avatar_url || user.user_metadata?.picture} />
                    <AvatarFallback className="bg-primary/20 text-primary text-xs">{userInitial}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem className="text-muted-foreground text-xs cursor-default">
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut} className="text-destructive cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" /> Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button size="sm" variant="ghost" className="text-xs text-muted-foreground" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          )}
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass-strong border-t border-border/30 p-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button size="sm" className="w-full bg-primary text-primary-foreground text-xs" asChild>
            <a href="mailto:ruksheshcode@gmail.com?subject=Early%20Access%20Request&body=I%20want%20to%20join%20the%20future%20of%20computing" onClick={() => setIsOpen(false)}>
              Early Access
            </a>
          </Button>
          {user ? (
            <Button size="sm" variant="outline" className="w-full text-destructive text-xs" onClick={() => { setIsOpen(false); signOut(); }}>
              <LogOut className="mr-2 h-3 w-3" /> Sign Out
            </Button>
          ) : (
            <Button size="sm" variant="ghost" className="w-full text-xs text-muted-foreground" onClick={() => { setIsOpen(false); navigate("/auth"); }}>
              Sign In
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
