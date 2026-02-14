import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

function Projects() {
    const [searchTerm, setSearchTerm] = useState("");

    const projects = [
        {
            title: "Placeholder",
            description: "Will add work later"
        },
        {
            title: "Placeholder2",
            description: "Will add work later"
        },
        {
            title: "Placeholder3",
            description: "Will add work later"
        }
    ];

    const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return (
        <section className="projects">
            <h2>Projects</h2>

            <input 
             type="text" placeholder="Search projects..."
             value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
             className="search-input"
             />

            <div className="project-grid">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                     key={index}
                     title={project.title}
                     description={project.description}
                     />
                ))}
            </div>
        </section>
    );
}

export default Projects;