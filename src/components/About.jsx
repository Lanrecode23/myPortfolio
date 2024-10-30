import React from 'react'
import '../css/skills.css'
function About() {
  return (
    <section id='about'>
      <section class="welcome_area p_120  mt-5">
        <div class="container welcome_container mt-2 p-4">
          <div class="row welcome_inner">
            <div class="col-lg-6">
              <div class="welcome_text" data-aos="slide-right">
                <h4>About Myself</h4>
                <p>I'm Matthew, a software developer specializing in front-end technologies like React.js. With a strong foundation in HTML, CSS, JavaScript, and responsive design, I build dynamic, user-friendly web applications that deliver seamless user experiences across devices. I'm passionate about problem-solving, constantly learning new techniques, and leveraging modern frameworks like React to develop interactive interfaces

                  Outside of coding, I enjoy gaming, football, and staying up-to-date with the latest trends in tech. I believe in the power of collaboration and innovation, and I'm always eager to connect with like-minded individuals to work on impactful projects. Let's connect and create something amazing together!</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="tools_expert" data-aos="zoom-in-right">
                <h3>Tools Expertness</h3>
                <div class="skill_main">
                  <div class="skill_item">
                    <h4>Html <span class="counter">98</span>%</h4>
                    <div class="progress html">
                      <div class="progress-bar" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>Css <span class="counter">95</span>%</h4>
                    <div class="progress css">
                      <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>Bootstrap <span class="counter">95</span>%</h4>
                    <div class="progress bootstrap">
                      <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>Javascript <span class="counter">86</span>%</h4>
                    <div class="progress js">
                      <div class="progress-bar" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div class="skill_item">
                    <h4>React <span class="counter">79</span>%</h4>
                    <div class="progress react">
                      <div class="progress-bar" role="progressbar" aria-valuenow="79" aria-valuemin="0" aria-valuemax="100"></div>
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
