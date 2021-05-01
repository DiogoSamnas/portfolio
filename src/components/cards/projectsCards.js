import { Card } from "../";
import data from '../../data/data.json';

function ProjectsCards() {
    return (
        <>
            {data.map((data) => <Card key={data.id}  item={data}/>)}
            <div class="my-card more-cards d-flex justify-content-center align-items-center" data-aos="fade-up" style={{backgroundColor:"#f7f5f5"}}>
                <div className="nav position-relative">
                    <button className="btn btn-underline">Visualizar mais</button>
                </div>
            </div>
        </>
    )
};

export default ProjectsCards;