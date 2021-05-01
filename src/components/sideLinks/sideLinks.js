import "./sideLinks.css";
import ReactTooltip from 'react-tooltip';
import { FiGithub,FiLinkedin,FiInstagram } from "react-icons/fi";
import {AiOutlineBehance } from "react-icons/ai";

function SideLinks() {
    return (
        <>
            <div id="profiles" className="d-none d-lg-flex">
                <a href="https://github.com/DiogoSamnas" rel="noreferrer" target="_blank" data-tip="Visitar perfil do Github"><FiGithub/></a>
                <a href="https://www.instagram.com/diogoodiego/" rel="noreferrer" target="_blank" data-tip="Visitar perfil do Instagram"><FiInstagram/></a>
                <a href="https://www.behance.net/diogoodiego" rel="noreferrer" target="_blank" data-tip="Visitar perfil do Behance"><AiOutlineBehance /></a>
                <a href="https://www.linkedin.com/in/diogo-santos-b23ab31a0/" rel="noreferrer" target="_blank" data-tip="Visitar perfil do LinkedIn"><FiLinkedin/></a>
            </div>
            <div id="email" className="d-none d-lg-flex">
                <a href="mailto:diogo.sam.nascimento@gmail.com" data-tip="Enviar email"><p>diogo.sam.nascimento@gmail.com</p></a>
            </div>
            <ReactTooltip />
        </>
    )
}
export default SideLinks;