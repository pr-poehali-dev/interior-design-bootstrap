import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    try {
      const response = await fetch('https://functions.poehali.dev/7ad19a66-b8ca-4de7-8c99-e1de0b50f0ad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        toast({
          title: 'Заявка отправлена!',
          description: result.message,
        });
        e.currentTarget.reset();
      } else {
        toast({
          title: 'Ошибка',
          description: result.error || 'Не удалось отправить заявку',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Проблема с подключением. Попробуйте позже.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-purple-900 to-secondary text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-lg text-white/80">
            Готовы начать ваш проект? Оставьте заявку, и мы свяжемся с вами в течение 24 часов
          </p>
        </div>

        <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-8 scroll-animate">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input 
                  name="name"
                  required
                  placeholder="Ваше имя" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input 
                  name="phone"
                  type="tel"
                  placeholder="+7 (999) 123-45-67" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input 
                name="email"
                type="email"
                placeholder="your@email.com" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Расскажите о вашем проекте</label>
              <Textarea 
                name="message"
                placeholder="Опишите ваши идеи и пожелания..." 
                rows={5}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
            <Button 
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-secondary text-primary hover:bg-secondary/90 text-lg"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        </Card>

        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="scroll-animate">
            <Icon name="Phone" size={32} className="mx-auto mb-3 text-secondary" />
            <div className="font-semibold mb-1">Телефон</div>
            <div className="text-white/80">+7 (495) 123-45-67</div>
          </div>
          <div className="scroll-animate" style={{ transitionDelay: '0.1s' }}>
            <Icon name="Mail" size={32} className="mx-auto mb-3 text-secondary" />
            <div className="font-semibold mb-1">Email</div>
            <div className="text-white/80">hello@luxe-design.ru</div>
          </div>
          <div className="scroll-animate" style={{ transitionDelay: '0.2s' }}>
            <Icon name="MapPin" size={32} className="mx-auto mb-3 text-secondary" />
            <div className="font-semibold mb-1">Адрес</div>
            <div className="text-white/80">Москва, Тверская 1</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
