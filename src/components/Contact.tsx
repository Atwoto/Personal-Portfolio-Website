import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Calendar, MessageSquare, Clock, Zap, Phone } from "lucide-react";

const contactLinks = [
  {
    name: "Call Me",
    href: "tel:+254708235245",
    icon: Phone,
    description: "Direct phone consultation",
    primary: true,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hammton-ndeke", 
    icon: Linkedin,
    description: "Connect professionally",
    gradient: "from-blue-600 to-blue-500"
  },
  {
    name: "GitHub",
    href: "https://github.com/Hammton",
    icon: Github,
    description: "View my code & projects",
    gradient: "from-gray-700 to-gray-600"
  },
  {
    name: "Direct Email",
    href: "mailto:hammtonndeke@gmail.com",
    icon: Mail,
    description: "Send me a message",
    gradient: "from-green-500 to-emerald-500"
  }
];

const responsePromises = [
  { icon: Clock, text: "Response within 24 hours", color: "text-blue-600" },
  { icon: MessageSquare, text: "Free consultation available", color: "text-green-600" },
  { icon: Zap, text: "Quick implementation turnaround", color: "text-purple-600" }
];

export function Contact() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Ready to Automate Your Success?
          </h2>
          <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Let's discuss how AI automation can transform your business operations and drive measurable results
          </p>
          
          {/* Response Promises */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {responsePromises.map((promise, index) => {
              const IconComponent = promise.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <IconComponent className={`w-4 h-4 ${promise.color}`} />
                  <span className="text-white text-sm font-medium">{promise.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className={`group cursor-pointer border-0 overflow-hidden transition-all duration-300 ${
                  link.primary ? 'ring-2 ring-blue-400 ring-opacity-50' : ''
                }`}>
                  <CardContent className="p-6 text-center relative">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className="relative z-10">
                      <div className="mb-4 flex justify-center">
                        <div className={`w-14 h-14 bg-gradient-to-r ${link.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      
                      <h3 className={`mb-2 font-semibold transition-colors ${
                        link.primary ? 'text-blue-600' : 'text-gray-900'
                      } group-hover:text-white`}>
                        {link.name}
                      </h3>
                      
                      <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors">
                        {link.description}
                      </p>
                    </div>
                    
                    {link.primary && (
                      <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                        Recommended
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
        
        {/* Primary CTA */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
          >
            Start Your Automation Journey
          </Button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-200">
            <p className="text-sm">
              Or reach out directly at{' '}
              <a 
                href="mailto:hammtonndeke@gmail.com" 
                className="text-blue-400 hover:text-white transition-colors underline"
              >
                hammtonndeke@gmail.com
              </a>
            </p>
            <div className="w-2 h-2 bg-blue-400 rounded-full hidden sm:block"></div>
            <p className="text-sm">
              Average response time: <span className="text-white font-medium">2 hours</span>
            </p>
          </div>
        </motion.div>
        
        {/* Trust Signal */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-blue-300 text-sm mb-4">
            Trusted by 10+ innovative companies to automate their workflows
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-80">
            {['Bills on Solar', 'TVG', 'Sambright', 'Self Mind', 'Digital Qatalyst', 'Tunza Jamii Properties', 'Sambright Limited Company'].map((company, i) => (
              <span key={i} className="text-white text-sm font-medium bg-white/10 px-3 py-1 rounded-full">
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}