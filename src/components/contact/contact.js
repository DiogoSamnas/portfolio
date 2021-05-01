import "./contact.css";
import ReactTooltip from 'react-tooltip';
import gmailIcon from "../../svg/gmail.svg"
import Fort from "../../image/fort.png"
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { AiOutlineBehance } from "react-icons/ai";
function Contact() {
    return (
        <div id="contact">
            <div className="row p-0 m-0">
                <div className="col-12 h-100 col-lg-6 d-flex flex-column justify-content-center aling-items-center" data-aos="fade-left">

                    <h1 className="mb-3 mx-auto">Entrar em contato</h1>

                    <p className=" mb-3 text-center">Estou procurando novas oportunidades agora, então minha caixa de entrada está sempre aberta. Se quiser fazer alguma  proposta, pergunta ou apenas dizer "oi", farei o possível para entrar em contato! 😉</p>
                    <a href="mailto:diogo.sam.nascimento@gmail.com" className="btn btn-outline-dark mx-auto px-4 py-2 mb-5">
                        <img className="gmail-icon" src={gmailIcon} alt="" />
                            Email
                    </a>
                    <div className="social nav flex-row w-100 px-5 justify-content-center align-baseline">
                        <a href="https://github.com/DiogoSamnas" rel="noreferrer" target="_blank" data-tip="Visitar perfil do Github"><FiGithub /></a>
                        <a href="https://www.instagram.com/diogoodiego/" rel="noreferrer" target="_blank" data-tip="Visitar perfil do Instagram"><FiInstagram /></a>
                        <a href="https://www.behance.net/diogoodiego" rel="noreferrer" target="_blank" data-tip="Visitar perfil do Behance"><AiOutlineBehance /></a>
                        <a href="https://www.linkedin.com/in/diogo-santos-b23ab31a0/" rel="noreferrer" target="_blank" data-tip="Visitar perfil do LinkedIn"><FiLinkedin /></a>
                    </div>
                </div>
                <div className="col h-100 d-none d-lg-block contact-image position-relative" >
                    <img src={Fort} className="w-100" alt="" />
                </div>

            </div>
            <ReactTooltip />
        </div>
    )
};

export default Contact;