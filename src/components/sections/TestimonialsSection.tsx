import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
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
  );
};

export default TestimonialsSection;
