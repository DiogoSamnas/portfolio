import "./home.css";
import Logo from '../../svg/diogo.svg';

function Home() {
    return (
        <div id="home" className="container p-0">
            <div className="main">
                <div className="row p-0 m-0">
                    <div className="col-6 mx-0">
                        <h6>Oi, meu nome é</h6>
                        <h1>Diogo Santos.</h1>
                        <h1>Desenvolvedor Web.</h1>
                        <p>Técnico em Informática para Internet (e de vez em quando ilustrador) apaixonado por desenvolvimento web, principalmente pelo front-end, sempre tentando construir interfaces agradáveis e aconchegantes para os usuários.</p>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="row p-0 m-0">
                    <div className="col-12 mx-0 mt-5 mb-3 d-flex align-items-center">
                        <h1 className="me-4">Sobre mim</h1><div className="bar"></div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <p>Oi! Meu nome é Diogo Santos sou um aficionado pelo desenvolvimento web, principalmente pela parte da prototipação da interface. Meu interesse na área começou em 2017, quando ingressei no curso de informática para internet no IFRN, desde então, venho tentando me aperfeiçoar e adquirir mais e mais experiência na área. O curso me mostrou tecnologias HTML, CSS, JS, e C# React.js e React Native.
                        </p>
                        <p className="mt-3">Ferramentas e tecnologias que utilizei recentemente:</p>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Figma</li>
                            <li>Github</li>
                        </ul>

                    </div>
                    <div className="col-12 col-lg-6 justify-content-center align-items-center">
                        <img className="about-image" src={Logo} alt="Diogo Santos" />
                    </div>
                </div>
            </div>

            <div className="projects pt-5">
                <div className="d-flex mt-5 pt-5 align-items-center">
                    <h1 className="me-4">Projetos</h1><div className="bar"></div>
                </div>
                <div className="card">
                    <div className="row">
                        <div className="col-12 col-md-4">

                        </div>
                        <div className="col">
                            <div className="card-body">
                                <h5 className="card-title">Menota Landing page</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur et ut odit fugiat ratione veritatis voluptatibus commodi? Veritatis quidem accusantium quo voluptates sequi explicabo architecto dolore repellat quas recusandae.</p>
                                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;