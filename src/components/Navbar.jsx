import React, { useState, useEffect } from 'react';
import navImg from "../images/iconWhite.png";

function Navbar() {
    const [bgClass, setBgClass] = useState('bg-transparent');

    useEffect(() => {
        const handleScroll = () => {
            // Controlla la posizione dello scroll e aggiorna la classe di background
            if (window.scrollY >= 100) {
                setBgClass('myBgColor');
            } else {
                setBgClass('bg-transparent');
            }
        };

        // Aggiungi l'event listener
        window.addEventListener('scroll', handleScroll);

        // Rimuovi l'event listener quando il componente viene smontato
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-md navbar-dark fixed-top ${bgClass}`} style={{ transition: 'all 0.5s' }}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={navImg} alt="logo" style={{ height: '65px' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1">
                            <li className="nav-item pe-2">
                                <a className="nav-link myTextColor" href="#about">About</a>
                            </li>
                            <li className="nav-item pe-2">
                                <a className="nav-link myTextColor" href="#technology-skills">Technology & Skills</a>
                            </li>
                            <li className="nav-item pe-2">
                                <a className="nav-link myTextColor" href="#studies">Studies</a>
                            </li>
                            <li className="nav-item pe-2">
                                <a className="nav-link myTextColor" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link myButtonStyle" href="#get-in-touch">Get in Touch</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;