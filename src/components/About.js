// src/components/About.js
import React, { useState } from 'react';

const About = () => {
    const [showAbout, setShowAbout] = useState(false);

    return (
        <section>
            <button onClick={() => setShowAbout(!showAbout)}>
                Click to know about me
            </button>
            {showAbout && (
                <div id="about-me-section">
                    <h2>About Me</h2>
                    <p>Hey there! Akwaaba(Welcome)! I am an aspiring software engineer...</p>
                </div>
            )}
        </section>
    );
};

export default About;
