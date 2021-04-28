import "./contact.css"
function Contact() {
    return (
        <div id="contact" data-aos="fade-left" className="pt-5">
            <div className="row p-0 m-0">
                <div className="d-flex my-5 align-items-center">
                    <h1 className="me-4">Entrar em contato</h1>
                </div>
                <div className="row p-0 m-0">
                    <div className="col-12 col-lg-6">
                        <p>Estou procurando novas oportunidades agora, então minha caixa de entrada está sempre aberta. Se quiser fazer alguma  proposta, pergunta ou apenas dizer "oi", farei o possível para entrar em contato!</p>
                        <a href="mailto:diogo.sam.nascimento@gmail.com"><button className="btn btn-dark mt-5">Entrar em contato</button></a>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contact;