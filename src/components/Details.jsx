import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../public/Data'
import Header from './Header'

function Details() {
    const { id } = useParams()
    const myProject = Data.find((data) => data.id === parseInt(id))
    return (
        <>
         <Header/>
        <div className="container p-5">
            <div className="detail_header mb-5">
                <h3>Project Details</h3>
            </div>
            <div className="row row-cols-4">
                <div className="col-md-4">
                    <img src={myProject.img} alt={myProject.title} className="img-fluid h-25" />
                </div>
                <div className="col-md-6 mt-5">
                    <h2>{myProject.title}</h2>
                    <p>{myProject.details}</p>
                    <a href={myProject.link} className="btn btn-primary">Visit Site</a>
                </div>
            </div>
        </div>
        </>

    )
}

export default Details
