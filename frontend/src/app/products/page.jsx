import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const products = () => {
	return (
		<>
			<Header />
			<div className="hero d-flex align-items-center">
				<img src="images/main-banner/data-bg.png" alt="" className="data-bg img-fluid position-relative" />
				<span className="position-absolute">PRODUCTS</span>
				<img src="images/main-banner/mainbannerimg.png" alt="" className="mainbannerimg" />
			</div>
			<div className="container pt-5">
				<div className="sectionheading text-center pb-4">
					<span>18000+MT TPA </span>
					<h3>OUR PRODUCTS</h3>
					<p>
						<span>BOPP</span>
						<span>CPP</span>
						<span>PET</span>
						<span>METALIZED</span>
					</p>
				</div>
				<div className="row ourproductsrow">
					<div className="col-12 col-lg-4 ps-0">
						<img src="./images/ourproducts/image1.png" alt="" className="img-fluid m-auto m-lg-0 d-block" />
					</div>
					<div className="col-12 col-lg-8 py-3">
						<h4>BOPP FILMS</h4>
						<p className="m-0 pb-5">
							MRK Industries offer full range of BOPP films from 07 to 70 microns which include Transparent BOPP heat sealable and non heat sealable , Solid white Film, Matte film , Coex
							Films, Pearlised film, Label BOPP Film, Opaque film , Release film , Tape and Textile film and Metallise BOPP film
						</p>
						<span>Type:</span>
						<ul className="p-0 mt-3 d-flex gap-3 flex-wrap">
							<li className="list-group border border-5 p-2">Matte</li>
							<li className="list-group border border-5 p-2">Cavitated - Pearlized And White</li>
							<li className="list-group border border-5 p-2">Opaque White</li>
							<li className="list-group border border-5 p-2">Transparent Heat Sealebal</li>
							<li className="list-group border border-5 p-2">Transparent Not Heat Sealebal</li>
						</ul>
					</div>
				</div>
				<div className="row ourproductsrow">
					<div className="col-12 col-lg-4 ps-0">
						<img src="./images/ourproducts/image2.png" alt="" className="img-fluid m-auto m-lg-0 d-block" />
					</div>
					<div className="col-12 col-lg-8 py-3">
						<h4>PET FILMS</h4>
						<p className="m-0 pb-5">
							MRK Industries offer full range of BOPP films from 07 to 70 microns which include Transparent BOPP heat sealable and non heat sealable , Solid white Film, Matte film , Coex
							Films, Pearlised film, Label BOPP Film, Opaque film , Release film , Tape and Textile film and Metallise BOPP film
						</p>
						<span>Type:</span>
						<ul className="p-0 mt-3 d-flex gap-3 flex-wrap">
							<li className="list-group border border-5 p-2">Met - Pet</li>
							<li className="list-group border border-5 p-2">Met - Bopp</li>
						</ul>
					</div>
				</div>
				<div className="row ourproductsrow">
					<div className="col-12 col-lg-4 ps-0">
						<img src="./images/ourproducts/image3.png" alt="" className="img-fluid m-auto m-lg-0 d-block" />
					</div>
					<div className="col-12 col-lg-8 py-3">
						<h4>BOPP FILMS</h4>
						<p className="m-0 pb-5">
							MRK Industries offer full range of BOPP films from 07 to 70 microns which include Transparent BOPP heat sealable and non heat sealable , Solid white Film, Matte film , Coex
							Films, Pearlised film, Label BOPP Film, Opaque film , Release film , Tape and Textile film and Metallise BOPP film
						</p>
						<span>Type:</span>
						<ul className="p-0 mt-3 d-flex gap-3 flex-wrap">
							<li className="list-group border border-5 p-2">Matte</li>
							<li className="list-group border border-5 p-2">Cavitated - Pearlized And White</li>
							<li className="list-group border border-5 p-2">Opaque White</li>
							<li className="list-group border border-5 p-2">Transparent Heat Sealebal</li>
							<li className="list-group border border-5 p-2">Transparent Not Heat Sealebal</li>
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default products
