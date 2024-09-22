import React from 'react'
import '../css/skills.css'
function About() {
  return (
    <section id='about'>
      <section class="welcome_area p_120  mt-5">
        <div class="container welcome_container mt-2 p-5">
          <div class="row welcome_inner">
            <div class="col-lg-6">
              <div class="welcome_text" data-aos="slide-right">
                <h4>About Myself</h4>
                <p>I'm Matthew, a software developer specializing in front-end technologies like React.js. Passionate about creating dynamic, user-friendly web applications, I thrive on solving problems and continuous learning. Outside work, I enjoy Gaming, Football, and exploring new tech. Let's connect and create something amazing!</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="tools_expert" data-aos="zoom-in-right">
                <h3>Tools Expertness</h3>
                <div class="skill_main">
                  <div class="skill_item">
                    <h4>Html <span class="counter">90</span>%</h4>
                    <div class="progress html">
                      <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>Css <span class="counter">85</span>%</h4>
                    <div class="progress css">
                      <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>Javascript <span class="counter">76</span>%</h4>
                    <div class="progress js">
                      <div class="progress-bar" role="progressbar" aria-valuenow="76" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>React <span class="counter">71</span>%</h4>
                    <div class="progress react">
                      <div class="progress-bar" role="progressbar" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
