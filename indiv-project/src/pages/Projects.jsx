import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

function Projects() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [category, setCategory] = useState("All");

    const projects = [
        {
            id: "project1",
            title: "Placeholder",
            category: "Web",
            description: "Will add work later",
            details: "Will add later"
        },
        {
            id: "project2",
            title: "Placeholder2",
            category: "Web",
            description: "Will add work later",
            details: "Will add later"
        },
        {
            id: "project3",
            title: "Placeholder3",
            category: "Web",
            description: "Will add work later",
            details: "Will add later"
        }
    ];

    const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((project) => category === "All" ? true : project.category === category);
    
    const sortedProjects = [...filteredProjects].sort((a,b) =>
    sortOrder === "asc" ? a.title.localeCompare(b.title)
    : b.title.localeCompare(a.title));
    return (
        <section className="projects">
            <h2>Projects</h2>

            <input 
             type="text" placeholder="Search projects..."
             value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
             className="search-input"
             />
            <select value={sortOrder} onChange={(e) => setSortOrder (e.target.value)}
            className="sort-select">
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
            <div className="category-buttons">
                <button onClick={() => setCategory("All")}>All</button>
                <button onClick={() => setCategory("Web")}>Web</button>
                <button onClick={() => setCategory("Data")}>Data</button>
            </div>
            <div className="project-grid">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                     key={project.id}
                     id={project.id}
                     title={project.title}
                     description={project.description}
                     />
                ))}
            </div>
        </section>
    );
}
export default Projects;