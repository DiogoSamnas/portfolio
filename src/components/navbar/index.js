import { Link as LinkTo } from 'react-scroll'
import "./style.css";

export default function Navbar() {
    return (
        <header>
            <nav>
                <h2>Diogo Santos</h2>
                <ul>
                    <li><LinkTo to="landing" smooth={true}>Sobre mim</LinkTo></li>
                    <li><LinkTo to="projects" smooth={true}>Projetos</LinkTo></li>
                    <li><LinkTo to="contact" smooth={true}>Contato</LinkTo></li>
                </ul>

            </nav>
        </header>
    )
}