import Menota from '../../image/menota.jpg';
import "./card.css";

function Card(props) {
    return (
        <div className="card col-12 rounded-0 border-0" data-aos="fade-up">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={Menota} alt={props.item.title}/>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h2 className="card-title">{props.item.title}</h2>
                        <p className="card-text">{props.item.text}</p>
                        <p className="card-text"><small className="text-muted">{props.item.techs}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;