import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

interface Slide {
  id: number;
  type: 'title' | 'content' | 'image' | 'quote' | 'stats';
  title?: string;
  subtitle?: string;
  content?: string[];
  quote?: string;
  author?: string;
  stats?: Array<{ value: string; label: string }>;
  gradient?: string;
}

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      type: 'title',
      title: 'Социальный статус человека в обществе',
      subtitle: 'Углубленный курс по изучению социальной структуры',
      gradient: 'from-primary via-secondary to-accent'
    },
    {
      id: 2,
      type: 'content',
      title: 'Что такое социальный статус?',
      content: [
        'Положение человека в социальной структуре общества',
        'Совокупность прав и обязанностей индивида',
        'Определяет место в социальной иерархии',
        'Влияет на жизненные возможности и перспективы'
      ],
      gradient: 'from-primary to-secondary'
    },
    {
      id: 3,
      type: 'stats',
      title: 'Виды социального статуса',
      stats: [
        { value: 'Предписанный', label: 'Получен от рождения (пол, раса, семья)' },
        { value: 'Достигаемый', label: 'Приобретен личными усилиями' },
        { value: 'Профессиональный', label: 'Связан с работой и карьерой' },
        { value: 'Экономический', label: 'Определяется материальным положением' }
      ],
      gradient: 'from-secondary to-accent'
    },
    {
      id: 4,
      type: 'quote',
      quote: 'Статус человека определяется не тем, кем он родился, а тем, кем он стал благодаря своим усилиям',
      author: 'Макс Вебер, социолог',
      gradient: 'from-accent to-primary'
    },
    {
      id: 5,
      type: 'content',
      title: 'Факторы, влияющие на статус',
      content: [
        '📚 Образование — ключевой фактор социальной мобильности',
        '💼 Профессия — определяет престиж и доход',
        '💰 Экономическое положение — материальные ресурсы',
        '👥 Социальные связи — капитал отношений',
        '🎯 Личные достижения — навыки и таланты'
      ],
      gradient: 'from-primary via-accent to-secondary'
    },
    {
      id: 6,
      type: 'content',
      title: 'Социальная мобильность',
      content: [
        'Вертикальная мобильность — движение вверх или вниз по социальной лестнице',
        'Горизонтальная мобильность — переход на том же социальном уровне',
        'Межпоколенная мобильность — изменение статуса между поколениями',
        'Внутрипоколенная мобильность — изменение в течение жизни человека'
      ],
      gradient: 'from-secondary to-primary'
    },
    {
      id: 7,
      type: 'stats',
      title: 'Статус в современном мире',
      stats: [
        { value: '67%', label: 'Значение социальных сетей для статуса' },
        { value: '89%', label: 'Роль образования в карьерном росте' },
        { value: '54%', label: 'Влияние семейного происхождения' },
        { value: '76%', label: 'Важность профессиональных навыков' }
      ],
      gradient: 'from-accent via-primary to-secondary'
    },
    {
      id: 8,
      type: 'quote',
      quote: 'В цифровую эпоху социальный статус формируется не только в реальном, но и в виртуальном пространстве',
      author: 'Мануэль Кастельс, социолог',
      gradient: 'from-primary to-accent'
    },
    {
      id: 9,
      type: 'content',
      title: 'Ключевые выводы',
      content: [
        'Социальный статус — многомерное понятие',
        'Он может быть изменен через образование и усилия',
        'Современное общество предоставляет больше возможностей для мобильности',
        'Важно понимать механизмы формирования статуса',
        'Цифровые технологии создают новые формы статуса'
      ],
      gradient: 'from-secondary via-accent to-primary'
    },
    {
      id: 10,
      type: 'title',
      title: 'Спасибо за внимание!',
      subtitle: 'Продолжайте изучение курса для углубленного понимания темы',
      gradient: 'from-primary via-secondary to-accent'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;
  const slide = slides[currentSlide];

  const renderSlideContent = () => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center px-8">
            <h1 className="font-heading text-6xl md:text-7xl font-bold mb-6 animate-scale-in text-white drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 animate-fade-in font-medium">
              {slide.subtitle}
            </p>
          </div>
        );

      case 'content':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-20">
            <h2 className="font-heading text-5xl font-bold mb-12 text-white drop-shadow-lg animate-fade-in">
              {slide.title}
            </h2>
            <div className="space-y-6">
              {slide.content?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 animate-fade-in bg-white/10 backdrop-blur-sm p-6 rounded-2xl"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl flex-shrink-0">
                    <Icon name="CheckCircle" size={24} className="text-white" />
                  </div>
                  <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'quote':
        return (
          <div className="flex flex-col items-center justify-center h-full px-12 md:px-24 text-center">
            <div className="mb-8 animate-scale-in">
              <Icon name="Quote" size={80} className="text-white/40" />
            </div>
            <p className="text-3xl md:text-4xl font-heading font-semibold mb-8 text-white leading-relaxed italic animate-fade-in">
              "{slide.quote}"
            </p>
            <p className="text-xl text-white/80 animate-fade-in" style={{ animationDelay: '200ms' }}>
              — {slide.author}
            </p>
          </div>
        );

      case 'stats':
        return (
          <div className="flex flex-col justify-center h-full px-12 md:px-20">
            <h2 className="font-heading text-5xl font-bold mb-12 text-white drop-shadow-lg animate-fade-in">
              {slide.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.stats?.map((stat, index) => (
                <Card
                  key={index}
                  className="p-8 bg-white/15 backdrop-blur-md border-white/30 hover:bg-white/25 transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <p className="text-5xl font-heading font-bold mb-3 text-white">
                    {stat.value}
                  </p>
                  <p className="text-lg text-white/90 leading-snug">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-all duration-700`}
      />
      
      <div className="relative z-10 h-screen flex flex-col">
        <div className="p-6">
          <Progress value={progress} className="h-2 bg-white/20" />
        </div>

        <div className="flex-1 overflow-hidden">
          {renderSlideContent()}
        </div>

        <div className="p-8 flex items-center justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="ghost"
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm disabled:opacity-30"
          >
            <Icon name="ChevronLeft" size={24} className="mr-2" />
            Назад
          </Button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-12 bg-white'
                    : 'w-3 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="ghost"
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm disabled:opacity-30"
          >
            Далее
            <Icon name="ChevronRight" size={24} className="ml-2" />
          </Button>
        </div>

        <div className="px-8 pb-4 text-center">
          <p className="text-white/70 text-sm">
            Слайд {currentSlide + 1} из {slides.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
