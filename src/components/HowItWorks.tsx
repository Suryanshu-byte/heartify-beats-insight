import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Brain, FileText, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Stethoscope,
      title: "Capture Heart Frequency",
      description: "Use your stethoscope to capture heart sounds and frequency data with precision.",
      color: "text-medical-blue",
      bgColor: "bg-medical-blue/10",
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Our advanced LLM processes the frequency data using machine learning algorithms.",
      color: "text-primary",
      bgColor: "bg-gradient-primary",
    },
    {
      icon: FileText,
      title: "Generate Report",
      description: "Receive a comprehensive patient report with insights and recommendations.",
      color: "text-heart-red",
      bgColor: "bg-heart-red/10",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-primary">Heartify</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform heart sounds into actionable medical insights
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${step.bgColor} mb-6`}>
                      {step.bgColor.includes('gradient') ? (
                        <step.icon className="h-8 w-8 text-white" />
                      ) : (
                        <step.icon className={`h-8 w-8 ${step.color}`} />
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    
                    <div className="mt-6 text-2xl font-bold text-muted-foreground/30">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </CardContent>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;