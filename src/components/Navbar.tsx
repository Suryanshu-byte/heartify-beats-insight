import { Button } from "@/components/ui/button";
import heartifyLogo from "@/assets/heartify-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src={heartifyLogo} 
            alt="Heartify Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-foreground hover:text-primary transition-colors">
            Benefits
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Login
          </Button>
          <Button className="bg-gradient-primary text-white hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;