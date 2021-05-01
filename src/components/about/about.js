import "./about.css";
import Logo from '../../svg/diogo.svg';

function About() {
    return (

        <div id="about" data-aos="fade-left">
            <div id="projects-title" className="d-flex mt-5 mb-3 align-items-center">
                <h1 className="me-4">Sobre mim</h1>
            </div>
            <div className="row p-0 m-0">
                <div className="col-12 col-lg-6 p-0 m-0">
                    <p>Oi! Meu nome é Diogo Santos, tenho 19 anos, nasci em Natal, Rio Grande do Norte.
                    <br/>    
                    Sou um aficionado pelo desenvolvimento web, principalmente por prototipação de interface. Meu interesse na área começou em 2017, quando ingressei no curso de informática para internet no IFRN, desde então venho tentando me aperfeiçoar e adquirir mais conhecimento e experiência.<br/>
                    Atualmente sou voluntário no LEME(Núcleo de Extensão e Prática Profissional da DIATINF do CNAT/IFRN), atuando principalmente como desenvolvedor Front End. Eventualmente realizo funções de Back End(desenvolvendo Api's e scripts de Web Scraping). 
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
                <div className="col p-0 m-0 d-none d-lg-flex justify-content-center align-items-center">
                    <img className="about-image" src={Logo} alt="Diogo Santos" />
                </div>
            </div>
        </div>
    )
};

export default About;