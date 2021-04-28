import { Card, ProjectsCards } from "../";

import "./projects.css";

function Projects() {
    return (
        <div id="projects" className="pt-5">
            <div className="row p-0 m-0">
                <div className="d-flex my-5 align-items-center">
                    <h1 className="me-4">Projetos</h1>
                </div>
                <ProjectsCards />

            </div>
        </div>
    )
};

export default Projects;