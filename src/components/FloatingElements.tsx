import { motion } from 'motion/react';

export function FloatingElements() {
  const elements = [
    { id: 1, shape: 'circle', size: 'w-4 h-4', delay: 0 },
    { id: 2, shape: 'square', size: 'w-3 h-3', delay: 1 },
    { id: 3, shape: 'triangle', size: 'w-5 h-5', delay: 2 },
    { id: 4, shape: 'circle', size: 'w-2 h-2', delay: 3 },
    { id: 5, shape: 'square', size: 'w-6 h-6', delay: 4 },
  ];

  // Safe window dimensions with defaults
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 ${element.size} ${
            element.shape === 'circle' ? 'rounded-full' : 
            element.shape === 'square' ? 'rounded-lg' : 
            'clip-triangle'
          }`}
          initial={{ 
            x: Math.random() * windowWidth,
            y: windowHeight + 100,
            rotate: 0 
          }}
          animate={{
            y: -100,
            rotate: 360,
            x: Math.random() * windowWidth
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: element.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

export function TechIcons() {
  const icons = ['⚡', '🤖', '🔗', '⚙️', '🧠', '📊'];
  
  // Safe window dimensions with defaults
  const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-30"
          initial={{ 
            x: Math.random() * windowWidth,
            y: Math.random() * windowHeight,
            scale: 0.5
          }}
          animate={{
            y: [0, -20, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 10, -10, 0]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
}