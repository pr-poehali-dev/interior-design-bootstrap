import { useEffect, useState } from 'react';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-gradient-to-br from-primary via-purple-900 to-secondary flex items-center justify-center transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      <div className="relative">
        <img 
          src="https://cdn.poehali.dev/projects/eed55f17-efb5-4a74-8d9e-55a94c13ec8e/bucket/cc940387-85a8-48a4-b9e3-1fa9b956675f.png" 
          alt="LUXE" 
          className="h-24 md:h-32 animate-pulse"
          style={{ 
            filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
            animationDuration: '1.5s'
          }}
        />
        <div className="absolute -inset-8 bg-gradient-to-r from-secondary via-purple-300 to-secondary opacity-30 blur-2xl animate-pulse" style={{ animationDuration: '2s' }} />
      </div>
    </div>
  );
};

export default Preloader;
