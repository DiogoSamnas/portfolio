import { Link} from 'react-scroll'
import './navbar.css';
import Logo from '../../svg/diogo.svg';

function Navbar() {
    return (
        <div id="navbar" className="w-100 position-fixed fixed-top top-0 py-3">
            <div className="nav navbar container justify-content-between align-items-center">

                <div className="logo d-flex align-items-center">
                    <img className="logo me-3" src={Logo} alt="Diogo Santos" />
                    <Link to="landing" smooth={true} className="nav-link px-1">
                        <p>Diogo Santos</p>
                    </Link>
                </div>


                <ul className="nav">
                    <li className="nav-item ms-4">
                        <Link to="about" smooth={true} className="nav-link px-2">
                            Sobre
                        </Link>
                    </li>
                    {/* <li className="nav-item ms-4">
                        <Link to="experience" smooth={true} className="nav-link px-2">
                            Experiência
                        </Link>
                    </li> */}
                    <li className="nav-item ms-4">
                        <Link to="projects" smooth={true} className="nav-link px-2">
                            Projetos
                        </Link>
                    </li>
                    <li className="nav-item ms-4">
                        <Link to="contact" smooth={true}>
                            <button className="btn btn-outline-dark px-4">Contato</button>
                        </Link>
                    </li>
                </ul>
                
            </div>
        </div>
    )
};

export default Navbar;