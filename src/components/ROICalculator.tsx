import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Calculator, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { Line } from 'recharts';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ROICalculator = () => {
  const [investment, setInvestment] = useState([50000]);
  const [years, setYears] = useState([5]);
  const [roi, setRoi] = useState(0);
  const [monthlyReturn, setMonthlyReturn] = useState(0);
  const [totalReturn, setTotalReturn] = useState(0);
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    // Calculate ROI based on investment and years
    const annualReturn = 0.35; // 35% annual return
    const monthlyReturnRate = annualReturn / 12;
    
    const totalReturnAmount = investment[0] * Math.pow(1 + annualReturn, years[0]);
    const profit = totalReturnAmount - investment[0];
    const roiPercentage = (profit / investment[0]) * 100;
    const monthly = (investment[0] * monthlyReturnRate);

    setRoi(roiPercentage);
    setMonthlyReturn(monthly);
    setTotalReturn(totalReturnAmount);

    // Generate chart data
    const data = [];
    for (let i = 0; i <= years[0]; i++) {
      data.push({
        year: `Год ${i}`,
        value: investment[0] * Math.pow(1 + annualReturn, i),
        profit: investment[0] * Math.pow(1 + annualReturn, i) - investment[0],
      });
    }
    setChartData(data);
  }, [investment, years]);

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <Calculator className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Калькулятор инвестиций</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Рассчитайте вашу прибыль</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Узнайте потенциальную доходность от инвестиций в технологию MagElec
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Input */}
          <Card className="bg-card/80 backdrop-blur border-border p-8">
            <h3 className="text-2xl font-bold mb-6">Параметры инвестиции</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium">Сумма инвестиции</label>
                  <span className="text-2xl font-bold text-primary">
                    ${investment[0].toLocaleString()}
                  </span>
                </div>
                <Slider
                  value={investment}
                  onValueChange={setInvestment}
                  min={10000}
                  max={1000000}
                  step={10000}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$10,000</span>
                  <span>$1,000,000</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-medium">Период инвестирования</label>
                  <span className="text-2xl font-bold text-primary">
                    {years[0]} {years[0] === 1 ? 'год' : years[0] < 5 ? 'года' : 'лет'}
                  </span>
                </div>
                <Slider
                  value={years}
                  onValueChange={setYears}
                  min={1}
                  max={10}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 год</span>
                  <span>10 лет</span>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Ежемесячный доход</span>
                  </div>
                  <p className="text-2xl font-bold text-primary">
                    ${monthlyReturn.toFixed(0).toLocaleString()}
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">ROI</span>
                  </div>
                  <p className="text-2xl font-bold text-accent">
                    {roi.toFixed(0)}%
                  </p>
                </div>
              </div>

              <div className="bg-gradient-primary rounded-lg p-6 text-center">
                <p className="text-sm mb-2 text-primary-foreground/80">Общая прибыль через {years[0]} {years[0] === 1 ? 'год' : years[0] < 5 ? 'года' : 'лет'}</p>
                <p className="text-4xl font-bold text-primary-foreground">
                  ${totalReturn.toFixed(0).toLocaleString()}
                </p>
                <p className="text-sm mt-2 text-primary-foreground/80">
                  Чистая прибыль: ${(totalReturn - investment[0]).toFixed(0).toLocaleString()}
                </p>
              </div>

              <Button variant="electric" size="lg" className="w-full">
                Начать инвестировать сейчас
              </Button>
            </div>
          </Card>

          {/* Chart */}
          <Card className="bg-card/80 backdrop-blur border-border p-8">
            <h3 className="text-2xl font-bold mb-6">График роста инвестиций</h3>
            
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="year" 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                  formatter={(value: any) => `$${value.toFixed(0).toLocaleString()}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Общая стоимость"
                />
                <Line 
                  type="monotone" 
                  dataKey="profit" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 3 }}
                  name="Чистая прибыль"
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-6 space-y-4">
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Преимущества инвестирования</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Ежемесячные выплаты дивидендов
                  </li>
                  <li className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Гарантированная доходность 35% годовых
                  </li>
                  <li className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-primary" />
                    Минимальная инвестиция от $10,000
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;