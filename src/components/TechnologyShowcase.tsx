import React, { useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Battery, Leaf, Clock, Shield, Cpu, Globe } from 'lucide-react';

const TechnologyShowcase = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!showcaseRef.current) return;
      
      const scrolled = window.scrollY;
      const elements = showcaseRef.current.querySelectorAll('.parallax-element');
      
      elements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Battery,
      title: 'Нулевое потребление топлива',
      description: 'Работает без ископаемого топлива, воды или других ресурсов',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Leaf,
      title: '100% экологичность',
      description: 'Полное отсутствие выбросов CO₂ и других загрязнителей',
      gradient: 'from-accent to-primary',
    },
    {
      icon: Clock,
      title: '30+ лет работы',
      description: 'Минимальное обслуживание с гарантией долговечности',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Shield,
      title: 'Патентная защита',
      description: 'Защищенная технология с международными патентами',
      gradient: 'from-accent to-primary',
    },
    {
      icon: Cpu,
      title: 'Умное управление',
      description: 'AI-оптимизация производительности в реальном времени',
      gradient: 'from-primary to-accent',
    },
    {
      icon: Globe,
      title: 'Глобальная сеть',
      description: 'Децентрализованная энергетическая инфраструктура',
      gradient: 'from-accent to-primary',
    },
  ];

  return (
    <section ref={showcaseRef} className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-element absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="parallax-element absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <Cpu className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Технология</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Революционная технология MagElec</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Запатентованная система магнитной генерации электроэнергии, меняющая будущее энергетики
          </p>
        </div>

        {/* 3D Generator Visual */}
        <div className="mb-16 relative">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/80 backdrop-blur border-border p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-glow opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative z-10">
                <div className="aspect-video bg-gradient-dark rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Animated magnetic field visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 relative">
                      <div className="absolute inset-0 border-4 border-primary rounded-full animate-pulse-glow" />
                      <div className="absolute inset-4 border-4 border-accent rounded-full animate-pulse-glow animation-delay-200" />
                      <div className="absolute inset-8 border-4 border-primary rounded-full animate-pulse-glow animation-delay-400" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-primary rounded-full animate-float shadow-[0_0_60px_hsl(var(--primary)/0.8)]" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Lightning effects */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M100,200 L150,150 L130,150 L180,100 L160,100 L200,50"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#glow)"
                      className="animate-lightning"
                    />
                    <path
                      d="M500,100 L450,150 L470,150 L420,200 L440,200 L400,250"
                      stroke="hsl(var(--accent))"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#glow)"
                      className="animate-lightning"
                      style={{ animationDelay: '1.5s' }}
                    />
                  </svg>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="p-6">
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.gradient} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-full h-full text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Technical specs */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center p-4">
            <p className="text-3xl font-bold text-primary mb-1">10-500</p>
            <p className="text-sm text-muted-foreground">кВт мощность</p>
          </div>
          <div className="text-center p-4">
            <p className="text-3xl font-bold text-accent mb-1">-40°/+60°</p>
            <p className="text-sm text-muted-foreground">Рабочая температура</p>
          </div>
          <div className="text-center p-4">
            <p className="text-3xl font-bold text-primary mb-1">99.8%</p>
            <p className="text-sm text-muted-foreground">КПД системы</p>
          </div>
          <div className="text-center p-4">
            <p className="text-3xl font-bold text-accent mb-1">24/7/365</p>
            <p className="text-sm text-muted-foreground">Бесперебойная работа</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;