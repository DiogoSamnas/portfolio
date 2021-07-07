import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card({item}) {
    return (
        <div className="card" style={{ background: item.color }} >
            <LazyLoadImage src={item.mockup} effect="blur" alt={item.title} />
        </div>
    )
}
function MainCard({item}){
    return(
        <div className="main-card" style={{ background: item.color }} >
            <div className="image">
                <LazyLoadImage src={item.mockup} effect="blur" alt={item.title} />
            </div>
            <div className="body">
                <span>
                    {item.techs.map(tech => <p>{tech}</p>)}
                </span>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                {item.host_url? 
                <a href={item.host_url} rel="noreferrer" target="_blank">
                    <button className="btn btn-outline">Visitar site</button>
                </a>
                : 
                <button className="btn btn-outline">Ver projeto no Figma</button>}
            </div>
        </div>
    )
}

export {Card, MainCard};