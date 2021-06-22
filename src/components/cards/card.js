function Card({item}) {
    return (
        <div className="card" style={{ background: item.color }} >
            <img src={item.mockup} alt="" />
        </div>
    )
}
function MainCard({item}){
    return(
        <div className="main-card" style={{ background: item.color }} >
            <img src={item.mockup} alt="" />
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