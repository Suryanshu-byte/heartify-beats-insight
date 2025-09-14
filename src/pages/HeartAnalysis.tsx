import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Heart, Mic, MicOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeartAnalysis = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<"connect" | "recording" | "analyzing">("connect");
  const [progress, setProgress] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [countdown, setCountdown] = useState(60);

  // Animated text for connection step
  const [displayText, setDisplayText] = useState("");
  const fullText = "Please connect your Stethoscope with your device";

  useEffect(() => {
    if (step === "connect") {
      let index = 0;
      const timer = setInterval(() => {
        setDisplayText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(timer);
          // Auto advance to recording after animation completes
          setTimeout(() => {
            setStep("recording");
            setIsRecording(true);
          }, 2000);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [step]);

  // Recording countdown
  useEffect(() => {
    if (step === "recording" && isRecording) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            setIsRecording(false);
            setStep("analyzing");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [step, isRecording]);

  // Progress animation for analyzing step
  useEffect(() => {
    if (step === "analyzing") {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            // Here you could navigate to results page or show results
            return 100;
          }
          return prev + 2;
        });
      }, 150);
      return () => clearInterval(timer);
    }
  }, [step]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/5 to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Heart Analysis</h1>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8">
            {step === "connect" && (
              <div className="text-center space-y-8">
                <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                
                <div className="min-h-[60px] flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-primary">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>1. Connect your stethoscope to the AUX port</p>
                  <p>2. Place the stethoscope on your chest</p>
                  <p>3. Stay still and breathe normally</p>
                </div>
              </div>
            )}

            {step === "recording" && (
              <div className="text-center space-y-8">
                <div className="w-32 h-32 mx-auto bg-gradient-primary rounded-full flex items-center justify-center relative">
                  {isRecording && (
                    <div className="absolute inset-0 rounded-full bg-heart-red/20 animate-ping"></div>
                  )}
                  <Mic className="h-16 w-16 text-white" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-primary">Recording Heart Sounds</h2>
                  <div className="text-6xl font-mono text-heart-red font-bold">
                    {formatTime(countdown)}
                  </div>
                  <p className="text-muted-foreground">Stay still and breathe normally</p>
                </div>

                {/* Visual waveform simulation */}
                <div className="flex items-center justify-center space-x-1 h-16">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-2 bg-gradient-primary rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 40 + 10}px`,
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: "0.8s"
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === "analyzing" && (
              <div className="text-center space-y-8">
                <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white animate-pulse" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-primary">
                    Please Wait
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Your Heart frequency has been examined by our AI Doctor
                  </p>
                </div>

                <div className="space-y-4">
                  <Progress value={progress} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    Processing: {Math.round(progress)}%
                  </p>
                </div>

                <div className="text-sm text-muted-foreground space-y-2">
                  <p>🔍 Analyzing heart rhythm patterns</p>
                  <p>🧠 AI processing frequency data</p>
                  <p>📊 Generating comprehensive report</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HeartAnalysis;