import { Link as LinkTo } from 'react-scroll'
import { useState } from 'react';
import "./style.css";

export default function Navbar() {
    const [handleClick, setHandleClick] = useState(false);
    function toggleMenu(){
        setHandleClick(!handleClick);
        console.log(handleClick)
    }
    return (
        <header>
            <nav>
                <h2>Diogo Santos</h2>
                <MobileMenu onClick={toggleMenu}/>
                <ul className={handleClick? "open" : null}>
                    <li><MobileMenu onClick={toggleMenu} open={true} /></li>
                    <li><LinkTo to="landing" smooth={true} onClick={toggleMenu}>Sobre mim</LinkTo></li>
                    <li><LinkTo to="projects" smooth={true} onClick={toggleMenu}>Projetos</LinkTo></li>
                    <li><LinkTo to="contact" smooth={true} onClick={toggleMenu}>Contato</LinkTo></li>
                </ul>

            </nav>
        </header>
    )
}

function MobileMenu({onClick,open}){
    function toggleMenu(e){
        e.preventDefault()
        onClick();
    }
    return(
    <div className={open? "mobile-menu active":"mobile-menu"} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    )
}