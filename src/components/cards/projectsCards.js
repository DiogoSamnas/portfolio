import { Card } from "../";
import data from '../../data/data.json';

function ProjectsCards() {
    return (
        <>
            {data.map((data) => <Card key={data.id}  item={data}/>)}
            <div class="my-card more-cards" data-aos="fade-up" style={{backgroundColor:"#f7f5f5"}}>
                Visualizar todos
            </div>
        </>
    )
};

export default ProjectsCards;