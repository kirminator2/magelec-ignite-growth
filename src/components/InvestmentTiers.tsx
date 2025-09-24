import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Shield, Crown } from 'lucide-react';

const InvestmentTiers = () => {
  const tiers = [
    {
      name: 'Starter',
      icon: Zap,
      minInvestment: '$10,000',
      annualReturn: '25%',
      color: 'border-muted-foreground',
      popular: false,
      features: [
        'Ежеквартальные выплаты',
        'Базовая аналитика',
        'Email поддержка',
        'Доступ к отчетам',
      ],
    },
    {
      name: 'Professional',
      icon: Star,
      minInvestment: '$50,000',
      annualReturn: '35%',
      color: 'border-primary shadow-[0_0_30px_hsl(var(--primary)/0.3)]',
      popular: true,
      features: [
        'Ежемесячные выплаты',
        'Расширенная аналитика',
        'Приоритетная поддержка 24/7',
        'Персональный менеджер',
        'Ранний доступ к проектам',
        'Реферальная программа 5%',
      ],
    },
    {
      name: 'Enterprise',
      icon: Crown,
      minInvestment: '$250,000',
      annualReturn: '45%',
      color: 'border-accent',
      popular: false,
      features: [
        'Еженедельные выплаты',
        'VIP аналитика и прогнозы',
        'Dedicated account manager',
        'Участие в совете директоров',
        'Эксклюзивные инвестиции',
        'Реферальная программа 10%',
        'Налоговая оптимизация',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-dark relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Инвестиционные пакеты</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Выберите ваш уровень инвестиций</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Присоединяйтесь к тысячам инвесторов, получающих стабильный доход от чистой энергии
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-card/80 backdrop-blur ${tier.color} transition-all duration-300 hover:scale-105 hover:-translate-y-2`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    ПОПУЛЯРНЫЙ ВЫБОР
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${tier.popular ? 'bg-primary/20 text-primary' : 'bg-muted'}`}>
                    <tier.icon className="w-8 h-8" />
                  </div>
                  <span className="text-3xl font-bold text-primary animate-pulse-glow">
                    {tier.annualReturn}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-muted-foreground mb-6">Минимальная инвестиция</p>
                <p className="text-4xl font-bold mb-8">{tier.minInvestment}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={tier.popular ? "electric" : "binance"} 
                  className="w-full"
                  size="lg"
                >
                  Выбрать {tier.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 px-8 py-6 rounded-lg bg-card/50 backdrop-blur border border-border">
            <div>
              <p className="text-3xl font-bold text-primary">12,847</p>
              <p className="text-sm text-muted-foreground">Активных инвесторов</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div>
              <p className="text-3xl font-bold text-accent">$847M</p>
              <p className="text-sm text-muted-foreground">Под управлением</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div>
              <p className="text-3xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-muted-foreground">Рейтинг инвесторов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTiers;