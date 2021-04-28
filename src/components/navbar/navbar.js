import './navbar.css';
import Logo from '../../svg/diogo.svg';

function Navbar() {
    return (
        <div id="navbar" className="nav justify-content-between align-items-center py-4">
            <div className="logo">
                <img className="logo me-3" src={Logo} alt="Diogo Santos"/>
                Diogo Santos
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
    )
};

export default Navbar;