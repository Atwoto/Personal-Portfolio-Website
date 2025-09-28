import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedText } from "./AnimatedText";
import { FloatingElements, TechIcons } from "./FloatingElements";
import { Badge } from "./ui/badge";

const roles = [
  "AI Automation Engineer",
  "Workflow Architect", 
  "Business Intelligence Builder",
  "Automation Consultant"
];

const trustLogos = [
  "N8n", "Activepieces", "Make.com", "Zapier", "Voiceflow", "AI API Integration"
];

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 lg:pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Floating Elements */}
      <FloatingElements />
      <TechIcons />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Hammton Ndeke
            </h1>
            
            <div className="text-2xl md:text-3xl h-16">
              <AnimatedText 
                texts={roles}
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"
              />
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              I architect AI-powered workflows and intelligent agents that transform how businesses operate – saving thousands of hours while driving smarter, data-driven decisions.
            </p>
          </div>
          
          {/* Trust Signals */}
          <div className="space-y-4">
            <p className="text-sm text-gray-400">Trusted by teams using:</p>
            <div className="flex flex-wrap gap-3">
              {trustLogos.map((logo, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-200"
                >
                  {logo}
                </Badge>
              ))}
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
          >
            <span className="relative z-10">Explore My Work</span>
          </Button>
        </div>
        
        <div className="relative">
          {/* Professional Photo with Creative Frame */}
          <div className="relative z-10 max-w-md mx-auto">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1641312874336-6279a832a3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdWxsJTIwYm9keSUyMHJvYm90JTIwQUklMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc1OTA5MTA4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Automation Technology - Full Body Robot"
                className="w-full rounded-2xl shadow-2xl object-cover"
                width={400}
                height={500}
              />
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 p-1 -z-10">
                <div className="w-full h-full bg-slate-900 rounded-2xl"></div>
              </div>
            </div>
          </div>
          
          {/* Glowing Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-2xl blur-3xl -z-10 scale-110 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-20 animate-ping"></div>
        </div>
      </div>
    </section>
  );
}