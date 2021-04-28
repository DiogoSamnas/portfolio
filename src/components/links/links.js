import './links.css';
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

function Links() {
    return (
        <div id="links" className="links d-none d-lg-flex">
            <div className="social">
                <span className="mb-4" ><FiLinkedin /></span>
                <span className="mb-4"><FiGithub /></span>
                <span className="mb-4"><FiInstagram /></span>
                <span className="bar"></span>
            </div>
            <div className="email">
                <span className="email-text mb-2"><p>diogo.sam.nascimento@gmail.com</p></span>
                <span className="bar"></span>
            </div>
        </div>
    )
};

export default Links;