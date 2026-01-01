import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  lessons: number;
  icon: string;
}

const Index = () => {
  const [modules] = useState<Module[]>([
    {
      id: 1,
      title: 'Основы социального статуса',
      description: 'Введение в понятие социального статуса, его виды и характеристики',
      duration: '45 мин',
      completed: true,
      lessons: 5,
      icon: 'BookOpen'
    },
    {
      id: 2,
      title: 'Факторы формирования статуса',
      description: 'Экономические, образовательные и профессиональные факторы влияния',
      duration: '60 мин',
      completed: true,
      lessons: 7,
      icon: 'TrendingUp'
    },
    {
      id: 3,
      title: 'Социальная мобильность',
      description: 'Вертикальная и горизонтальная мобильность в современном обществе',
      duration: '50 мин',
      completed: false,
      lessons: 6,
      icon: 'ArrowUpDown'
    },
    {
      id: 4,
      title: 'Статусные роли и ожидания',
      description: 'Социальные роли, нормы поведения и общественные ожидания',
      duration: '55 мин',
      completed: false,
      lessons: 8,
      icon: 'Users'
    },
    {
      id: 5,
      title: 'Статус в цифровую эпоху',
      description: 'Влияние социальных сетей и цифровых технологий на статус',
      duration: '40 мин',
      completed: false,
      lessons: 5,
      icon: 'Smartphone'
    }
  ]);

  const completedModules = modules.filter(m => m.completed).length;
  const totalProgress = (completedModules / modules.length) * 100;

  const stats = [
    { label: 'Пройдено уроков', value: '12', icon: 'CheckCircle2', color: 'text-primary' },
    { label: 'Всего модулей', value: '5', icon: 'BookMarked', color: 'text-secondary' },
    { label: 'Время обучения', value: '2.5 ч', icon: 'Clock', color: 'text-accent' },
    { label: 'Достижений', value: '3', icon: 'Trophy', color: 'text-primary' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-12 animate-fade-in">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="font-heading text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Социальный статус человека в обществе
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Углубленный курс по изучению социального статуса, его формированию и роли в современном обществе
              </p>
            </div>
            <Link to="/presentation">
              <Button size="lg" className="gap-2">
                <Icon name="Presentation" size={20} />
                Открыть презентацию
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 animate-scale-in">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-muted">
              <div className="flex items-center gap-4">
                <div className={`${stat.color} bg-muted/50 p-3 rounded-xl`}>
                  <Icon name={stat.icon} size={24} />
                </div>
                <div>
                  <p className="text-2xl font-heading font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 mb-8 border-2 border-primary/20 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-heading text-xl font-semibold mb-1">Ваш прогресс</h3>
              <p className="text-sm text-muted-foreground">
                Завершено {completedModules} из {modules.length} модулей
              </p>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {Math.round(totalProgress)}%
            </Badge>
          </div>
          <Progress value={totalProgress} className="h-3" />
        </Card>

        <Tabs defaultValue="modules" className="animate-fade-in">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
            <TabsTrigger value="modules" className="text-base">
              <Icon name="Grid3x3" size={18} className="mr-2" />
              Модули курса
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-base">
              <Icon name="BarChart3" size={18} className="mr-2" />
              Аналитика
            </TabsTrigger>
          </TabsList>

          <TabsContent value="modules">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <Card 
                  key={module.id} 
                  className={`p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${
                    module.completed ? 'border-primary/30 bg-primary/5' : 'border-muted'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl ${module.completed ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                      <Icon name={module.icon} size={28} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-heading text-xl font-bold">{module.title}</h3>
                        {module.completed && (
                          <Icon name="CheckCircle" size={20} className="text-primary" />
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">{module.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          {module.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="BookOpen" size={16} />
                          {module.lessons} уроков
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-2"
                    variant={module.completed ? "outline" : "default"}
                  >
                    {module.completed ? 'Повторить модуль' : 'Начать изучение'}
                    <Icon name={module.completed ? "RotateCcw" : "ArrowRight"} size={18} className="ml-2" />
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-muted">
                <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="BarChart3" size={24} className="text-primary" />
                  Статистика активности
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Завершенные модули</span>
                      <span className="text-sm font-semibold">{completedModules}/{modules.length}</span>
                    </div>
                    <Progress value={totalProgress} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Средний балл тестов</span>
                      <span className="text-sm font-semibold">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Активность (7 дней)</span>
                      <span className="text-sm font-semibold">6/7 дней</span>
                    </div>
                    <Progress value={86} className="h-2" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-muted">
                <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Target" size={24} className="text-secondary" />
                  Достижения
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Первые шаги', desc: 'Завершите первый модуль', unlocked: true },
                    { name: 'Быстрый старт', desc: 'Изучите 2 модуля за неделю', unlocked: true },
                    { name: 'Знаток теории', desc: 'Получите 90%+ на всех тестах', unlocked: false },
                    { name: 'Марафонец', desc: 'Завершите весь курс', unlocked: false }
                  ].map((achievement, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        achievement.unlocked ? 'bg-primary/10' : 'bg-muted/50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${achievement.unlocked ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                        <Icon name="Trophy" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{achievement.name}</p>
                        <p className="text-xs text-muted-foreground">{achievement.desc}</p>
                      </div>
                      {achievement.unlocked && (
                        <Icon name="CheckCircle" size={20} className="text-primary" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 border-2 border-muted md:col-span-2">
                <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Calendar" size={24} className="text-accent" />
                  Недельная активность
                </h3>
                <div className="grid grid-cols-7 gap-2">
                  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => {
                    const active = index < 6;
                    return (
                      <div key={index} className="text-center">
                        <div 
                          className={`h-24 rounded-lg mb-2 transition-all duration-300 ${
                            active ? 'bg-primary hover:bg-primary/80' : 'bg-muted hover:bg-muted/80'
                          }`}
                        />
                        <p className="text-xs text-muted-foreground">{day}</p>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;