import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  const features = [
    "30-day free trial",
    "No setup fees",
    "24/7 support",
    "HIPAA compliant",
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-medical-blue to-heart-red">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your Practice?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals already using Heartify to 
              provide better cardiac care with AI-powered diagnostics.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Schedule a Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Cancel anytime • Instant activation
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;