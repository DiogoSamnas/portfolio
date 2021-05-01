import "./sideLinks.css";
import { FiGithub,FiLinkedin,FiInstagram } from "react-icons/fi";

function SideLinks() {
    return (
        <>
            <div id="profiles" className="d-none d-lg-flex">
                <i><FiGithub/></i>
                <i><FiLinkedin/></i>
                <i><FiInstagram/></i>
            </div>
            <div id="email">
                <p>diogo.sam.nascimento@gmail.com</p>
            </div>
        </>
    )
}
export default SideLinks;