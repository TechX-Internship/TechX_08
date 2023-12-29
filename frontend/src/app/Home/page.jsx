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
			</main>
		</>
	)
}

export default HomePage
