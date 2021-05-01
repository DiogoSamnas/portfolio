import "./contact.css";
import gmailIcon from "../../svg/gmail.svg"
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";

// import insta from "../../image/insta.png";
function Contact() {
    return (
        <div id="contact" data-aos="fade-left">
            <div className="row p-0 m-0">
                <div className="col-12 h-100 col-lg-6 d-flex flex-column justify-content-center aling-items-center">
                    
                    <h1 className="me-4">Entrar em contato</h1>

                    <p>Estou procurando novas oportunidades agora, então minha caixa de entrada está sempre aberta. Se quiser fazer alguma  proposta, pergunta ou apenas dizer "oi", farei o possível para entrar em contato! 😉</p>
                    
                    <div className="nav col-12 col-md-6 d-flex flex-column">
                        <button className="btn mt-3 py-2 btn-email" href="mailto:diogo.sam.nascimento@gmail.com">
                            <i><img src={gmailIcon} alt=""/></i>
                            <p>Enviar email</p>
                        </button>
                        <button className="btn mt-3 py-2  btn-instagram">
                            <i><FiInstagram /></i>
                            <p>Perfil no Instagram</p>
                        </button>
                        <button className="btn mt-3 py-2 btn-github">
                            <i><AiFillGithub /></i>
                            <p>Perfil no Github</p>
                        </button>
                        <button className="btn mt-3 py-2 btn-linkedin">
                            <i><AiFillLinkedin /></i>
                            <p>Perfil no Linkedin</p>
                        </button>
                    </div>

                </div>
                <div className="col h-100  slider">
                    {/* <img src={insta} alt=""/> */}
                </div>

            </div>
        </div>
    )
};

export default Contact;