import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection, { Project } from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';
import Preloader from '@/components/Preloader';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('animate-in');
        }
      });
      
      const parallaxImages = document.querySelectorAll('.parallax-image');
      parallaxImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const translateY = (scrollPercent - 0.5) * 50;
        (img as HTMLElement).style.transform = `translateY(${translateY}px) scale(1.1)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Современная квартира',
      category: 'Современный',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/b294a8b9-6f80-4f06-91c1-717cd8e8f640.jpg',
      description: '120 м² элегантности',
      fullDescription: 'Современная трехкомнатная квартира в центре города. Проект реализован в стиле минимализм с акцентом на функциональность. Использованы натуральные материалы: дерево, камень, текстиль премиум-класса.',
      area: '120 м²',
      year: '2023',
      location: 'Москва'
    },
    {
      id: 2,
      title: 'Скандинавская спальня',
      category: 'Скандинавский',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/584081d5-6b4c-443b-8108-95caac4174a4.jpg',
      description: 'Минимализм и уют',
      fullDescription: 'Спальня в скандинавском стиле с акцентом на естественный свет и природные материалы. Светлая цветовая гамма создаёт атмосферу спокойствия и уюта.',
      area: '25 м²',
      year: '2023',
      location: 'Санкт-Петербург'
    },
    {
      id: 3,
      title: 'Индустриальный лофт',
      category: 'Лофт',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/9db60ed4-71eb-4aa0-96a3-1a19192c920b.jpg',
      description: 'Сырой шик большого города',
      fullDescription: 'Лофт-пространство с открытой планировкой. Кирпичная кладка, металлические конструкции и винтажная мебель создают уникальную индустриальную атмосферу.',
      area: '180 м²',
      year: '2024',
      location: 'Москва'
    },
    {
      id: 4,
      title: 'Классическая гостиная',
      category: 'Классика',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/b294a8b9-6f80-4f06-91c1-717cd8e8f640.jpg',
      description: 'Вневременная элегантность',
      fullDescription: 'Гостиная в классическом стиле с элементами ар-деко. Лепнина, хрустальные люстры и антикварная мебель создают атмосферу роскоши и изысканности.',
      area: '45 м²',
      year: '2023',
      location: 'Москва'
    },
    {
      id: 5,
      title: 'Современная кухня',
      category: 'Современный',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/584081d5-6b4c-443b-8108-95caac4174a4.jpg',
      description: 'Функциональность и стиль',
      fullDescription: 'Кухня-студия с островом и встроенной техникой премиум-класса. Эргономичная планировка и стильный дизайн делают пространство максимально функциональным.',
      area: '30 м²',
      year: '2024',
      location: 'Москва'
    },
    {
      id: 6,
      title: 'Лофт с акцентами',
      category: 'Лофт',
      image: 'https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/files/9db60ed4-71eb-4aa0-96a3-1a19192c920b.jpg',
      description: 'Смелость в деталях',
      fullDescription: 'Студия в стиле лофт с яркими цветовыми акцентами. Открытые коммуникации и кирпичная кладка гармонично сочетаются с современной мебелью.',
      area: '65 м²',
      year: '2024',
      location: 'Санкт-Петербург'
    }
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Полный дизайн',
      description: 'Комплексное проектирование от концепции до реализации'
    },
    {
      icon: 'PenTool',
      title: '3D визуализация',
      description: 'Фотореалистичные изображения вашего будущего интерьера'
    },
    {
      icon: 'Palette',
      title: 'Подбор материалов',
      description: 'Эксклюзивная палитра отделочных материалов'
    },
    {
      icon: 'Package',
      title: 'Комплектация',
      description: 'Закупка мебели и декора с учётом вашего бюджета'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Соколова',
      text: 'Невероятная работа! Студия воплотила все наши мечты в реальность. Каждая деталь продумана до мелочей.',
      rating: 5
    },
    {
      name: 'Дмитрий Волков',
      text: 'Профессионализм на высшем уровне. Сроки соблюдены, бюджет не превышен. Рекомендую всем!',
      rating: 5
    },
    {
      name: 'Елена Петрова',
      text: 'Спасибо за уникальный дизайн нашей квартиры! Все гости в восторге. Вы создали настоящее произведение искусства.',
      rating: 5
    }
  ];

  return (
    <>
      {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <HeroSection scrollY={scrollY} />

      <AboutSection />

      <PortfolioSection projects={projects} — Окончила Горьковский инженерно-строительный институт (ГИСИ) по специальности «Архитектурное проектирование», что заложило прочную основу для работы с объемно-пространственными решениями. Дополнительно прошла обучение в Международной школе дизайна (IDS) по направлению «Дизайн интерьера», а также углубленный курс «Дизайнер-декоратор» в ведущих дизайн-мастерских, что позволило refine художественное восприятие и мастерство в декорировании.</p>
              <p className="text-lg text-muted-foreground mb-8">Наталья Тихонова — Специалист с разносторонней экспертизой в сфере архитектуры, реставрации и дизайна интерьеров. Окончила ННГАСУ (Нижегородский государственный архитектурно-строительный университет) по направлению «Реставрационное проектирование», где освоила тонкости работы с историческими зданиями, сохранения культурного наследия и адаптации старинных пространств к современным требованиям.</p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-4 scroll-animate">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/c0f9447f-aee2-4aa9-a92c-e063ffa3fe1d.JPG"
                  alt="Наталья - главный дизайнер"
                  className="w-full h-full object-cover parallax-image transition-transform duration-100 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Наталья Тихонова</h3>
                  <p className="text-sm text-white/80">Архитектор-реставратор | Дизайнер интерьеров | Визуализатор</p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/7d92beb7-4b12-43c9-aabd-72c6bfd4d186.jpg"
                  alt="Елена - ведущий дизайнер"
                  className="w-full h-full object-cover parallax-image transition-transform duration-100 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">Елена Кадакова</h3>
                  <p className="text-sm text-white/80">Профессиональный дизайнер-архитектор | Дизайнер интерьеров</p>
                </div>
              </div>
            </div>

      <PortfolioSection projects={projects} />

      <section id="services" className="py-24 bg-gradient-to-br from-primary via-purple-900 to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Комплексный подход к созданию интерьера вашей мечты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 p-6 scroll-animate"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <Icon name={service.icon} size={40} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Процесс работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачный и понятный путь к интерьеру вашей мечты
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Консультация', desc: 'Знакомство, обсуждение идей и пожеланий' },
              { step: '02', title: 'Концепция', desc: 'Разработка дизайн-проекта и 3D визуализация' },
              { step: '03', title: 'Реализация', desc: 'Закупка материалов и авторский надзор' },
              { step: '04', title: 'Сдача', desc: 'Финальная приёмка и стайлинг пространства' }
            ].map((item, index) => (
              <div 
                key={item.step} 
                className="relative scroll-animate"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="text-6xl font-bold text-secondary/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас те, кто уже реализовал свои мечты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 scroll-animate"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start">
              <img 
                src="https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/cc940387-85a8-48a4-b9e3-1fa9b956675f.png" 
                alt="LUXE" 
                className="h-8 mb-2"
                style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)' }}
              />
              <p className="text-xs text-white/60">Студия современного дизайна</p>
            </div>
            <div className="flex gap-6">
              <a href="https://vk.com/kadakova_design_interirors" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors" aria-label="VK">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 13.5c.728.726 1.5 1.413 2.07 2.197.252.35.49.703.638 1.116.21.586-.136 1.187-.798 1.223l-2.64-.002c-.675.056-1.218-.213-1.668-.662-.357-.356-.69-.73-1.035-1.094-.143-.152-.29-.293-.465-.41-.407-.273-.762-.187-.984.265-.227.455-.278.953-.306 1.453-.038.711-.296.898-1.008.93-1.52.073-2.963-.16-4.282-.964-1.162-.708-2.06-1.677-2.847-2.786-1.53-2.153-2.7-4.52-3.733-6.952-.223-.528-.063-.81.514-.82.96-.015 1.92-.012 2.878-.003.394.004.656.238.81.603.472 1.122.99 2.215 1.662 3.23.177.267.355.536.607.73.283.22.506.15.645-.17.09-.205.137-.43.167-.656.104-.807.115-1.616-.008-2.42-.076-.485-.364-.797-.85-.895-.246-.05-.21-.146-.09-.295.188-.237.365-.385.72-.385h2.662c.42.083.514.273.57.696l.003 2.968c-.003.166.083.66.383.77.24.085.4-.122.544-.278.656-.715 1.122-1.56 1.543-2.43.184-.381.346-.78.503-1.18.118-.3.305-.448.64-.44l2.854.004c.085 0 .172 0 .255.015.49.088.624.31.472.786-.235.74-.65 1.37-1.06 1.996-.44.67-.908 1.32-1.34 2-.395.617-.364 1.027.125 1.547z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/kadakova.design" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="https://t.me/kadakova_interior_design" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.773 13.99l-2.93-.918c-.64-.203-.658-.64.135-.954l11.445-4.413c.534-.198.997.127.82.954z"/>
                </svg>
              </a>
            </div>
            <div className="text-sm text-white/60 text-center md:text-right">
              © 2026 Студия современного дизайна. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Index;