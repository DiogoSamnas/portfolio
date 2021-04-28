import Menota from '../../image/menota.jpg';
import "./card.css";

function Card() {
    return (
        <div className="card mb-5 col-12 rounded-0 border-0"  data-aos="fade-right">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={Menota} alt="Menota landing page" />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h2 className="card-title">Menota Landing page</h2>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur et ut odit fugiat ratione veritatis voluptatibus commodi? Veritatis quidem accusantium quo voluptates sequi explicabo architecto dolore repellat quas recusandae.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;