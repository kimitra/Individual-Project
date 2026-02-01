import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>

            <div className="project-grid">
                <ProjectCard
                title="Portfolio Website"
                description="A personal website built to showcase my work."
                />
                <ProjectCard
                title="Data Analysis Project"
                description="To be fixed"
                />
                <ProjectCard
                title="React Rebuild"
                description="To be fixed"
                />
            </div>
        </section>
    );
}

export default Projects;