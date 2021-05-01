import "./sideLinks.css";
import { FiGithub,FiLinkedin,FiInstagram } from "react-icons/fi";

function SideLinks() {
    return (
        <>
            <div id="profiles" className="d-none d-lg-flex">
                <a href="https://github.com/DiogoSamnas" rel="noreferrer" target="_blank"><FiGithub/></a>
                <a href="https://www.instagram.com/diogoodiego/" rel="noreferrer" target="_blank"><FiInstagram/></a>
                <a href="https://www.linkedin.com/in/diogo-santos-b23ab31a0/" rel="noreferrer" target="_blank" ><FiLinkedin/></a>
            </div>
            <div id="email" className="d-none d-lg-flex">
                <a href="mailto:diogo.sam.nascimento@gmail.com"><p>diogo.sam.nascimento@gmail.com</p></a>
            </div>
        </>
    )
}
export default SideLinks;