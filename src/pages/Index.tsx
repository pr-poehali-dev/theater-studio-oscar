import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const courses = [
    {
      title: 'Дети 5-8 лет',
      description: 'Первые шаги в театре через игру и творчество',
      icon: 'Baby',
      features: ['Развитие речи', 'Творческие игры', 'Работа с эмоциями']
    },
    {
      title: 'Дети 9-13 лет',
      description: 'Актёрское мастерство и сценическая речь',
      icon: 'Users',
      features: ['Актёрские этюды', 'Сценическое движение', 'Постановка спектаклей']
    },
    {
      title: 'Подростки 14-17 лет',
      description: 'Профессиональная подготовка и самопрезентация',
      icon: 'Star',
      features: ['Импровизация', 'Публичные выступления', 'Работа над образом']
    },
    {
      title: 'Взрослые',
      description: 'Раскрепощение и уверенность в себе',
      icon: 'Award',
      features: ['Снятие зажимов', 'Ораторское искусство', 'Уверенность в общении']
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '16:00-17:30', group: 'Дети 5-8 лет' },
    { day: 'Понедельник', time: '18:00-19:30', group: 'Подростки 14-17 лет' },
    { day: 'Среда', time: '16:00-17:30', group: 'Дети 9-13 лет' },
    { day: 'Среда', time: '18:00-19:30', group: 'Взрослые' },
    { day: 'Пятница', time: '16:00-17:30', group: 'Дети 5-8 лет' },
    { day: 'Пятница', time: '18:00-19:30', group: 'Подростки 14-17 лет' },
    { day: 'Суббота', time: '11:00-12:30', group: 'Дети 9-13 лет' },
    { day: 'Суббота', time: '14:00-15:30', group: 'Взрослые' }
  ];

  const goals = [
    { icon: 'Sparkles', text: 'Раскрепоститься' },
    { icon: 'Unlock', text: 'Снять зажимы' },
    { icon: 'TrendingUp', text: 'Стать уверенным' },
    { icon: 'Ear', text: 'Слушать и слышать людей' },
    { icon: 'MessageSquare', text: 'Чётко доносить информацию' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/def688c6-ae35-4308-8a47-a7b574a4bc3d.jpg" 
                alt="Оскар"
                className="h-12 w-auto"
              />
              <span className="font-bold text-2xl text-primary">ОСКАР</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О студии', 'Курсы', 'Расписание', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(['home', 'about', 'courses', 'schedule', 'contacts'][idx])}
                  className="text-foreground/80 hover:text-primary font-semibold transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section 
        id="home" 
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(91, 33, 182, 0.85), rgba(124, 58, 237, 0.75)), url('https://cdn.poehali.dev/projects/86484ea3-e9dc-47cc-823e-0aea0d1f04d1/files/62c0b207-49ab-48a5-b967-630a9b20e8b1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="mb-6 animate-fade-in">
              <Icon name="Clapperboard" size={64} className="mx-auto mb-4 text-secondary animate-spotlight" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Театр-студия «ОСКАР»
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold text-secondary animate-fade-in">
              Зажги свою звезду!
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
              Место, где дети и взрослые учатся раскрепощению, свободному общению, 
              красивой речи и актёрскому мастерству
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contacts')}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8 py-6 animate-fade-in"
            >
              Записаться на занятие
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">О студии</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/86484ea3-e9dc-47cc-823e-0aea0d1f04d1/files/4ed19362-f5d6-43ff-91d1-f92a931e161f.jpg"
                alt="Наши ученики"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-primary">«Оскар» это:</h3>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg">Театральные курсы для детей от 5 до 17 лет и взрослых</p>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg">Многолетний опыт и успешная работа с учениками</p>
                </div>
                <div className="flex gap-3">
                  <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg">Атмосфера комфорта, доверия и веселья</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-accent">Цель обучения у нас:</h3>
              <div className="grid grid-cols-1 gap-3">
                {goals.map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                    <Icon name={goal.icon} className="text-primary" size={20} />
                    <span className="font-semibold">{goal.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Наши курсы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите программу по возрасту</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {courses.map((course, idx) => (
              <Card 
                key={idx} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Icon name={course.icon} size={48} className="text-secondary mb-4" />
                    <h3 className="text-2xl font-bold mb-2 text-primary">{course.title}</h3>
                    <p className="text-muted-foreground">{course.description}</p>
                  </div>
                  <div className="space-y-2">
                    {course.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-2">
                        <Icon name="Star" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Расписание занятий</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {schedule.map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary text-white p-3 rounded-lg">
                          <Icon name="Calendar" size={24} />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{item.day}</p>
                          <p className="text-muted-foreground">{item.time}</p>
                        </div>
                      </div>
                      <div className="bg-secondary/10 px-4 py-2 rounded-lg">
                        <p className="font-semibold text-primary">{item.group}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/86484ea3-e9dc-47cc-823e-0aea0d1f04d1/files/78e10d07-d301-4012-9500-37cfbf2165b6.jpg"
                alt="Наша студия"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon name="MapPin" size={28} className="text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Адрес:</h3>
                  <p className="text-lg">г. Ярославль, ул. Театральная, д. 10</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Icon name="Phone" size={28} className="text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Телефон:</h3>
                  <p className="text-lg">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Icon name="Mail" size={28} className="text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Email:</h3>
                  <p className="text-lg">info@oscar-theatre.ru</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Icon name="Clock" size={28} className="text-secondary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">Режим работы:</h3>
                  <p className="text-lg">Пн-Сб: 10:00 - 20:00</p>
                  <p className="text-lg">Вс: выходной</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg mt-6"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Записаться на пробное занятие
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/def688c6-ae35-4308-8a47-a7b574a4bc3d.jpg" 
              alt="Оскар"
              className="h-10 w-auto"
            />
            <span className="font-bold text-2xl text-secondary">ОСКАР</span>
          </div>
          <p className="text-lg font-semibold mb-2">Зажги свою звезду!</p>
          <p className="text-white/80">© 2024 Театр-студия «Оскар». Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;