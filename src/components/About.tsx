import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Heart, value: "50k+", label: "Lives Improved" },
    { icon: Users, value: "500+", label: "Healthcare Partners" },
    { icon: Globe, value: "25+", label: "Countries Served" },
    { icon: Award, value: "15+", label: "Medical Awards" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Revolutionizing <br />
                <span className="text-primary">Cardiac Care</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Heartify, we're on a mission to democratize advanced cardiac diagnostics. 
                Our cutting-edge AI technology transforms traditional stethoscope readings into 
                comprehensive, actionable medical insights.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded by a team of cardiologists, AI researchers, and healthcare innovators, 
                we're bridging the gap between clinical expertise and artificial intelligence 
                to improve patient outcomes worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary text-white hover:opacity-90 transition-opacity"
                >
                  Learn More About Us
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Contact Our Team
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;