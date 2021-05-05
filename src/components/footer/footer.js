import ReactTooltip from 'react-tooltip';

import "./footer.css"
import { FiFigma , FiGithub } from "react-icons/fi";

function Footer() {
    return (
        <div id="footer" className="container p-0 px-lg-5 py-4 ">
            <p className="">Projetado e construído por Diogo Santos</p>
            <div className="social-links mt-2">
                <a data-tip="Visitar respositório no Github" className="me-5" href="https://github.com/DiogoSamnas/portfolio" rel="noreferrer" target="_blank"><FiGithub /></a>
                <a data-tip="Visitar os protótipos no Figma" href="https://www.figma.com/file/EJqF1Gluh0aZ7P2u6xHO3R/Portfolio?node-id=1:3" rel="noreferrer" target="_blank"><FiFigma /></a>
            </div>
            <ReactTooltip />
        </div>
    )
}

export default Footer;