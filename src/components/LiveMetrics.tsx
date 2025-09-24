import React, { useEffect, useState } from 'react';
import { Activity, Battery, Zap, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const LiveMetrics = () => {
  const [metrics, setMetrics] = useState({
    powerOutput: 850,
    efficiency: 99.8,
    activeUnits: 12847,
    totalGenerated: 45.7,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        powerOutput: prev.powerOutput + (Math.random() - 0.5) * 10,
        efficiency: Math.min(100, Math.max(99, prev.efficiency + (Math.random() - 0.5) * 0.2)),
        activeUnits: prev.activeUnits + Math.floor(Math.random() * 5),
        totalGenerated: prev.totalGenerated + Math.random() * 0.01,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const metricsData = [
    {
      icon: Zap,
      label: 'Текущая мощность',
      value: `${metrics.powerOutput.toFixed(0)}`,
      unit: 'MW',
      change: '+12.5%',
      color: 'text-primary',
    },
    {
      icon: Activity,
      label: 'Эффективность',
      value: `${metrics.efficiency.toFixed(1)}`,
      unit: '%',
      change: 'Стабильно',
      color: 'text-accent',
    },
    {
      icon: Battery,
      label: 'Активные установки',
      value: metrics.activeUnits.toLocaleString(),
      unit: '',
      change: '+24/день',
      color: 'text-primary',
    },
    {
      icon: TrendingUp,
      label: 'Сгенерировано сегодня',
      value: `${metrics.totalGenerated.toFixed(2)}`,
      unit: 'GWh',
      change: '+18.3%',
      color: 'text-accent',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
            </span>
            <span className="text-sm text-primary font-medium">LIVE</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Производительность в реальном времени</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Наблюдайте за работой глобальной сети MagElec в режиме реального времени
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((metric, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${metric.color}`}>
                    <metric.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                    {metric.change}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{metric.label}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold animate-number-scroll">
                    {metric.value}
                  </span>
                  <span className="text-muted-foreground text-sm">{metric.unit}</span>
                </div>
                
                {/* Mini chart */}
                <div className="mt-4 h-12 flex items-end gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/20 rounded-t transition-all duration-500 group-hover:bg-primary/30"
                      style={{
                        height: `${Math.random() * 100}%`,
                        animationDelay: `${i * 50}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Global stats ticker */}
        <div className="mt-12 bg-card/30 backdrop-blur rounded-lg border border-border p-4">
          <div className="flex items-center gap-8 overflow-hidden">
            <div className="flex items-center gap-2 whitespace-nowrap animate-pulse">
              <span className="text-muted-foreground">Сэкономлено CO₂:</span>
              <span className="text-primary font-bold">2,847,392 тонн</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-muted-foreground">Обеспечено домов:</span>
              <span className="text-accent font-bold">458,721</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-muted-foreground">Общие инвестиции:</span>
              <span className="text-primary font-bold">$847.3M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMetrics;