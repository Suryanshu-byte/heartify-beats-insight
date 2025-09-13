import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, TrendingUp, Users, Zap, Award } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Instant Analysis",
      description: "Get comprehensive heart health reports in under 30 seconds",
      gradient: "from-medical-blue to-medical-blue-dark",
    },
    {
      icon: Shield,
      title: "Clinical Accuracy",
      description: "99.9% accuracy with FDA-compliant analysis standards",
      gradient: "from-heart-red to-secondary",
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "AI-powered predictions help prevent cardiac events",
      gradient: "from-success to-medical-blue",
    },
    {
      icon: Users,
      title: "Patient-Friendly",
      description: "Clear, understandable reports improve patient engagement",
      gradient: "from-warning to-heart-red",
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Easily integrate with existing EMR and practice management systems",
      gradient: "from-primary to-medical-blue-dark",
    },
    {
      icon: Award,
      title: "Evidence-Based",
      description: "Built on peer-reviewed research and clinical best practices",
      gradient: "from-heart-red to-primary",
    },
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">Heartify</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of cardiac care with our AI-powered diagnostic platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <CardContent className="p-6 relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Decorative gradient overlay */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-l ${benefit.gradient} opacity-5 rounded-bl-full`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;