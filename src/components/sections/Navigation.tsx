import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img 
          src="https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/cc940387-85a8-48a4-b9e3-1fa9b956675f.png" 
          alt="LUXE" 
          className="h-10 brightness-0 saturate-0"
          style={{ filter: 'brightness(0) saturate(100%) invert(11%) sepia(17%) saturate(1127%) hue-rotate(193deg) brightness(93%) contrast(92%)' }}
        />
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-sm hover:text-secondary transition-colors">О студии</a>
          <a href="#portfolio" className="text-sm hover:text-secondary transition-colors">Портфолио</a>
          <a href="#services" className="text-sm hover:text-secondary transition-colors">Услуги</a>
          <a href="#process" className="text-sm hover:text-secondary transition-colors">Процесс</a>
          <a href="#testimonials" className="text-sm hover:text-secondary transition-colors">Отзывы</a>
          <Button className="relative overflow-hidden bg-gradient-to-r from-secondary via-purple-300 to-secondary bg-[length:200%_100%] hover:bg-[position:100%_0] active:scale-95 transition-all duration-500 text-primary font-semibold">
            Связаться
          </Button>
        </div>
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#about" 
              className="text-sm hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              О студии
            </a>
            <a 
              href="#portfolio" 
              className="text-sm hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Портфолио
            </a>
            <a 
              href="#services" 
              className="text-sm hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a 
              href="#process" 
              className="text-sm hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Процесс
            </a>
            <a 
              href="#testimonials" 
              className="text-sm hover:text-secondary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Отзывы
            </a>
            <Button 
              className="relative overflow-hidden bg-gradient-to-r from-secondary via-purple-300 to-secondary bg-[length:200%_100%] hover:bg-[position:100%_0] active:scale-95 transition-all duration-500 text-primary font-semibold mt-2"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Связаться
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
