import { useState, useEffect } from 'react';
import { Heart, Sparkles, ArrowDown } from 'lucide-react';
import HeartParticles from './HeartParticles';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Create Beautiful Love Letters with AI Magic ✨';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToGenerator = () => {
    const section = document.getElementById('generator');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Heart Particles */}
      <HeartParticles />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-16 h-16 text-primary animate-heart-pulse mr-4" />
            <Sparkles className="w-12 h-12 text-sunset animate-float" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-gradient-romantic">Lovable</span>
        </h1>

        <div className="h-20 md:h-16 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground typing-effect">
            {displayText}
          </p>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Express your deepest feelings with personalized love letters crafted by AI. 
          Perfect for partners, friends, family, and every special moment.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={scrollToGenerator}
            className="btn-romantic px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Start Writing Love
          </button>
          
          <button 
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-sunset px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            See Features
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;