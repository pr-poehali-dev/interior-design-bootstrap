import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
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

  return (
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
  );
};

export default ServicesSection;
