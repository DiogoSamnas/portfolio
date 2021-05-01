import "./landing.css";
import { Link } from 'react-scroll'
import { FiArrowDown } from "react-icons/fi";


function Landing() {
    return (
        <div id="landing" data-aos="slide-right">
            <div className="row p-0 m-0">
                <div className="text-area col-12 col-md-9 col-lg-6 mx-0 position-relative">
                    <p>Oi, meu nome é</p>
                    <h1>Diogo Santos.</h1>
                    <h1>Desenvolvedor Web.</h1>
                    <p>Técnico em Informática para Internet (e de vez em quando ilustrador) apaixonado por desenvolvimento web, principalmente pelo front-end, sempre tentando construir interfaces agradáveis e aconchegantes para os usuários.</p>
                    <Link to="projects-title"  smooth={true}  className="scroll-down pointer position-absolute bottom-0 py-4"><FiArrowDown/> Conheça meus projetos</Link>
                </div>
            </div>
        </div>
    )
};

export default Landing;