import React from "react";
import NavBar from "../navbar/Navbar";
import "./About.css";

const About = () => {
    return (
        <div className="cont">
            <NavBar />
            <div className="contenedor-about">
                <h1>About</h1>
                <div className="objetivos">
                    <h4>Mision</h4>
                        <p>Brindar un servicio de calidad a nuestros clientes, con el fin de satisfacer sus necesidades y expectativas.</p>
                    <h4>Vision</h4>
                        <p>Ser una empresa líder en el mercado, con una amplia cartera de clientes, que nos permita ser reconocidos por la calidad de nuestros servicios.</p>
                    <h4>Valores</h4>
                        <p>Responsabilidad, compromiso, honestidad, respeto, puntualidad, calidad,innovación, trabajo en equipo, servicio al cliente.</p>
                </div>
                {/* <div className="imagen-about"></div> */}
                <div className="contenedores-link">
                <div className="link">Front End
                    <a href="https://github.com/MrBluegru" target= '_blanck'> Miguel E. Rodriguez </a>
                    <a href="https://github.com/DarioMarcuzzi" target= '_blanck' > Dario Marcuzzi </a>
                    <a href="https://github.com/DaianaOli" target= '_blanck' > Luz Olivares </a>
                </div>
                <div className="link">Back End
                    <a href="https://github.com/noravers" target= '_blanck'> Nora Rodriguez </a>
                    <a href="https://github.com/leamercado" target= '_blanck'> Leandro Mercado </a>
                    <a href="https://github.com/francormin" target= '_blanck'> Franco Corniglione </a>
                    <a href="https://github.com/lucasezr" target= '_blanck'> Lucas Rodriguez </a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default About;