const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Елена Кадакова - Окончила Горьковский инженерно-строительный институт (ГИСИ) по специальности Архитектурное проектирование, что заложило прочную основу для работы с объемно-пространственными решениями. Дополнительно прошла обучение в Международной школе дизайна (IDS) по направлению Дизайн интерьера, а также углубленный курс Дизайнер-декоратор в ведущих дизайн-мастерских, что позволило улучшить художественное восприятие и мастерство в декорировании.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Наталья Тихонова - Специалист с разносторонней экспертизой в сфере архитектуры, реставрации и дизайна интерьеров. Окончила ННГАСУ (Нижегородский государственный архитектурно-строительный университет) по направлению Реставрационное проектирование, где освоила тонкости работы с историческими зданиями, сохранения культурного наследия и адаптации старинных пространств к современным требованиям.
            </p>
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
                <h3 className="text-xl font-bold mb-1">Наталья</h3>
                <p className="text-sm text-white/80">Главный дизайнер</p>
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
                <h3 className="text-xl font-bold mb-1">Елена</h3>
                <p className="text-sm text-white/80">Ведущий дизайнер</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
