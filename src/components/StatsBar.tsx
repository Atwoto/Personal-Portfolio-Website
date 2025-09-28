import { AnimatedCounter } from './AnimatedCounter';

const stats = [
  {
    value: 500,
    suffix: '+',
    label: 'Hours Automated',
    icon: '⚡'
  },
  {
    value: 12,
    suffix: '+',
    label: 'AI Agents Built',
    icon: '🤖'
  },
  {
    value: 95,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: '⭐'
  },
  {
    value: 25,
    suffix: '+',
    label: 'Workflows Created',
    icon: '🔄'
  }
];

export function StatsBar() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"></div>
      
      {/* Grid Pattern Overlay */}
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
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              {/* Glass Card */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2500}
                  />
                </div>
                <div className="text-sm md:text-base text-blue-200 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}