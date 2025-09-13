import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Stethoscope, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-medical-blue-light/10 to-heart-red-light/10 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-8 animate-fade-in">
            <div className="p-3 bg-medical-blue/10 rounded-full animate-float">
              <Stethoscope className="h-8 w-8 text-medical-blue" />
            </div>
            <div className="p-3 bg-gradient-primary rounded-full animate-float" style={{ animationDelay: '1s' }}>
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div className="p-3 bg-heart-red/10 rounded-full animate-float" style={{ animationDelay: '2s' }}>
              <Heart className="h-8 w-8 text-heart-red" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            Heart Health Analysis
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transform stethoscope readings into comprehensive patient reports using advanced AI. 
            Revolutionizing cardiac care with intelligent diagnostics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-glow"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">&lt;30s</div>
              <div className="text-muted-foreground">Analysis Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10k+</div>
              <div className="text-muted-foreground">Reports Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;