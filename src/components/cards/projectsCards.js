import { Card } from "../";
import data from '../../data/data.json';

function ProjectsCards() {
    return (
        <>
            {data.map((data) => <Card key={data.id}  item={data}/>)}
            <div class="my-card more-cards d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" style={{backgroundColor:"#f7f5f5"}}>
                    <h6 >Visualizar mais</h6>
                    <span>Em breve!</span>
            </div>
        </>
    )
};

export default ProjectsCards;