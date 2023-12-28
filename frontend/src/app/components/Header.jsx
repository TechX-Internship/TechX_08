import React from "react"
import Link from "next/link"
import styles from "../styles/header.module.css"

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<img src="/images/header/logo.png" alt="Logo" className="h-10 w-auto" />
			</div>
			<nav className={styles.nav}>
				<Link href="/" className="">
					Applications
				</Link>
				<Link href="aboutus" className="text-indigo-600">
					About
				</Link>
				<Link href="products" className="">
					Products
				</Link>
				<Link href="productenquiry" className="">
					Products Enquiry
				</Link>
				<Link href="contactus" className="">
					Contact us
				</Link>
			</nav>
		</header>
	)
}

export default Header
