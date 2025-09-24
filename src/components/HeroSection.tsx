import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import CountUp from './CountUp';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left - width / 2) / width;
      const y = (clientY - top - height / 2) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x * 10}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y * 10}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark"
    >
      <ParticleBackground />
      
      {/* Lightning effects */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 left-10 w-32 h-32 text-primary animate-lightning">
          <path
            d="M20 5 L10 20 L15 20 L10 35 L25 15 L18 15 Z"
            fill="currentColor"
            opacity="0.8"
          />
        </svg>
        <svg className="absolute top-40 right-20 w-24 h-24 text-accent animate-lightning" style={{ animationDelay: '1.5s' }}>
          <path
            d="M20 5 L10 20 L15 20 L10 35 L25 15 L18 15 Z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-sm text-primary font-medium">Сеть работает 24/7</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-fade-in" 
              style={{ transform: `translate(var(--mouse-x, 0), var(--mouse-y, 0))` }}>
            MAGELEC ENERGY
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in animation-delay-200">
            Революционная технология магнитной генерации электроэнергии
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-slide-up animation-delay-400">
            <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">
                <CountUp end={100} suffix="%" />
              </div>
              <p className="text-sm text-muted-foreground">КПД</p>
            </div>
            <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">
                <CountUp end={30} suffix="+" />
              </div>
              <p className="text-sm text-muted-foreground">Лет работы</p>
            </div>
            <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-accent">
                <CountUp end={0} prefix="" />
              </div>
              <p className="text-sm text-muted-foreground">Выбросов CO₂</p>
            </div>
            <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-4">
              <div className="text-3xl font-bold text-primary">
                <CountUp end={450} suffix="%" />
              </div>
              <p className="text-sm text-muted-foreground">ROI за 5 лет</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
            <Button variant="electric" size="lg" className="group">
              <Zap className="mr-2" />
              Начать инвестировать
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="binance" size="lg">
              <TrendingUp className="mr-2" />
              Рассчитать доходность
            </Button>
          </div>

          {/* Trust badge */}
          <div className="mt-12 flex items-center justify-center gap-8 opacity-60 animate-fade-in animation-delay-800">
            <p className="text-sm text-muted-foreground">Поддерживается:</p>
            <div className="flex items-center gap-6">
              <span className="text-foreground font-semibold">Patent №2023-ME</span>
              <span className="text-foreground font-semibold">ISO 14001</span>
              <span className="text-foreground font-semibold">CE Certified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
    </section>
  );
};

export default HeroSection;