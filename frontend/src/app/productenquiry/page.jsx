import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const productenquiry = () => {
	return (
		<>
			<Header />
			<div className="hero d-flex align-items-center">
				<img src="images/main-banner/data-bg.png" alt="" className="data-bg img-fluid position-relative" />
				<span className="position-absolute">PRODUCT ENQURY</span>
				<img src="images/main-banner/mainbannerimg.png" alt="" className="mainbannerimg" />
			</div>
			<div className="container text-center productenquirypage">
				<div className="row">
					<div className="col-12 col-md-6">
						<form>
							<div className="mb-3">
								<input type="text" className="form-control" placeholder="Customer/Company Name" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>
							<div className="mb-3">
								<select className="form-select" placeholder="Product" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }}>
									<option value="" disabled selected>
										Product
									</option>
									<option value="product1">Product 1</option>
									<option value="product2">Product 2</option>
								</select>
							</div>
							<div className="mb-3">
								<input type="text" className="form-control" placeholder="Remark" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>
							<div className="mb-3">
								<select className="form-select" placeholder="Company" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }}>
									<option value="" disabled selected>
										Company
									</option>
									<option value="company1">Company 1</option>
									<option value="company2">Company 2</option>
								</select>
							</div>
							<div className="mb-3">
								<input type="text" className="form-control" placeholder="State/Province" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>
							<div className="mb-3">
								<input type="text" className="form-control" placeholder="City" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>
						</form>
					</div>

					<div className="col-12 col-md-6">
						<form>
							<div className="mb-3">
								<input type="text" className="form-control" placeholder="Landline" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>
							<div className="mb-3">
								<input type="text" className="form-control" placeholder="Mobile" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>
							<div className="mb-3">
								<input type="text" className="form-control" placeholder="Email Address" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>
							<div className="mb-3">
								<input type="text" className="form-control" placeholder="Contact Person" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }} />
							</div>
							<div className="mb-3">
								<textarea className="form-control" placeholder="Address" rows="4" style={{ width: "100%", color: "#D3D3D3", padding: "15px" }}></textarea>
							</div>
						</form>
					</div>
				</div>
				<button className="mt-3">Submit</button>
			</div>
			<Footer />
		</>
	)
}

export default productenquiry
