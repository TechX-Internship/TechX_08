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
			<div className="container contactuspage">
				<div className="row">
					<div className="col-12 position-relative">
						<img src="images/contactus/page.png" alt="" className="img-fluid" />
					</div>
					<div className="col-12">
						<form className="m-auto">
							<div className="form-group w-100 mb-2">
								<input type="text" className="form-control" id="firstName" placeholder="Enter your first name" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>

							<div className="form-group w-100 mb-2">
								<input type="text" className="form-control" id="street" placeholder="Enter your street" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>

							<div className="form-group mb-2">
								<div className="row w-100">
									<div className="col">
										<input type="text" className="form-control" id="city" placeholder="Enter your city" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
									</div>
									<div className="col">
										<input type="text" className="form-control" id="zip" placeholder="Enter your ZIP code" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
									</div>
								</div>
							</div>

							<div className="form-group w-100 mb-2">
								<input type="email" className="form-control" id="email" placeholder="Enter your email" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>

							<div className="form-group w-100 mb-2">
								<textarea className="form-control" id="message" rows="4" placeholder="Type your message here"></textarea>
							</div>

							<div className="form-group w-100 mb-2 form-check">
								<input type="checkbox" className="form-check-input" id="ndaCheck" />
								<label className="form-check-label custom-checkbox-label" htmlFor="ndaCheck">
									I want to protect my data by signing an NDA
								</label>
							</div>

							<button className="submitbtn w-100 btn btn-primary">Submit</button>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default contactus
