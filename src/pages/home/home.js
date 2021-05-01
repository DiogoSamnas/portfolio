import { useEffect } from "react";
import Aos from "aos";

import { Landing, About, Projects, Contact, SideLinks } from "../../components";
import "./home.css";

function Home() {
    useEffect(() => {
        Aos.init({
            duration: 300,
            offset: 100,
            once: true,
            mirror: false,
            easing: 'ease-in',
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <div id="home" className="container p-0 px-3 px-lg-5">
            <SideLinks />
            <Landing />
            <Projects />
            <About />
            <Contact />
        </div>
    )
};

export default Home;