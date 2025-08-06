import { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Heart className="w-8 h-8 text-primary animate-heart-pulse" />
            <span className="text-2xl font-bold text-gradient-romantic">Lovable</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('generator')}
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              Try Now
            </button>
            <button 
              onClick={() => scrollToSection('generator')}
              className="btn-romantic px-6 py-2 rounded-full font-medium"
            >
              Create Letter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-6">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('generator')}
                className="text-left text-foreground hover:text-primary transition-colors duration-300"
              >
                Try Now
              </button>
              <button 
                onClick={() => scrollToSection('generator')}
                className="btn-romantic px-6 py-3 rounded-full font-medium text-center"
              >
                Create Letter
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;