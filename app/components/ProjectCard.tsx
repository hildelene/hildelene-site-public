import { Project } from '../data/projectsData';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-navy-dark border border-gold/20 rounded-lg overflow-hidden hover:border-gold transition-all duration-300 h-full flex flex-col group">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-navy-dark/50">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-gold text-navy-dark px-3 py-1 rounded-full text-xs font-bold">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow p-6 flex flex-col">
        <p className="text-gold/80 text-sm font-semibold mb-2">{project.year}</p>
        <h3 className="text-cream font-bold text-lg mb-3 group-hover:text-gold transition-colors">
          {project.name}
        </h3>
        <p className="text-cream/70 text-sm flex-grow">
          {project.description}
        </p>

        {/* Learn More Link */}
        <div className="mt-4 pt-4 border-t border-gold/20">
          <a
            href="#"
            className="text-gold font-semibold hover:text-cream transition-colors inline-flex items-center group/link"
          >
            Saiba mais
            <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
