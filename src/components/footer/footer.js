import ReactTooltip from 'react-tooltip';

import "./footer.css"
import { FiFigma } from "react-icons/fi";
import { VscRepo } from "react-icons/vsc";

function Footer() {
    return (
        <div id="footer" className="container container p-0 px-lg-5 py-4 ">
            <p className="">Projetado e construído por Diogo Santos</p>
            <div className="social-links mt-2">
                <a data-tip="Visitar respositório no github" className="me-4" href="https://github.com/DiogoSamnas/portfolio" rel="noreferrer" target="_blank"><VscRepo /></a>
                <a data-tip="Visitar os protótipos no figma" href="https://www.figma.com/file/3MTbXIiWIWHOgKFH5vBKoB/Ui-Projects?node-id=33:0" rel="noreferrer" target="_blank"><FiFigma /></a>

            </div>
            <ReactTooltip />
        </div>
    )
}

export default Footer;