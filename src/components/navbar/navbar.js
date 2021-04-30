import { Link} from 'react-scroll'
import './navbar.css';
import Logo from '../../svg/diogo.svg';

function Navbar() {
    return (
        <div id="navbar" className="w-100 position-fixed fixed-top top-0 py-3">
            <div className="nav navbar container justify-content-between align-items-center px-3 px-lg-5">

                <div className="logo d-flex align-items-center">
                    <img className="me-3" src={Logo} alt="Diogo Santos" />
                    <Link to="landing" smooth={true} className="nav-link px-1">
                        <p>Diogo Santos</p>
                    </Link>
                </div>


                <ul className="nav">
                    <li className="nav-item ms-4">
                        <Link to="about" smooth={true} className="nav-link px-2"><span className="me-2">01.</span>Sobre</Link>
                    </li>
                    <li className="nav-item ms-4">
                        <Link to="projects" smooth={true} className="nav-link px-2"><span className="me-2">02.</span>Projetos</Link>
                    </li>
                    <li className="nav-item ms-4">
                        <Link to="contact" smooth={true} className="nav-link px-2"><span className="me-2">03.</span>Contato</Link>
                    </li>
                </ul>
                
            </div>
        </div>
    )
};

export default Navbar;