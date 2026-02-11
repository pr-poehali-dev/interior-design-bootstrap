import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectTitle?: string;
}

const OrderModal = ({ open, onOpenChange, projectTitle }: OrderModalProps) => {
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
      message: formData.get('message'),
      projectType: projectTitle || 'Новый проект'
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
        onOpenChange(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {projectTitle ? `Заказать проект: ${projectTitle}` : 'Начать проект'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-muted-foreground">Свяжитесь с нами удобным способом:</p>
            
            <div className="grid grid-cols-3 gap-3">
              <a 
                href="https://t.me/kadakova_interior_design"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-lg border hover:border-secondary hover:bg-secondary/5 transition-colors"
              >
                <Icon name="Send" size={24} className="text-secondary" />
                <span className="text-xs font-medium">Telegram</span>
              </a>
              
              <a 
                href="tel:+79063511615"
                className="flex flex-col items-center gap-2 p-3 rounded-lg border hover:border-secondary hover:bg-secondary/5 transition-colors"
              >
                <Icon name="Phone" size={24} className="text-secondary" />
                <span className="text-xs font-medium text-center">+7 906 351-16-15</span>
              </a>
              
              <a 
                href="tel:+79200016080"
                className="flex flex-col items-center gap-2 p-3 rounded-lg border hover:border-secondary hover:bg-secondary/5 transition-colors"
              >
                <Icon name="Phone" size={24} className="text-secondary" />
                <span className="text-xs font-medium text-center">+7 920 001-60-80</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-muted-foreground">или оставьте заявку</span>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">Имя *</label>
              <Input 
                name="name"
                required
                placeholder="Ваше имя" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Телефон *</label>
              <Input 
                name="phone"
                type="tel"
                required
                placeholder="+7 (999) 123-45-67" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input 
                name="email"
                type="email"
                placeholder="your@email.com" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Сообщение</label>
              <Textarea 
                name="message"
                placeholder="Расскажите о вашем проекте..." 
                rows={3}
              />
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-secondary via-purple-500 to-secondary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 text-white font-semibold"
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
