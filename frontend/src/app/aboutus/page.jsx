import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const aboutus = () => {
	return (
		<>
			<Header />
			<div className="hero d-flex align-items-center">
				<img src="images/main-banner/data-bg.png" alt="" className="data-bg img-fluid position-relative" />
				<span className="position-absolute">ABOUT US</span>
				<img src="images/main-banner/mainbannerimg.png" alt="" className="mainbannerimg" />
			</div>
			<div className="aboutus container">
				<h3 className="title text-center">WHO WE ARE</h3>
				<div className="row py-5">
					<div className="col-12 col-xl-6 order-2 order-xl-1">
						<div className="aboutpageleft">
							<span>We Help To Get Solutions</span>
							<p>
								M R K Industries is one of the largest seller of Packaging film in India having capacity of 18000 MT TPA having experience of 10 years.We are Exclusive dealer for
								Jindal Polyfilms Ltd Asia's largest packing film manufacture. Business started with 8 MT per month in early 2007 and now we are the largest seller in India for BOPP TT
								Grade Film (Tape and Textile) used for Textiles Bags & Adhesive Tape. The group is involved in diverse businesses including packaging films, textiles, and dyes &
								chemicals. We are serving more than 150 satisfied valued customer across India.
							</p>
							<div className="d-flex mt-5">
								<img src="images/about/indiamap.png" alt="indiamap" className="me-2" />
								<div className="">
									<p className="m-0 pt-0 pb-1 fw-bold">Exclusive Dealer For .</p>
									<p className="m-0 pt-0 fw-bold">Jindal Poly Flims Pvt. Ltd</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-xl-6 order-1 order-xl-2">
						<div>
							<img src="images/about/about.png" alt="" className="aboutpageright m-auto d-block mb-4 mb-xl-0" />
						</div>
					</div>
				</div>
				<div className="row g-4 pb-5 mb-4 justify-content-center">
					<div className="col-6 pe-0 pe-sm-3">
						<div className="aboutcard">
							<div className="d-flex">
								<img src="images/about/rocket.png" alt="image" />
								<h4 className="aboutcardheading">OUR MISSION</h4>
							</div>
							<p className="pt-4">We fuel our passion for constant growth, both organic & inorganic by....</p>
						</div>
					</div>
					<div className="col-6 pe-0 pe-sm-3">
						<div className="aboutcard">
							<div className="d-flex">
								<img src="images/about/rocket.png" alt="image" />
								<h4 className="aboutcardheading">OUR MISSION</h4>
							</div>
							<p className="pt-4">We fuel our passion for constant growth, both organic & inorganic by....</p>
						</div>
					</div>
					<div className="col-6 pe-0 pe-sm-3">
						<div className="aboutcard">
							<div className="d-flex">
								<img src="images/about/rocket.png" alt="image" />
								<h4 className="aboutcardheading">OUR MISSION</h4>
							</div>
							<p className="pt-4">We fuel our passion for constant growth, both organic & inorganic by....</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default aboutus
