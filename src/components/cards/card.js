import Menota from '../../image/menota.jpg';
import "./card.css";

function Card(props) {
    return (
        <div className="card col-12 border-0" data-aos="fade-up">
            <div className="row">
                <div className="col-12 col-md-7">
                    <img className="rounded-0" src={Menota} alt={props.item.title} />
                </div>
                <div className="col">
                    <h2 className="title">{props.item.title}</h2>
                    <p className="text px-0 p-4 rounded-3">{props.item.text}</p>
                    <div className="nav flex-row p-0 mx-0 my-3">
                        {props.item.techs.map((tech) => <small key={tech} className="text-muted me-3">{tech}</small>)}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;