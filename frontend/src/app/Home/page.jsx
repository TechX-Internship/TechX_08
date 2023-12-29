// Home/page.js
import React from "react"
import styles from "../styles/home.module.css"

const HomePage = () => {
	return (
		<main className={`${styles.main} container-fluid`}>
			<div className={styles.container}>
				<div className={styles.data}>
					<h2>
						We Have <span className={styles.years}> 10 Years</span>
						<br /> Of LeadershipIn <br /> Bopp And Polyster Films.
					</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
					<button>Get a Quote</button>
				</div>
			</div>
		</main>
	)
}

export default HomePage
