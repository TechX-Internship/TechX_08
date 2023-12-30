import React from "react"
import styles from "../styles/footer.module.css"

const Footer = () => {
	return (
		<>
			<footer className={styles.footer}>
				<div className="container p-0">
					<div className="row">
						<div className="col-12 col-lg-4">
							<div className={styles.column1}>
								<img src="images/header/logo.png" alt="" className={styles.logo} />
								<div className={`${styles.columnrow} d-flex pt-4`}>
									<img src="images/footer/location.png" alt="" />
									<p className="m-0">C-1331/32, New Bombay Market, Gate no : 3, Umarwada, Surat, Gujarat 395010</p>
								</div>
								<div className={`${styles.columnrow} d-flex`}>
									<img src="images/footer/time.png" alt="" />
									<p className="m-0">Open now - Full hours</p>
								</div>
								<div className={`${styles.columnrow} d-flex`}>
									<img src="images/footer/call.png" alt="" />
									<p className="m-0">093773 07505</p>
								</div>
							</div>
						</div>
						<div className="col-6 col-lg-2 pt-4 pt-lg-0">
							<p className="fs-5 pb-1">Product</p>
							<ul className="p-0">
								<li className="list-group pb-2 m-0">Bopp Films</li>
								<li className="list-group pb-2 m-0">Cpp Films</li>
								<li className="list-group pb-2 m-0">Metalized Films</li>
								<li className="list-group pb-2 m-0">Pet Films</li>
							</ul>
						</div>
						<div className="col-6 col-lg-2">
							<p className="fs-5 pb-1">Applications</p>
							<ul className="p-0">
								<li className="list-group pb-2 m-0">Flexible Packaging</li>
								<li className="list-group pb-2 m-0">Tape & Textile</li>
								<li className="list-group pb-2 m-0">Lidding</li>
								<li className="list-group pb-2 m-0">Print Lamination</li>
								<li className="list-group pb-2 m-0">Industrial</li>
								<li className="list-group pb-2 m-0">Labels</li>
								<li className="list-group pb-2 m-0">Overwrap</li>
							</ul>
						</div>
						<div className="col-6 col-lg-2">
							<p className="fs-5 pb-1">Company</p>
							<ul className="p-0">
								<li className="list-group pb-2 m-0">About Us</li>
								<li className="list-group pb-2 m-0">Careers</li>
								<li className="list-group pb-2 m-0">FAQs</li>
								<li className="list-group pb-2 m-0">Teams</li>
								<li className="list-group pb-2 m-0">Contact Us</li>
							</ul>
						</div>
						<div className="col-6 col-lg-2  pt-5 pt-md-0">
							<p className="fs-5 pb-1">Follow us</p>
							<ul className="p-0 d-flex gap-3">
								<li className="list-group pb-2 m-0">
									<img src="images/footer/fb.png" alt="" />
								</li>
								<li className="list-group pb-2 m-0">
									<img src="images/footer/twitter.png" alt="" />
								</li>
								<li className="list-group pb-2 m-0">
									<img src="images/footer/telegram.png" alt="" />
								</li>
								<li className="list-group pb-2 m-0">
									<img src="images/footer/instagram.png" alt="" />
								</li>
							</ul>
						</div>
					</div>

					<ul className="m-0 d-flex flex-wrap justify-content-center pt-4 gap-3 gap-md-5">
						<li className="list-group">Privacy Policy</li>
						<li className="list-group">Terms of Use</li>
						<li className="list-group">Sales and Refunds</li>
						<li className="list-group">Legal</li>
						<li className="list-group">Site Map</li>
					</ul>
				</div>
			</footer>
		</>
	)
}

export default Footer
