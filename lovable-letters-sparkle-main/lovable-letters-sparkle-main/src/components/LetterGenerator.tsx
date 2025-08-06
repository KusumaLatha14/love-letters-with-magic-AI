import { useState } from 'react';
import { Heart, Wand2, Copy, Share2, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  recipient: string;
  tone: string;
  name: string;
  memory: string;
}

const LetterGenerator = () => {
  const [formData, setFormData] = useState<FormData>({
    recipient: '',
    tone: '',
    name: '',
    memory: ''
  });
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const letterTemplates = {
    'lover-romantic': (name: string, memory: string) => `My Dearest ${name},

Every moment with you feels like a beautiful dream come to life. When I think about ${memory}, my heart overflows with love and gratitude for having you in my life.

You are the poetry my heart has been trying to write, the melody my soul has been yearning to sing. Your love has painted my world in the most vibrant colors, and every day with you is a masterpiece of joy and wonder.

I love how you make the ordinary moments feel extraordinary, how your laughter can brighten even my darkest days, and how your presence makes everything feel right in the world.

Forever and always yours,
With all my love ❤️`,
    
    'lover-funny': (name: string, memory: string) => `Hey there, ${name}! 😄

So I tried using this AI thing to write you a love letter... I hope it doesn't sound too robotic! 🤖 Remember when ${memory}? I still laugh thinking about it!

You know what I love about you? You put up with my terrible jokes, my obsession with pizza at 2 AM, and somehow still think I'm charming (your judgment might be questionable, but I'm not complaining! 😉).

You're like my favorite song on repeat - I never get tired of you, even when you steal all the blankets at night!

Love you to the moon and back (and yes, I'll share my pizza),
Your wonderfully weird partner 🍕💕`,

    'friend-emotional': (name: string, memory: string) => `Dear ${name},

I wanted to take a moment to tell you how much your friendship means to me. In a world that can sometimes feel overwhelming, you are my constant source of comfort and joy.

Thinking about ${memory} reminds me of all the beautiful moments we've shared together. You have this incredible ability to understand me without judgment and to make me laugh when I need it most.

Thank you for being the kind of friend who shows up, who listens, and who makes life so much brighter just by being in it. Your friendship is one of my greatest treasures.

With love and gratitude,
Your forever friend 💙`,

    'parent-emotional': (name: string, memory: string) => `Dear ${name},

There are no words that can fully express how grateful I am to have you as my parent. Your love, guidance, and unwavering support have shaped me into who I am today.

When I think about ${memory}, I'm reminded of all the countless ways you've shown me love throughout my life. From the smallest gestures to the biggest sacrifices, you've always put our family first.

Thank you for believing in me, for picking me up when I fall, and for celebrating my victories as if they were your own. Your love is the foundation upon which I've built my life.

With endless love and appreciation,
Your child ❤️`
  };

  const generateLetter = async () => {
    if (!formData.recipient || !formData.tone || !formData.name || !formData.memory) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to generate your letter.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation with a delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const templateKey = `${formData.recipient}-${formData.tone}` as keyof typeof letterTemplates;
    const template = letterTemplates[templateKey] || letterTemplates['friend-emotional'];
    
    const letter = template(formData.name, formData.memory);
    setGeneratedLetter(letter);
    setIsGenerating(false);
    setShowConfetti(true);
    
    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
    
    toast({
      title: "Letter Generated! 💕",
      description: "Your beautiful love letter is ready!",
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    toast({
      title: "Copied!",
      description: "Letter copied to clipboard.",
    });
  };

  const shareLetter = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Love Letter from Lovable',
        text: generatedLetter,
      });
    } else {
      copyToClipboard();
    }
  };

  return (
    <section id="generator" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-romantic">Create Your</span>
            <br />
            <span className="text-gradient-sunset">Perfect Love Letter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fill in the details below and watch as AI crafts a beautiful, personalized letter just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="glass p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Who are you writing to? 💝
                </label>
                <Select value={formData.recipient} onValueChange={(value) => setFormData(prev => ({ ...prev, recipient: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select recipient type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lover">💕 My Partner/Lover</SelectItem>
                    <SelectItem value="friend">👫 Best Friend</SelectItem>
                    <SelectItem value="parent">👨‍👩‍👧‍👦 Parent</SelectItem>
                    <SelectItem value="family">👪 Family Member</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  What tone would you like? 🎭
                </label>
                <Select value={formData.tone} onValueChange={(value) => setFormData(prev => ({ ...prev, tone: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="romantic">💕 Romantic</SelectItem>
                    <SelectItem value="funny">😄 Funny & Playful</SelectItem>
                    <SelectItem value="emotional">🥺 Deep & Emotional</SelectItem>
                    <SelectItem value="poetic">🌹 Poetic</SelectItem>
                    <SelectItem value="friendly">😊 Warm & Friendly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Their name 📝
                </label>
                <Input 
                  placeholder="Enter their name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Share a special memory or detail 💭
                </label>
                <Textarea 
                  placeholder="Tell us about a special moment, inside joke, or something unique about them..."
                  value={formData.memory}
                  onChange={(e) => setFormData(prev => ({ ...prev, memory: e.target.value }))}
                  rows={4}
                />
              </div>

              <Button 
                onClick={generateLetter}
                disabled={isGenerating}
                className="w-full btn-romantic py-6 text-lg font-medium"
              >
                {isGenerating ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Creating Magic...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Wand2 className="w-5 h-5" />
                    Generate Love Letter
                  </div>
                )}
              </Button>
            </div>
          </Card>

          {/* Generated Letter */}
          <Card className={`paper-letter p-8 transition-all duration-500 ${generatedLetter ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
            {generatedLetter ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Your Love Letter
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={copyToClipboard}>
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={shareLetter}>
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <pre className="whitespace-pre-wrap font-serif text-foreground leading-relaxed text-sm">
                    {generatedLetter}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <Heart className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">Your beautiful letter will appear here...</p>
              </div>
            )}
          </Card>
        </div>

        {/* Confetti Effect */}
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                <Heart className="w-4 h-4 text-primary" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LetterGenerator;