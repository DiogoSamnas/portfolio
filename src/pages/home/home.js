import { useEffect } from "react";
import Aos from "aos";

import { Landing, About, Projects, Contact } from "../../components";
import "./home.css";

function Home() {
    useEffect(() => {
        Aos.init({
            duration: 300,
            offset: 100,
            once: true,
            mirror:false,
            easing: 'ease-in',
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <div id="home" className="container p-0 px-3 px-lg-5">
            <Landing />
            <About />
            <Projects />
            <Contact />
        </div>
    )
};

export default Home;