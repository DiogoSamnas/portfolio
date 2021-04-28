import { useEffect } from "react";
import Aos from "aos";

import { Landing, About, Projects, Contact } from "../../components";
import "./home.css";

function Home() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 0,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div id="home" className="container p-0 px-lg-5">
            <Landing />
            <About />
            <Projects />
            <Contact />
        </div>
    )
};

export default Home;