import React, { useState, useEffect } from 'react';

function Header() {
    const [currentTitle, setCurrentTitle] = useState('title1');

    useEffect(() => {
        const titles = ['title1', 'title2', 'title3'];
        let currentIdx = 0;

        const interval = setInterval(() => {
            currentIdx = (currentIdx + 1) % titles.length;
            setCurrentTitle(titles[currentIdx]);
        }, 4000); // cambia immagine ogni 3 secondi

        return () => clearInterval(interval); // Pulizia dell'intervallo quando il componente viene smontato
    }, []);

    return (
        <section className="headerSection d-flex align-items-center myBgColor">
            <div className={`backgroundImage title1 ${currentTitle === 'title1' ? 'visible' : ''}`}></div>
            <div className={`backgroundImage title2 ${currentTitle === 'title2' ? 'visible' : ''}`}></div>
            <div className={`backgroundImage title3 ${currentTitle === 'title3' ? 'visible' : ''}`}></div>
            <div className="header-overlay-section"></div>
            <div className="container z-2 position-relative">
                <h1 className="display-1 mb-3">
                    I'm <span>Web Developer</span>.
                </h1>
                <h2 className="display-1 mb-3">
                    I'm <span>Giuseppe</span> Rinaldi.
                </h2>
                <h2 className="display-1 mb-3">
                    Hello <span>World!</span>
                </h2>
            </div>
        </section>
    );
}

export default Header;
