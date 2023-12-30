// Home/page.js
import React from "react"
import styles from "../styles/home.module.css"

const HomePage = () => {
	return (
		<>
			<main className={styles.main}>
				<section className={`${styles.mainbanner} `}>
					<div className="container-fluid p-0">
						<div className={styles.leftdata}>
							<div className="">
								<h2>
									We Have <span>10 Years</span>
									<br /> Of LeadershipIn Bopp And
									<br /> Polyster Films.
								</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
								<button>Get a quote</button>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.aboutus}`}>
					<div className="container p-0">
						<div className="row g-4 ">
							<div className="col-sm-12 pe-0 pe-sm-3 col-lg-6 order-last order-lg-first">
								<div className={styles.aboutleft}>
									<h4>WHO WE ARE</h4>
									<h3>ABOUT US</h3>
									<p className={styles.firstParagraph}>We Help To Get Solutions</p>
									<p className={styles.secondParagraph}>
										M R K Industries is one of the largest sellers of Packaging film in India, having a capacity of 18000 MT TPA with 10 years of experience. We are the exclusive
										dealer for Jindal Polyfilms Ltd, Asia's...
									</p>
									<div className="row g-0">
										<div className="col-6 pe-0 pe-sm-3">
											<div className={`${styles.aboutcard}`}>
												<div className="d-flex">
													<img src="images/about/rocket.png" alt="image" />
													<h4 className={styles.aboutcardheading}>OUR MISSION</h4>
												</div>
												<p className="pt-4">We fuel our passion for constant growth, both organic & inorganic by....</p>
											</div>
										</div>
										<div className="col-6 pe-0 ">
											<div className={`${styles.aboutcard}`}>
												<div className="d-flex">
													<img src="images/about/bulb.png" alt="image" />
													<h4 className={styles.aboutcardheading}>OUR MISSION</h4>
												</div>
												<p className="pt-4">We fuel our passion for constant growth, both organic & inorganic by....</p>
											</div>
										</div>
									</div>
									<button>Learn More</button>
								</div>
							</div>
							<div className="col-sm-12 col-lg-6 px-0 px-sm-3 order-first order-lg-last">
								<div className={styles.aboutright}>
									<img src="images/about/about.png" alt="" />
									<div className={`${styles.aboutright} ${styles.textdivonimage}`}>
										<img src="images/about/indiamap.png" alt="indiamap" />
										<div>
											<p>Exclusive Dealer For .</p>
											<p>Jindal Poly Flims Pvt. Ltd</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`$ {styles.ourproducts}`}>
					<div className="container p-0">
						<div className={`${styles.sectionheading} text-center pb-4`}>
							<span>18000+MT TPA </span>
							<h3>OUR PRODUCTS</h3>
							<p>
								<span>BOPP</span>
								<span>CPP</span>
								<span>PET</span>
								<span>METALIZED</span>
							</p>
						</div>
						<div className="row">
							<div className="col-12 col-sm-6 col-md-3">
								<div>
									<div className={`${styles.productimagediv} d-flex justify-center`}>
										<img className="img-fluid m-auto" src="images/ourproducts/image1.png" alt="" />
									</div>
									<div className={styles.devider}></div>
									<div className={`${styles.productdatadiv}`}>
										<h4>BOPPFILMS</h4>
										<p>MRK Industries offer full range of BOPP film from 07 to 70 microns whi...</p>
										<button>
											<img src="images/ourproducts/send.png" alt="" />
										</button>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-3">
								<div>
									<div className={`${styles.productimagediv} d-flex justify-center`}>
										<img className="img-fluid m-auto" src="images/ourproducts/image2.png" alt="" />
									</div>
									<div className={styles.devider}></div>
									<div className={`${styles.productdatadiv}`}>
										<h4>BOPPFILMS</h4>
										<p>MRK Industries offer full range of BOPP film from 07 to 70 microns whi...</p>
										<button>
											<img src="images/ourproducts/send.png" alt="" />
										</button>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-3">
								<div>
									<div className={`${styles.productimagediv} d-flex justify-center`}>
										<img className="img-fluid m-auto" src="images/ourproducts/image3.png" alt="" />
									</div>
									<div className={styles.devider}></div>
									<div className={`${styles.productdatadiv}`}>
										<h4>BOPPFILMS</h4>
										<p>MRK Industries offer full range of BOPP film from 07 to 70 microns whi...</p>
										<button>
											<img src="images/ourproducts/send.png" alt="" />
										</button>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-md-3">
								<div>
									<div className={`${styles.productimagediv} d-flex justify-center`}>
										<img className="img-fluid m-auto" src="images/ourproducts/image1.png" alt="" />
									</div>
									<div className={styles.devider}></div>
									<div className={`${styles.productdatadiv}`}>
										<h4>BOPPFILMS</h4>
										<p>MRK Industries offer full range of BOPP film from 07 to 70 microns whi...</p>
										<button>
											<img src="images/ourproducts/send.png" alt="" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default HomePage
