import React from "react";
import HomePage from "./Home/page";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css'
import Footer from "./components/Footer";

const Home = () => {
    return (
        <>
            <main>
                <Header />
                <HomePage />
                <Footer />
            </main>
        </>
    );
};

export default Home;
