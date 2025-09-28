import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Quote, Star, Award } from "lucide-react";

const testimonials = [
  {
    quote: "Hammton's AI automation solutions transformed our digital workflows, increasing our client engagement by 40% and significantly improving our operational efficiency across all departments.",
    author: "Digital Qatalyst Team",
    role: "UAE Company",
    company: "Digital Qatalyst",
    rating: 5
  },
  {
    quote: "The solar energy automation system Hammton developed streamlined our customer onboarding process and reduced response times by 60%, making renewable energy more accessible to Kenyan families.",
    author: "Operations Team",
    role: "Solar Organization", 
    company: "Dubai Bills ON Solar Kenya",
    rating: 5
  },
  {
    quote: "Hammton's expertise in AI workflow automation helped us scale our personal development programs efficiently, enabling us to reach more individuals seeking growth and transformation.",
    author: "Mary Wamae",
    role: "Former Executive Equity Director",
    company: "Self Mind Harvest",
    rating: 5,
    link: "https://en.wikipedia.org/wiki/Mary_Wangari_Wamae"
  }
];

const certifications = [
  { name: "n8n Certified Expert", year: "2024" },
  { name: "OpenAI API Specialist", year: "2024" },
  { name: "Zapier Advanced Certification", year: "2023" },
  { name: "Google Cloud AI/ML", year: "2023" }
];

const companies = [
  "TechFlow", "DataCorp", "GrowthLab", "AutomateXYZ", "FlowMaster", "AICore"
];

export function SocialProof() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Company Logos */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-wide">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-xl font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                {company}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mb-20">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Organizations Say
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <Quote className="w-8 h-8 text-blue-500 opacity-60" />
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="font-semibold text-gray-900">
                        {testimonial.link ? (
                          <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                            {testimonial.author}
                          </a>
                        ) : (
                          testimonial.author
                        )}
                      </p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-blue-500" />
            Certifications & Expertise
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 text-blue-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-all duration-200"
              >
                {cert.name} ({cert.year})
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}