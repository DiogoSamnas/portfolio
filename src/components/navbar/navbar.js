import { useState } from 'react';
import { Link } from 'react-scroll'
import './navbar.css';
import Logo from '../../svg/diogo.svg';
import { FiMenu, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { AiOutlineClose, AiOutlineBehance } from "react-icons/ai";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    function handleClick(e) {
        e.preventDefault();
        setIsOpen(!isOpen)
    }
	const [Navbar, setNavbar] = useState(false);

	const scrollDown = () =>{
		if(window.scrollY >= 140){
			setNavbar(true);
		}else{
			setNavbar(false);
		}
	};
	window.addEventListener('scroll',scrollDown);

    return (
        <div id="navbar" className={Navbar ? "w-100 position-fixed fixed-top bg-white":"w-100 position-absolute fixed-top bg-white"}>
            <div className="nav navbar container justify-content-between align-items-center px-3 px-lg-5">

                <div className="logo d-flex align-items-center">
                    <img className="me-3" src={Logo} alt="Diogo Santos" />
                    <Link to="landing" smooth={true} className="nav-link px-1">
                        <p>Diogo Santos</p>
                    </Link>
                </div>

                <div className="menu d-flex d-md-none" onClick={handleClick}><FiMenu /></div>

                <ul className="nav d-none d-md-flex">
                    <li className="nav-item ms-4">
                        <Link to="projects-title" smooth={true} className="nav-link px-2">Projetos</Link>
                    </li>
                    <li className="nav-item ms-4">
                        <Link to="about" smooth={true} className="nav-link px-2">Sobre</Link>
                    </li>
                    <li className="nav-item ms-4">
                        <Link to="contact" smooth={true} className="nav-link px-2">Contato</Link>
                    </li>
                </ul>

                <div className={isOpen ? "nav-mobile nav flex-column d-flex d-md-none" : "nav-mobile d-none d-md-none"}>
                    <i onClick={handleClick} className="position-fixed fixed-top mt-5 m-auto d-flex justify-content-center"><AiOutlineClose /></i>

                    <Link onClick={handleClick} to="landing" smooth={true} className="nav-link px-2">
                        Início
                    </Link>
                    <Link onClick={handleClick} to="projects-title" smooth={true} className="nav-link px-2">
                        Projetos
                    </Link>
                    <Link onClick={handleClick} to="about" smooth={true} className="nav-link px-2">
                        Sobre
                    </Link>
                    <Link onClick={handleClick} to="contact" smooth={true} className="nav-link px-2">
                        Contato
                    </Link>
                    <div className="nav d-flex flex-row w-100 position-fixed fixed-bottom px-5 py-3 justify-content-between align-baseline">
                        <a href="https://github.com/DiogoSamnas" rel="noreferrer" target="_blank"><FiGithub /></a>
                        <a href="https://www.instagram.com/diogoodiego/" rel="noreferrer" target="_blank"><FiInstagram /></a>
                        <a href="https://www.behance.net/diogoodiego" rel="noreferrer" target="_blank"><AiOutlineBehance /></a>
                        <a href="https://www.linkedin.com/in/diogo-santos-b23ab31a0/" rel="noreferrer" target="_blank" ><FiLinkedin /></a>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Navbar;