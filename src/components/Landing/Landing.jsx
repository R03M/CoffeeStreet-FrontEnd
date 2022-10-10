import React from 'react';
import logo from "../../media/coffeeStreet.png";
import { Link } from 'react-router-dom';
import "./Landing.css";

const Landing = () => {
    return (
        <div className="contenedor-landing">
            <div className="card"/>
            <div className="contendor-descripcion">
                <img className="img" src= {logo} alt="logo" />
                <h1>La mejor cafetería de la ciudad</h1>
                <p>Gran variedad en aroma, sabor, cuerpo, color y textura.
                Preparados y servidos bajo máximas normas de calidad, brindándoles a nuestros clientes un servicio excelso.
                </p>
                    <div className='buttons'>
                        <Link to="/home">
                            <button class="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">Learn More</span>
                            </button>
                        </Link>
                        <Link to="/about">
                            <button class="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">About</span>
                            </button>
                        </Link>
                    </div>
            </div>
        </div>
    );
}

export default Landing;
