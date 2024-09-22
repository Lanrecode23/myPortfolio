import React, { useEffect } from 'react'
import '../css/skills.css'
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
        <>
            <div className="skills_text text-center mt-3">
                <h3>Skills</h3>
            </div>
            <div class="wrapper text-center">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
            </div>

            <div className="container">
                <div className="row row-cols-lg-4">
                    <div className="col-md-4">
                        <div className="card">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills
