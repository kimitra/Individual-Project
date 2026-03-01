import { useParams } from "react-router-dom";

function ProjectDetail() {
    const { id } = useParams();

    const projectDetails = {
        project1: "Full details of Project 1",
        project2: "Full details of Project 2",
        project3: "Full details of Project 3"
    };

    return (
        <section>
            <h2>Project Details</h2>
            <p>{projectDetails[id]}</p>
        </section>
    );
}
export default ProjectDetail;