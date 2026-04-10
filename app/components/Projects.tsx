import ProjectCard from './ProjectCard';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-navy-dark border-t border-gold/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cream mb-4">
            Our <span className="text-gold">Projects</span>
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto">
            Showcasing our commitment to engineering excellence through diverse and innovative
            maritime projects.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="animate-fade-in">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
