import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "motion/react";
import { useState } from "react";

const skillCategories = [
  {
    category: "🚀 Automation Platforms",
    skills: ["n8n", "Zapier", "Make", "Integromat"],
    icon: "⚡",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    category: "🧠 AI & Machine Learning",
    skills: ["GPT-4", "Google Gemini", "Claude", "Custom Models", "LangChain"],
    icon: "🤖",
    gradient: "from-purple-500 to-pink-400"
  },
  {
    category: "📊 Data & Integration", 
    skills: ["Airtable", "APIs", "Python", "SQL", "Webhook Management"],
    icon: "🔗",
    gradient: "from-green-500 to-emerald-400"
  },
  {
    category: "⚡ Advanced Tools",
    skills: ["Docker", "Git", "Calendly", "Slack", "Gmail", "CRM Integration", "Business Intelligence"],
    icon: "🛠️",
    gradient: "from-orange-500 to-red-400"
  }
];

export function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-purple-950"></div>
      
      {/* Floating Skill Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {skillCategories.flatMap((category, catIndex) => 
          category.skills.slice(0, 3).map((skill, skillIndex) => (
            <motion.div
              key={`${catIndex}-${skillIndex}`}
              className={`absolute bg-gradient-to-r ${category.gradient} rounded-full opacity-10 text-white flex items-center justify-center text-xs font-medium`}
              style={{
                width: `${60 + Math.random() * 40}px`,
                height: `${60 + Math.random() * 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              {skill}
            </motion.div>
          ))
        )}
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skills Consultations
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The technologies and platforms I use to build intelligent automation solutions
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCategory(index)}
              onHoverEnd={() => setHoveredCategory(null)}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden group h-full">
                {/* Gradient Header */}
                <div className={`h-1 bg-gradient-to-r ${category.gradient} group-hover:h-2 transition-all duration-300`}></div>
                
                <CardHeader className="pb-4 relative">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white transition-all duration-300">
                      {category.category}
                    </CardTitle>
                    <div className={`text-2xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}>
                      {category.icon}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Interactive Skill Cloud */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary" 
                          className={`
                            bg-gradient-to-r ${category.gradient} text-white border-0 
                            hover:shadow-lg transition-all duration-200 cursor-pointer
                            ${hoveredCategory === index ? 'animate-pulse' : ''}
                          `}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Skill Count */}
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      {category.skills.length} technologies mastered
                    </p>
                  </div>
                </CardContent>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Interactive Skill Web Visualization */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-full max-w-4xl mx-auto h-64 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="text-6xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚙️
              </motion.div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div className="mt-20">
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-100">
                  {skillCategories.reduce((total, cat) => total + cat.skills.length, 0)}+ Technologies
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">Continuously expanding skill set</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}