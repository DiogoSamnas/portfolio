import { Card, MainCard } from "./card";
import data from "../../data/data.json";
import "./style.css"

export default function ProjectCards() {
    return (
        <div id="projects" className="projects">
            <h1>Projetos</h1>
            {/* <MainCard /> */}
            <GridCard />
        </div>
    )
}

function GridCard() {
    return (
        <>
            <MainCard item={data[0]}/>
            <div className="grid">
                {data.map((item,index) => index > 0? <Card key={index} item={item}/> :null)}
            </div>
            {/* <div className="card-area">
                {data.map(data => <Card key={data.id} item={data} />)}
            </div> */}
        </>
    )
}

// function MainCard() {
//     return (
//         <div className="main-card">
//             <img src={data[0].image} alt="" />
//             <div className="body">
//                 <h1>{data[0].title}</h1>
//             </div>
//         </div>
//     )
// }