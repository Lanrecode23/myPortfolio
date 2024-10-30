import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../../public/Data'
import Header from './Header'
import '../css/details.css'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Details() {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
            offset: 200,
            delay: 50,
        });
    }, []);
    const { id } = useParams()
    const myProject = Data.find((data) => data.id === parseInt(id))
    return (
        <>
            <Header />
            <div className="project_detailPage text-center">
                <h3>Project Details&nbsp; &gt; &nbsp;<span><Link to="/" id='linkHome'>Home</Link></span></h3>
            </div>
            <div className="container-fluid details_container p-5">
                <div className="row row-cols-8">
                    <div className="col-md-4 image" data-aos="zoom-in-up">
                        <img src={myProject.img} alt={myProject.title} className="img-fluid" />
                    </div>
                    <div className="col-md-6 mt-5 Display_details" data-aos="zoom-in">
                        <h2>{myProject.title}</h2>
                        <p>{myProject.details}</p>
                        <a href={myProject.link} target='_blank'>
                            <button class="button">
                                <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                                Visit Site
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Details
