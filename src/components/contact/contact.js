import "./contact.css";
// import insta from "../../image/insta.png";
function Contact() {
    return (
        <div id="contact" data-aos="fade-left">
            <div className="row p-0 m-0">
                <div className="col-12 h-100 col-lg-6 d-flex flex-column justify-content-center aling-items-center">
                    <h1 className="me-4"><span className="me-1">03.</span> Entrar em contato</h1>
                    <p>Estou procurando novas oportunidades agora, então minha caixa de entrada está sempre aberta. Se quiser fazer alguma  proposta, pergunta ou apenas dizer "oi", farei o possível para entrar em contato!</p>
                    <a href="mailto:diogo.sam.nascimento@gmail.com" className="mt-3"><button className="btn btn-dark px-4">Enviar email</button></a>
                    <p className="mt-5">Você também pode me encontrar aqui😉</p>
                    <ul className="nav flex-column">
                        <li><button className="btn mt-3 w-50 btn-instagram">insta</button></li>
                        <li><button className="btn mt-3 w-50 btn-github">git</button></li>
                        <li><button className="btn mt-3 w-50 btn-linkedin">linkedin</button></li>
                    </ul>
                </div>
                <div className="col h-100  slider">
                    {/* <img src={insta} alt=""/> */}
                </div>
                
            </div>
        </div>
    )
};

export default Contact;