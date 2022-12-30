/* eslint-disable object-curly-newline */
import { data } from '../data';
import ProjectTile from './ProjectTile';

export default function Projects() {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        {data.projects.map(({ title, description, link, imageSrc, alt }) => (
          <ProjectTile
            key={title}
            imgSrc={imageSrc}
            alt={alt}
            title={title}
            description={description}
            link={link}
          />
        ))}
      </div>
    </section>
  );
}
