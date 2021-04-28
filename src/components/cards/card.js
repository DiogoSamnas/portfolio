import Menota from '../../image/menota.jpg';
import "./card.css";

function Card(props) {
    return (
        <div className="card col-12 rounded-0 border-0" data-aos="fade-up">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img className="rounded-3" src={Menota} alt={props.item.title}/>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h2 className="card-title">{props.item.title}</h2>
                        <p className="card-text p-4 rounded-3">{props.item.text}</p>
                        <div className="nav flex-row p-0 mx-0 my-3">
                            {props.item.techs.map((tech) => <small key={tech} className="text-muted me-3">{tech}</small>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;