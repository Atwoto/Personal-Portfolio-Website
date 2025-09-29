import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  link?: string;
}

const testimonials: Testimonial[] = [
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

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Duplicate testimonials for infinite scrolling effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const visibleTestimonials = duplicatedTestimonials.slice(
    testimonials.length + currentIndex,
    testimonials.length + currentIndex + testimonials.length
  );

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000); // Move to next testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          What Organizations Say
        </h2>
      </div>
      
      {/* Navigation controls */}
      <div className="flex justify-center items-center mb-8 space-x-4">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Testimonial carousel */}
      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex transition-transform duration-500 ease-in-out" 
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="max-w-6xl mx-auto">
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
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Auto-scroll indicator */}
      <div className="flex justify-center mt-4">
        <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: isPaused ? "0%" : "100%" }}
            transition={{ duration: 5, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}