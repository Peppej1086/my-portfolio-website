import React, { useState } from 'react';

function Header() {
    const [hoveredTitle, setHoveredTitle] = useState(null);

    const handleMouseEnter = (title) => {
        setHoveredTitle(title);
    };

    const handleMouseLeave = () => {
        setHoveredTitle(null);
    };

    return (
        <section className="headerSection d-flex align-items-center myBgColor">
            <div className={`backgroundImage title1 ${hoveredTitle === 'title1' ? 'visible' : ''}`}></div>
            <div className={`backgroundImage title2 ${hoveredTitle === 'title2' ? 'visible' : ''}`}></div>
            <div className={`backgroundImage title3 ${hoveredTitle === 'title3' ? 'visible' : ''}`}></div>
            <div className="header-overlay-section"></div>
            <div className="container z-2 position-relative">
                <h1 className="display-1 mb-3" 
                    onMouseEnter={() => handleMouseEnter('title1')} 
                    onMouseLeave={handleMouseLeave}>
                    <span>I'm</span> Web Developer<span>.</span>
                </h1>
                <h2 className="display-1 mb-3" 
                    onMouseEnter={() => handleMouseEnter('title2')} 
                    onMouseLeave={handleMouseLeave}>
                    <span>I'm</span> Giuseppe<span> Rinaldi.</span>
                </h2>
                <h2 className="display-1 mb-3" 
                    onMouseEnter={() => handleMouseEnter('title3')} 
                    onMouseLeave={handleMouseLeave}>
                    <span>Hello</span> World!
                </h2>
            </div>
        </section>
    );
}

export default Header;