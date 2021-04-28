import './navbar.css';
import Logo from '../../svg/diogo.svg';

function Navbar() {
    return (
        <div id="navbar" className="container p-0">
            <div className="nav navbar container justify-content-between align-items-center position-fixed top-0 py-3">
                <div className="logo d-flex align-items-center">
                    <img className="logo me-3" src={Logo} alt="Diogo Santos" />
                    <p>Diogo Santos</p>
            </div>


                <ul className="nav">
                    <li className="nav-item ms-4">
                        <a href="" className="nav-link">
                            Sobre
                    </a>
                    </li>
                    <li className="nav-item ms-4">
                        <a href="" className="nav-link">
                            Experiência
                    </a>
                    </li>
                    <li className="nav-item ms-4">
                        <a href="" className="nav-link">
                            Projetos
                    </a>
                    </li>
                    <li className="nav-item ms-4">
                        <button className="btn btn-outline-dark px-4">Contato</button>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default Navbar;