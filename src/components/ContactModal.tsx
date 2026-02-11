import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
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
          <DialogTitle className="text-2xl font-bold">Связаться с нами</DialogTitle>
        </DialogHeader>
        
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
            <label className="block text-sm font-medium mb-2">Телефон</label>
            <Input 
              name="phone"
              type="tel"
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
              rows={4}
            />
          </div>
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-secondary via-purple-300 to-secondary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 text-primary font-semibold"
          >
            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
