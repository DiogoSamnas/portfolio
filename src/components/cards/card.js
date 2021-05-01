import Menota from '../../image/menota.jpg';
import ReactTooltip from 'react-tooltip';
import "./card.css";

function Card(props) {
    return (
        <div class="my-card" data-aos="fade-up">
            <a href={props.item.host_url} rel="noreferrer" target="_blank">
                <img className="w-100 p-5" style={{backgroundColor : "#f7f5f5"}} src={Menota} alt="..." />
            </a>
        
            <h4 className="card-title text-white p-4">{props.item.title}</h4>
            <ReactTooltip />
        </div>

        // <div className="card col-12 border-0" data-aos="fade-up">
        //     <div className="row">
        //         <div className="image col-12 col-lg-7">
        //             <a href={props.item.host_url} rel="noreferrer" target="_blank" >
        //                 <img className="rounded-0" src={Menota} alt={props.item.title} />
        //             </a>
        //         </div>
        //         <div className="col py-3">
        //             <div className="nav flex-row p-0 mx-0 my-3">
        //                 {props.item.techs.map((tech) => <small key={tech} className="text-muted me-3">{tech}</small>)}
        //             </div>
        //             <h1 className="title">{props.item.title}</h1>
        //             <p className="text px-0 p-4 rounded-3">{props.item.text}</p>
        //             <ul className="nav options flex-row">
        //                 <li data-tip="Visitar respositório no github"><a href={props.item.git_url} rel="noreferrer" target="_blank" ><FiGithub /></a></li>
        //                 <li data-tip="Visitar projeto no figma"><a href={props.item.figma_url} rel="noreferrer" target="_blank" ><FiFigma /></a></li>
        //             </ul>
        //         </div>
        //     </div>
        //     <ReactTooltip />
        // </div>
    )
};

export default Card;