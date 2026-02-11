const ProcessSection = () => {
  const steps = [
    { step: '01', title: 'Консультация', desc: 'Знакомство, обсуждение идей и пожеланий' },
    { step: '02', title: 'Концепция', desc: 'Разработка дизайн-проекта и 3D визуализация' },
    { step: '03', title: 'Реализация', desc: 'Закупка материалов и авторский надзор' },
    { step: '04', title: 'Сдача', desc: 'Финальная приёмка и стайлинг пространства' }
  ];

  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Процесс работы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Прозрачный и понятный путь к интерьеру вашей мечты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
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
  );
};

export default ProcessSection;
