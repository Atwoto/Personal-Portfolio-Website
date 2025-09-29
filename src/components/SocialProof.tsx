import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Quote, Star, Award } from "lucide-react";
import { TestimonialCarousel } from "./TestimonialCarousel";

const testimonials = [
  {
    quote: "Hammton built and deployed a custom AI chatbot for us using Voiceflow, designed to streamline customer engagement on our website. The solution has made it easier for clients to explore our services, get instant answers, and connect with our team. This automation has reduced response times, improved lead capture, and strengthened our overall digital experience.",
    author: "Digital Qatalyst Team",
    role: "Dubai Company (UAE)",
    company: "Digital Qatalyst",
    rating: 5
  },
  {
    quote: "Hammton developed a custom AI chatbot for our solar company, Bills On Solar. The assistant now helps customers explore products, get answers about solar energy, and even manage their shopping cart. This automation has streamlined our onboarding process, reduced response times, and made renewable energy more accessible to Kenyan families.",
    author: "Operations Team",
    role: "Bills On Solar – Kenya",
    company: "Bills On Solar",
    rating: 5
  },
  {
    quote: "Hammton's expertise in AI automation has been invaluable in scaling my book-selling platform and maximizing profitability. His guidance in integrating AI-driven workflows has not only boosted sales but also improved efficiency in how my readers engage with my work. Beyond that, his strategic support in applying AI to broader initiatives continues to open new opportunities for growth and transformation.",
    author: "Mary Wamae",
    role: "Former Executive Director, TVG – Kenya",
    company: "TVG",
    rating: 5,
    link: "https://en.wikipedia.org/wiki/Mary_Wangari_Wamae"
  },
  {
    quote: "Working with Hammton allowed us to enhance how we deliver value to our clients. By integrating AI workflows and automation into Self Mind Harvest's processes, our training, onboarding, and client engagement became more seamless, efficient, and scalable. The result: better client retention, faster follow-ups, and greater impact across our programs.",
    author: "Leadership Team",
    role: "Self Mind Harvest – Kenya",
    company: "Self Mind Harvest",
    rating: 5
  }
];

const certifications = [
  { name: "n8n Certified Expert", year: "2024" },
  { name: "OpenAI API Specialist", year: "2024" },
  { name: "Zapier Advanced Certification", year: "2023" },
  { name: "Google Cloud AI/ML", year: "2023" }
];

const companies = [
  "Bills on Solar", "TVG", "Sambright", "Self Mind", "Digital Qatalyst", "Tunza Jamii properties", "Sambright limited company"
];

export function SocialProof() {
  return (
    <section className="py-24 px-6 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Removed the external companies/"Trusted by" block as requested */}

        {/* Testimonials */}
        <div className="mb-20">
          <TestimonialCarousel />
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
            Expertise
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
