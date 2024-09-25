import React, { useEffect } from 'react';
import '../css/skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            offset: 200,
            delay: 50,
        });
    }, []);

    return (
        <section id='skills'>
            <div className="skills_text text-center mt-3">
                <h3>Skills</h3>
            </div>
            <div className="skills_container">
                {/* First Card - Technical Skills */}
                <div class="cards">
                    <div class="tools">
                        <div class="circles">
                            <span class="red box"></span>
                        </div>
                        <div class="circles">
                            <span class="yellow box"></span>
                        </div>
                        <div class="circles">
                            <span class="green box"></span>
                        </div>
                    </div>
                    <div class="card__content">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            width="40"
                            height="40"
                        >
                            <path
                                d="M320 0C143.1 0 0 143.1 0 320s143.1 320 320 320 320-143.1 320-320S496.9 0 320 0zm0 480c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160z"
                                fill="currentColor"
                            />
                        </svg>
                        <h4>Technical Skills</h4>
                        <p>- Experience in javascript, React.js for building user interfaces.</p>
                        <p>- Proficient in Python for scripting and automation.</p>
                        <p>- Expertise in Firebase for authentication and database management.</p>
                    </div>
                </div>

                {/* Second Card - Soft Skills */}
                <div class="cards">
                    <div class="tools">
                        <div class="circles">
                            <span class="red box"></span>
                        </div>
                        <div class="circles">
                            <span class="yellow box"></span>
                        </div>
                        <div class="circles">
                            <span class="green box"></span>
                        </div>
                    </div>
                    <div class="card__content">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            width="40"
                            height="40"
                        >
                            <path
                                d="M528 64H48C21.5 64 0 85.5 0 112v272c0 26.5 21.5 48 48 48h156.2L288 480l83.8-48H528c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48z"
                                fill="currentColor"
                            />
                        </svg>
                        <h4>Soft Skills</h4>
                        <p>- Strong communication skills and teamwork.</p>
                        <p>- Problem-solving and critical thinking abilities.</p>
                        <p>- Adaptable and open to learning new technologies.</p>
                    </div>
                </div>

                {/* Third Card - Collaboration */}
                <div class="cards">
                    <div class="tools">
                        <div class="circles">
                            <span class="red box"></span>
                        </div>
                        <div class="circles">
                            <span class="yellow box"></span>
                        </div>
                        <div class="circles">
                            <span class="green box"></span>
                        </div>
                    </div>
                    <div class="card__content">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            width="40"
                            height="40"
                        >
                            <path
                                d="M96 0C64.5 0 48 16.5 48 48v416c0 26.5 16.5 48 48 48h192v-64H96V64h448v384h-192v64h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H96zm400 320c-53 0-96 43-96 96v96H240v-96c0-53-43-96-96-96s-96 43-96 96v96h576v-96c0-53-43-96-96-96z"
                                fill="currentColor"
                            />
                        </svg>
                        <h4>Collaboration</h4>
                        <p>- Experience working with Git for version control.</p>
                        <p>- Collaborated on projects using GitHub for team development.</p>
                        <p>- Familiar with code reviews, pull requests, and branching.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
