import { Navbar, ProjectCards } from "./components";
import { Link as LinkTo } from 'react-scroll'

import me from "./image/me.png";
import cv from "./docs/cv.pdf";

import "./landing.css";
import "./contact.css";
import "./footer.css";

import { FiLinkedin, FiInstagram, FiGithub, FiArrowUp } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

export default function App() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Landing></Landing>
            <ProjectCards></ProjectCards>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

function Landing() {
    return (
        <main id="landing">
            <section>
                <div className="info">
                    <h1>Diogo Santos</h1>
                    <h2>UI designer e desenvolvedor</h2>
                    <p>Técnico em Informática para Internet (e de vez em quando ilustrador) apaixonado por desenvolvimento web, principalmente pelo front-end, sempre tentando construir interfaces agradáveis e aconchegantes para os usuários.</p>
                    <button className="btn btn-outline">Entrar em contato</button>
                </div>
                <img src={me} alt="" />
            </section>
        </main>
    )
}

function Contact() {
    return (
        <div id="contact" className="contact">
            <section>
                <h1>Entrar em contato</h1>
                <p>Estou procurando novas oportunidades agora, então minha caixa de entrada está sempre aberta. Se quiser fazer alguma proposta, pergunta ou apenas dizer "oi", farei o possível para entrar em contato! 😉</p>
                <p>diogo.sam.nascimento@gmail.com</p>
                <a href={cv} download>
                    <button className="btn btn-outline">Baixar CV</button>
                </a>
            </section>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <section>
                <LinkTo to="landing" smooth={true}><FiArrowUp /></LinkTo>
                <p>diogo.sam.nascimento@gmail.com</p>
                <div className="icons">
                    <FiLinkedin />
                    <FiInstagram />
                    <FiGithub />
                    <FaBehance />
                </div>
            </section>
        </footer>
    )
}