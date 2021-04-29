import "./about.css";
import Logo from '../../svg/diogo.svg';

function About() {
    return (
        <div id="about" data-aos="fade-left">
            <div className="row p-0 m-0">
                <div className="col-12 mx-0 py-5 d-flex align-items-center">
                    <h1 className="me-4">Sobre mim</h1>
                </div>
                <div className="col-12 col-lg-6">
                    <p>Oi! Meu nome é Diogo Santos, sou um aficionado pelo desenvolvimento web, principalmente pela parte da prototipação da interface. Meu interesse na área começou em 2017, quando ingressei no curso de informática para internet no IFRN, desde então, venho tentando me aperfeiçoar e adquirir mais e mais experiência na área. O curso me mostrou tecnologias HTML, CSS, JS, e C# React.js e React Native.
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
    )
};

export default About;