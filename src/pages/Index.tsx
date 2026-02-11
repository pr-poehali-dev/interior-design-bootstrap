import { useState, useEffect } from 'react';
import Navigation from '@/components/sections/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection, { Project } from '@/components/sections/PortfolioSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
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



  return (
    <>
      {isLoading && <Preloader onLoadingComplete={() => setIsLoading(false)} />}
      <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <HeroSection scrollY={scrollY} />

      <AboutSection />

      <PortfolioSection projects={projects} />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
    </>
  );
};

export default Index;