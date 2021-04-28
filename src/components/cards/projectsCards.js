import { Card } from "../";
import data from '../../data/data.json';

function ProjectsCards() {
    return (
        <>
            {data.map((data) => <Card/>)}
        </>
    )
};

export default ProjectsCards;