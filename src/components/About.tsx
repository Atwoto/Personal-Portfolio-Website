import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Coffee, Code, Brain, Users } from "lucide-react";
import exampleImage from 'figma:asset/eeff169db0d81386c31a503d2990a706cc96a026.png';

const funFacts = [
  { icon: Coffee, text: "1000+ coffees consumed while debugging", color: "text-amber-600" },
  { icon: Code, text: "Dreams in n8n workflows", color: "text-blue-600" },
  { icon: Brain, text: "Always thinking in automation", color: "text-purple-600" },
  { icon: Users, text: "Helped 50+ businesses scale", color: "text-green-600" }
];

export function About() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-delayed"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                About Me
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <p className="text-xl text-gray-700 dark:text-gray-200 font-medium">
                  I'm an AI automation architect who believes technology should work invisibly in the background, making businesses more efficient and humans more creative.
                </p>
                
                <p>
                  I design and implement AI-powered automation solutions to help businesses save time, scale faster, and make smarter decisions. My approach focuses on creating elegant workflows that feel like magic but are built on solid engineering principles.
                </p>
                
                <p>
                  With expertise spanning workflow automation and artificial intelligence, I bridge the gap between complex technology and practical business needs. My solutions have helped companies reduce manual work by up to 90% while improving accuracy and insights.
                </p>
                
                <p>
                  When I'm not architecting automation workflows, you'll find me exploring the latest developments in AI, contributing to the automation community, and sharing knowledge through workshops and open-source projects.
                </p>
              </div>
            </div>
            
            {/* Fun Facts */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Fun Facts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {funFacts.map((fact, index) => {
                  const IconComponent = fact.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <IconComponent className={`w-5 h-5 ${fact.color}`} />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{fact.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Achievements */}
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 text-blue-700">
                5+ Years Experience
              </Badge>
              <Badge variant="outline" className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 text-purple-700">
                AI Automation Expert
              </Badge>
              <Badge variant="outline" className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 text-green-700">
                Certified Professional
              </Badge>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Professional Photo with Creative Frame */}
            <div className="relative z-10 max-w-md mx-auto">
              <div className="relative group">
                <img
                  src={exampleImage}
                  alt="Hammton Ndeke - Professional Photo"
                  className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  width={400}
                  height={500}
                />
                
                {/* Geometric Frame Elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 border-4 border-blue-500 rounded-lg opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-4 border-purple-500 rounded-lg opacity-60"></div>
                
                {/* Gradient Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 p-1 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>
              </div>
            </div>
            
            {/* Glowing Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur-3xl -z-10 scale-110 animate-pulse"></div>
            
            {/* Floating Code Snippets */}
            <motion.div 
              className="absolute top-8 -right-8 bg-gray-900 text-green-400 p-3 rounded-lg text-xs font-mono shadow-xl opacity-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              if (business.needsAutomation()) {'{'}
              <br />
              &nbsp;&nbsp;callHammton();
              <br />
              {'}'}
            </motion.div>
            
            <motion.div 
              className="absolute bottom-8 -left-8 bg-blue-600 text-white p-3 rounded-lg text-xs font-medium shadow-xl opacity-80"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              🤖 AI Agent: Ready
              <br />
              📊 Efficiency: +300%
            </motion.div>
          </motion.div>
        </div>
      </div>
      

    </section>
  );
}