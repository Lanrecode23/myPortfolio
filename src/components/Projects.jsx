import React from 'react';
import Data from '../../public/Data';
import '../css/projects.css';
import { Link } from 'react-router-dom';


function Projects() {
    return (
        <section id='projects'>
        <div className=" project_container mt-5 p-5">
            <h2 className='project_name'>My Featured Projects</h2>
            <div className='underline'></div>
            <div className="row row-cols-lg-4">
                {Data.map((project) => (
                    <div key={project.id} className="col-md-3 mb-3 mb-sm-0">
                        <div className="card" data-aos="fade-up" data-aos-duration="10000">
                        <Link to={`/details/${project.id}`}><img src={project.img} alt='' className="card-img" /></Link>
                            <div className="card-info">
                                <p className="text-title">{project.title}</p>
                                <p className="text-body">{project.techStack}</p>
                            </div>
                            <div className="card-footer">
                                <a href={project.link} target="_blank" rel="noopener noreferrer"><span className="text-title">visit site</span></a>
                                <div className="card-button">
                                <Link to={`/details/${project.id}`}>
                                            <svg className="svg-icon" viewBox="0 0 24 24">
                                                <path d="M12 4.5C7.031 4.5 3.26 7.977 1.18 12 3.26 16.023 7.031 19.5 12 19.5S20.74 16.023 22.82 12C20.74 7.977 16.969 4.5 12 4.5ZM12 17.5C9.79 17.5 8 15.71 8 13.5 8 11.29 9.79 9.5 12 9.5 14.21 9.5 16 11.29 16 13.5 16 15.71 14.21 17.5 12 17.5ZM12 11C10.35 11 9 12.35 9 14 9 15.65 10.35 17 12 17 13.65 17 15 15.65 15 14 15 12.35 13.65 11 12 11Z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <div className="card-button">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="svg-icon">
                                                <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.308 3.438 9.803 8.205 11.387.599.111.82-.26.82-.578v-2.162c-3.338.727-4.04-1.558-4.04-1.558-.546-1.387-1.334-1.757-1.334-1.757-1.091-.747.083-.732.083-.732 1.208.085 1.838 1.21 1.838 1.21 1.072 1.835 2.809 1.305 3.49.999.108-.776.419-1.305.762-1.605-2.666-.305-5.466-1.333-5.466-5.934 0-1.314.469-2.38 1.24-3.22-.124-.305-.54-1.527.118-3.176 0 0 1.008-.323 3.3 1.231.957-.267 1.981-.398 3.004-.403 1.023.005 2.047.136 3.004.403 2.294-1.555 3.298-1.231 3.298-1.231.657 1.649.244 2.871.12 3.176.772.84 1.24 1.906 1.24 3.22 0 4.617-2.81 5.629-5.486 5.925.43.37.815 1.097.815 2.213v3.287c0 .319.219.691.825.575C20.562 22.1 24 17.605 24 12.297c0-6.627-5.373-12-12-12z" />
                                            </svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}

export default Projects;
