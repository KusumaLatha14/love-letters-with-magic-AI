import { UserPlus, Settings, Wand2, Heart } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Choose Recipient',
    description: 'Select who you\'re writing to - your partner, friend, parent, or anyone special.',
    step: '01'
  },
  {
    icon: Settings,
    title: 'Set Your Tone',
    description: 'Pick the perfect mood - romantic, funny, emotional, poetic, or friendly.',
    step: '02'
  },
  {
    icon: Wand2,
    title: 'Add Personal Touch',
    description: 'Share a name and special memory to make your letter truly personal.',
    step: '03'
  },
  {
    icon: Heart,
    title: 'Generate Magic',
    description: 'Watch as AI creates a beautiful, heartfelt letter just for you.',
    step: '04'
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-romantic">How Lovable</span>
            <br />
            <span className="text-gradient-sunset">Creates Magic</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating beautiful love letters has never been easier. Follow these simple steps to express your heart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">{step.step}</span>
              </div>

              {/* Icon */}
              <div className="glass rounded-2xl p-8 mb-6 group-hover:scale-105 transition-transform duration-300">
                <step.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-heart-pulse" />
                
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-sunset opacity-30" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-romantic px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Try It Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;