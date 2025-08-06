import { Heart, Palette, Users, Sparkles, MessageCircle, Download } from 'lucide-react';

const features = [
  {
    icon: Heart,
    title: 'Personalized Touch',
    description: 'Every letter is unique, crafted with your personal memories and special details.',
    color: 'text-primary'
  },
  {
    icon: Palette,
    title: 'Multiple Tones',
    description: 'Choose from romantic, funny, emotional, poetic, or friendly tones to match your mood.',
    color: 'text-sunset'
  },
  {
    icon: Users,
    title: 'For Everyone',
    description: 'Create letters for lovers, friends, parents, children, or anyone special in your life.',
    color: 'text-secondary'
  },
  {
    icon: Sparkles,
    title: 'AI Magic',
    description: 'Advanced AI understands emotions and creates heartfelt messages that feel authentic.',
    color: 'text-primary'
  },
  {
    icon: MessageCircle,
    title: 'Beautiful Design',
    description: 'Letters are presented on elegant paper-like cards with perfect typography.',
    color: 'text-sunset'
  },
  {
    icon: Download,
    title: 'Easy Sharing',
    description: 'Save, copy, or share your beautiful love letters with just one click.',
    color: 'text-secondary'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-romantic">Features That Make</span>
            <br />
            <span className="text-gradient-sunset">Love Letters Special</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the magical features that help you create the perfect love letter for any occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <feature.icon className={`w-12 h-12 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;