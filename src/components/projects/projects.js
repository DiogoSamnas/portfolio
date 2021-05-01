import { ProjectsCards } from "../";

function Projects() {
    return (
        <>
            <div id="projects-title" className="d-flex mt-5 mb-3 align-items-center">
                <h1 className="me-4">Projetos</h1>
            </div>
            <div id="projects" className="p-0 m-0 mb-5">
                <ProjectsCards />
            </div>
        </>
    )
};

export default Projects;