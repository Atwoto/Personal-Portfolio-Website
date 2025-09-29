import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { ExternalLink, Zap, Target, Mail, BarChart3, MessageSquare } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "🤖 Calendly Invitee AI Agent",
    description: "Intelligent meeting preparation system that researches attendees and generates personalized briefings automatically",
    tags: ["n8n", "GPT-4", "Calendly API"],
    impact: "90% reduction in prep time",
    gradient: "from-blue-500 to-cyan-400",
    icon: Zap,
    metrics: ["2-3 hours → 10 minutes", "100% consistency", "300% meeting quality"]
  },
  {
    id: 2,
    title: "📊 DQ AI Assistant - Digital Transformation Chatbot",
    description: "Intelligent customer engagement assistant for Digital Qatalyst's digital transformation services. Built a conversational AI that guides prospects through service discovery, answers technical questions, and qualifies leads automatically.",
    tags: ["Voiceflow", "OpenAI GPT", "JavaScript", "CRM Webhooks", "Analytics APIs"],
    impact: "40% increase in qualified leads",
    gradient: "from-blue-800 to-blue-600",
    icon: MessageSquare,
    metrics: ["60% reduction in response time", "24/7 availability", "40% lead generation increase"],
    client: "Digital Qatalyst",
    website: "digitalqatalyst.com",
    isEnterprise: true
  },
  {
    id: 3,
    title: "🎯 Sub AI Lead Agent", 
    description: "Advanced lead nurturing system with behavioral scoring and automated multi-channel follow-ups",
    tags: ["n8n", "Airtable", "Zapier", "AI Models"],
    impact: "300% increase in conversions",
    gradient: "from-purple-500 to-pink-400",
    icon: Target,
    metrics: ["85% qualification accuracy", "5x faster response", "60% cost reduction"]
  },
  {
    id: 4,
    title: "📧 AI Email Analysis Agent",
    description: "Smart email intelligence platform that processes, categorates, and summarizes communications with actionable insights",
    tags: ["n8n", "Python", "NLP", "Email APIs"],
    impact: "75% faster email processing",
    gradient: "from-green-500 to-emerald-400",
    icon: Mail,
    metrics: ["10,000+ emails/hour", "95% accuracy", "Real-time insights"]
  },
  {
    id: 5,
    title: "📊 Duka Insights AI Chatbot",
    description: "Proof of Concept for a business intelligence assistant. Problem: Business owners lacked quick access to real-time, actionable insights across sales, customers, and inventory. Solution: Built a POC chatbot in n8n integrated with Google Gemini and multiple APIs that interprets natural language questions, routes queries to the correct data sources, fetches analytics in real time, and generates structured insights. Impact: Demonstrated potential for accelerating decision-making with promising early results.",
    tags: ["n8n", "Google Gemini", "Dashboard APIs"],
    impact: "POC - Promising results",
    gradient: "from-orange-500 to-red-400",
    icon: BarChart3,
    metrics: ["Natural language queries", "Real-time analytics", "Multi-source data"]
  }
];

export function Projects() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, #00D4FF 1px, transparent 0)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI-powered automation solutions that drive real business results and transform operations
          </motion.p>
        </div>
        
        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className={`group relative overflow-hidden border-0 bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 h-full ${project.isEnterprise ? 'ring-2 ring-blue-100 hover:ring-blue-300 dark:ring-blue-800 dark:hover:ring-blue-600' : ''}`}>
                  {/* Gradient Header */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  {/* Enterprise Badge */}
                  {project.isEnterprise && (
                    <div className="absolute top-3 left-3 z-10">
                      <Badge className="bg-blue-600 text-white text-xs px-2 py-1 shadow-md">
                        Enterprise Client
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4 relative">
                    {/* Floating Icon */}
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center opacity-20 group-hover:opacity-100 transition-all duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="space-y-3">
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      
                      {/* Client Info for DQ project */}
                      {project.client && (
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs border-blue-200 text-blue-700 bg-blue-50">
                              {project.client}
                            </Badge>
                            <span className="text-xs text-blue-600 font-medium">
                              {project.website}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <Badge 
                        variant="secondary" 
                        className={`bg-gradient-to-r ${project.gradient} text-white border-0 shadow-lg`}
                      >
                        {project.impact}
                      </Badge>
                      
                      <CardDescription className="text-base leading-relaxed text-gray-600">
                        {project.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 space-y-6">
                    {/* Key Metrics */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wide">Key Results</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-200">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="outline" 
                            className="text-xs hover:bg-gray-100 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    

                  </CardContent>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}