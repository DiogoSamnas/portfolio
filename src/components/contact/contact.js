import "./contact.css";
import gmailIcon from "../../svg/gmail.svg"
import Fort from "../../image/fort.png"
import { FiInstagram } from "react-icons/fi";
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
// import insta from "../../image/insta.png";
function Contact() {
    return (
        <div id="contact">
            <div className="row p-0 m-0">
                <div className="col-12 h-100 col-lg-6 d-flex flex-column justify-content-center aling-items-center" data-aos="fade-left">
                    
                    <h1 className="me-4">Entrar em contato</h1>

                    <p>Estou procurando novas oportunidades agora, então minha caixa de entrada está sempre aberta. Se quiser fazer alguma  proposta, pergunta ou apenas dizer "oi", farei o possível para entrar em contato! 😉</p>

                    <button className="btn btn-dark col-6 py-2 mt-3 d-flex align-baseline justify-content-center" href="mailto:diogo.sam.nascimento@gmail.com">
                    <img className="gmail-icon" src={gmailIcon} alt=""/>
                    Email
                    </button>
                    
                    {/* <div className="nav col-12 col-md-6 d-flex flex-column">
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
                    </div> */}

                </div>
                <div className="col h-100 d-none d-lg-block contact-image position-relative" >
                    <img src={Fort} className="w-100" alt=""/>
                </div>

            </div>
        </div>
    )
};

export default Contact;