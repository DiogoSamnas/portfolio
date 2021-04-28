import "./home.css";
import Logo from '../../svg/diogo.svg';

function Home() {
    return (
        <div id="home" className="container p-0">
            <div className="main">
                <div className="row p-0 m-0">
                    <div className="col-6">
                        <h6>Oi, meu nome é</h6>
                        <h1>Diogo Santos.</h1>
                        <h1>Desenvolvedor Web.</h1>
                        <p>Técnico em Informática para Internet (e de vez em quando ilustrador) apaixonado por desenvolvimento web, principalmente pelo front-end, com foco em construir interfaces visualmente agradáveis e aconchegantes para o usuário.</p>
                        <button className="btn btn-outline-dark mt-4 px-4">Entrar em contato</button>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="row p-0 m-0">
                    <div className="col-12 mt-5 mb-3"><h1>Sobre</h1></div>
                    <div className="col-12 col-lg-6">
                        <p>Oi! Meu nome é Diogo Santos sou um aficionado pelo desenvolvimento web, principalmente pela parte da prototipação da interface. Meu interesse na área começou em 2017, quando ingressei no curso de informática para internet no IFRN, desde então, venho tentando me aperfeiçoar e adquirir mais e mais experiência na área. O curso me mostrou tecnologias HTML, CSS, JS, e C# React.js e React Native.
                        </p>
                        <p className="mt-3">Tecnologias que trabalhei recentemente:</p>
                        <ul>
                            <li>JavaScript (ES6+)</li>
                            <li>Node.js</li>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>

                    </div>
                    <div className="col-12 col-lg-6 justify-content-center align-items-center">
                        <img className="about-image" src={Logo} alt="Diogo Santos"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;