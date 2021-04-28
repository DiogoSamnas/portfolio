import './links.css';
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

function Links() {
    return (
        <div id="links" className="links d-none d-lg-flex">
            <div className="social">
                <a href="https://github.com/DiogoSamnas" rel="noreferrer" target="_blank" className="link mb-4"><FiGithub /></a>
                <a href="https://www.instagram.com/diogoodiego/" rel="noreferrer" target="_blank" className="link mb-4"><FiInstagram /></a>
                <a href="https://www.linkedin.com/in/diogo-santos-b23ab31a0/" rel="noreferrer" target="_blank" className="link mb-4" ><FiLinkedin /></a>
                <span className="bar"></span>
            </div>
            <div className="email">
                <a href="mailto:diogo.sam.nascimento@gmail.com" className="email-text mb-2">diogo.sam.nascimento@gmail.com</a>
                <span className="bar"></span>
            </div>
        </div>
    )
};

export default Links;