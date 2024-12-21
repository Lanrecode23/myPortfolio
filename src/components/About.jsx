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
                <h4>About Myself <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none" viewBox="0 0 24 25" id="about-me">
                  <rect width="24" height="24" y=".135" fill="url(#paint0_linear_302_4463)" rx="8"></rect>
                  <path fill="#fff" fill-rule="evenodd" d="M4 9V15.1818H5.09091V11.2167C5.11382 11.1916 5.13705 11.166 5.16066 11.1399C5.57687 10.6801 6.11034 10.0909 7.09091 10.0909C7.30124 10.0909 7.56196 10.1576 7.75454 10.2793C7.93964 10.3963 8 10.5172 8 10.6364V15.1818H9.09091V10.8221C9.4709 10.4484 9.98084 10.0909 10.7273 10.0909C10.9376 10.0909 11.1983 10.1576 11.3909 10.2793C11.5761 10.3963 11.6364 10.5172 11.6364 10.6364V15.1818H12.7273V10.6364C12.7273 10.0282 12.3641 9.60375 11.9737 9.35708C11.5908 9.11513 11.1243 9 10.7273 9C9.85679 9 9.20495 9.32647 8.73057 9.69049C8.61322 9.5564 8.477 9.44535 8.33729 9.35708C7.95442 9.11513 7.48788 9 7.09091 9C6.23097 9 5.57107 9.32832 5.09091 9.69305V9H4ZM20 12.6364H14.9844C15.2218 13.4759 15.9936 14.0909 16.9091 14.0909C17.5453 14.0909 18.112 13.7945 18.4791 13.33L19.3349 14.0065C18.7697 14.7215 17.893 15.1818 16.9091 15.1818C15.202 15.1818 13.8182 13.798 13.8182 12.0909C13.8182 10.3839 15.202 9 16.9091 9C18.6161 9 20 10.3839 20 12.0909V12.6364ZM14.9844 11.5455C15.2218 10.706 15.9936 10.0909 16.9091 10.0909C17.8246 10.0909 18.5964 10.706 18.8338 11.5455H14.9844Z" clip-rule="evenodd"></path>
                  <defs>
                    <linearGradient id="paint0_linear_302_4463" x1="0" x2="24" y1="12.135" y2="12.135" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#ED6D6B"></stop>
                      <stop offset="1" stop-color="#F0B076"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                </h4>
                <p>I'm Matthew, a software developer specializing in front-end technologies like React.js. With a strong foundation in HTML, CSS, JavaScript, and responsive design, I build dynamic, user-friendly web applications that deliver seamless user experiences across devices. I'm passionate about problem-solving, constantly learning new techniques, and leveraging modern frameworks like React to develop interactive interfaces

                  Outside of coding, I enjoy gaming, football, and staying up-to-date with the latest trends in tech. I believe in the power of collaboration and innovation, and I'm always eager to connect with like-minded individuals to work on impactful projects. Let's connect and create something amazing together!</p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="tools_expert " data-aos="zoom-in-right">
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
