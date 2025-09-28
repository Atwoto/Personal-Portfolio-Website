import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { SocialProof } from './components/SocialProof';
import { Contact } from './components/Contact';
import { DefaultCaseStudy } from './components/CaseStudy';
import { DarkModeToggle } from './components/DarkModeToggle';
import { ScrollProgress } from './components/ScrollProgress';
import { motion } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'case-study'>('portfolio');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function with navbar offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  if (currentView === 'case-study') {
    return <DefaultCaseStudy />;
  }

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />
      
      {/* Enhanced Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-xl shadow-gray-900/5' 
            : 'bg-white/10 backdrop-blur-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Hammton Ndeke
            </motion.div>
            
            <div className="flex items-center space-x-8">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { name: 'Projects', id: 'projects' },
                  { name: 'Skills', id: 'skills' },
                  { name: 'About', id: 'about' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative transition-colors hover:scale-105 ${
                      isScrolled 
                        ? 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                        : 'text-blue-200 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                      whileHover={{ scaleX: 1 }}
                    />
                  </button>
                ))}
              </div>
              
              {/* Dark Mode Toggle */}
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <Hero />
        <StatsBar />
        <div id="projects" className="scroll-mt-20">
          <Projects />
        </div>
        <div id="skills" className="scroll-mt-20">
          <Skills />
        </div>
        <div id="about" className="scroll-mt-20">
          <About />
        </div>
        <SocialProof />
        <div id="contact" className="scroll-mt-20">
          <Contact />
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hammton Ndeke
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Building the future of business automation, one intelligent workflow at a time.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { name: 'LinkedIn', href: 'https://www.linkedin.com/in/hammton-ndeke' },
              { name: 'GitHub', href: 'https://github.com/Hammton' },
              { name: 'Email', href: 'mailto:hammtonndeke@gmail.com' },
              { name: 'Phone', href: 'tel:+254708235245' }
            ].map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:scale-110 font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
          
          <div className="border-t border-gray-800 pt-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-500 text-sm mb-2">
                © 2025 Hammton Ndeke. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs">
                Crafted with ❤️ and powered by AI automation
              </p>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}