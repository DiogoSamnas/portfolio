import { Card } from "../";
import data from '../../data/data.json';

function ProjectsCards() {
    return (
        <>
            {data.map((data) => <Card key={data.id}  item={data}/>)}
        </>
    )
};

export default ProjectsCards;