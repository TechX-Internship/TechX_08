import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const contactus = () => {
	return (
		<>
			<Header />
			<div className="hero d-flex align-items-center">
				<img src="images/main-banner/data-bg.png" alt="" className="data-bg img-fluid position-relative" />
				<span className="position-absolute">CONTACT US</span>
				<img src="images/main-banner/mainbannerimg.png" alt="" className="mainbannerimg" />
			</div>
			<Footer />
		</>
	)
}

export default contactus
