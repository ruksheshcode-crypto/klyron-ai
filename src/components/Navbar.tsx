import { useState } from "react";
import { Menu, X, LogOut, User, Mail } from "lucide-react";
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const userInitial = user?.user_metadata?.full_name?.[0] || user?.email?.[0] || "U";

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
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" asChild>
            <a href="mailto:ruksheshcode@gmail.com?subject=Early%20Access%20Request&body=I%20want%20my%20self%20to%20be%20registered%20for%20the%20early%20access%20of%20the%20vibe%20coding%20tool">
              <Mail className="mr-2 h-3.5 w-3.5" /> Early Access
            </a>
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 outline-none">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.user_metadata?.avatar_url || user.user_metadata?.picture} />
                    <AvatarFallback className="bg-primary/20 text-primary text-sm">{userInitial}</AvatarFallback>
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
            <Button size="sm" variant="outline" className="border-border/50" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          )}
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
          <Button size="sm" className="w-full bg-primary text-primary-foreground" asChild>
            <a href="mailto:ruksheshcode@gmail.com?subject=Early%20Access%20Request&body=I%20want%20my%20self%20to%20be%20registered%20for%20the%20early%20access%20of%20the%20vibe%20coding%20tool" onClick={() => setIsOpen(false)}>
              <Mail className="mr-2 h-3.5 w-3.5" /> Early Access
            </a>
          </Button>
          {user ? (
            <Button size="sm" variant="outline" className="w-full border-border/50 text-destructive" onClick={() => { setIsOpen(false); signOut(); }}>
              <LogOut className="mr-2 h-4 w-4" /> Sign Out
            </Button>
          ) : (
            <Button size="sm" variant="outline" className="w-full border-border/50" onClick={() => { setIsOpen(false); navigate("/auth"); }}>
              Sign In
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
