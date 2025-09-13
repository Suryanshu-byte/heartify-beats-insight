import heartifyLogo from "@/assets/heartify-logo.png";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={heartifyLogo} 
                alt="Heartify Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Revolutionizing cardiac care with AI-powered diagnostics. 
              Transforming stethoscope readings into comprehensive patient insights.
            </p>
            <div className="flex items-center space-x-1 text-sm text-background/60">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-heart-red fill-heart-red" />
              <span>for better healthcare</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">API</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>&copy; 2024 Heartify. All rights reserved. | HIPAA Compliant | FDA Approved Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;