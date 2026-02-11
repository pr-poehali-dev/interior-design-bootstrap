import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  area: string;
  year: string;
  location: string;
}

interface PortfolioSectionProps {
  projects: Project[];
}

const PortfolioSection = ({ projects }: PortfolioSectionProps) => {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ['Все', 'Современный', 'Классика', 'Лофт', 'Скандинавский'];

  const filteredProjects = activeFilter === 'Все' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый проект — уникальная история, созданная с любовью к деталям
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? 'relative overflow-hidden bg-gradient-to-r from-secondary via-purple-300 to-secondary bg-[length:200%_100%] hover:bg-[position:100%_0] active:scale-95 transition-all duration-500 text-primary font-semibold' : ''}
              >
                {filter}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group cursor-pointer overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 scroll-animate"
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover parallax-image transition-transform duration-100 group-hover:!scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-xs uppercase tracking-wider text-secondary mb-2">{project.category}</div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-white/90">{project.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold mb-2">{selectedProject.title}</DialogTitle>
                <div className="text-sm text-muted-foreground">{selectedProject.category}</div>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4 py-4 border-y">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Площадь</div>
                    <div className="font-semibold text-lg">{selectedProject.area}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Год</div>
                    <div className="font-semibold text-lg">{selectedProject.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Локация</div>
                    <div className="font-semibold text-lg">{selectedProject.location}</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">О проекте</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
                </div>
                
                <Button 
                  className="w-full relative overflow-hidden bg-gradient-to-r from-secondary via-purple-500 to-secondary bg-[length:200%_100%] hover:bg-[position:100%_0] active:scale-95 transition-all duration-500 text-white font-semibold"
                  size="lg"
                >
                  Заказать похожий проект
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioSection;