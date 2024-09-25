import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../css/notFound.css'
function NotFound() {
    return (
        <>
            <Header />
            <div className='container-fluid notFOund_container bg-body-secondary p-5'>
                <div className="notFound_img">
                    <dotlottie-player src="https://lottie.host/ff513abc-3863-446e-8d6a-c944a3a757df/IzkiYIeyKX.json" background="transparent" speed="1" style={{width: "400px", height: "500px"}} loop autoplay></dotlottie-player>
                </div>
                <div className="back_text text-center">
                    <p>The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
                    <Link to="/">Go to Home</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NotFound
