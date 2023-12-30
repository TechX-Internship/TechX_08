import React from "react"
import Link from "next/link"
import styles from "../styles/header.module.css"

const Header = () => {
	return (
		<header className={`${styles.header}`}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<img src="/images/header/logo.png" alt="Logo" className="" />
				</div>
				<nav className={`${styles.nav} d-none d-lg-block `}>
					<Link href="/" className="px-3">
						Applications
					</Link>
					<Link href="/aboutus" className="px-3">
						About
					</Link>
					<Link href="/products" className="px-3">
						Products
					</Link>
					<Link href="/productenquiry" className="px-3">
						Products Enquiry
					</Link>
					<Link href="/contactus" className="px-3">
						Contact us
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
