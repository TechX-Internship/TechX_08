import React from "react";
import HomePage from "./Home/page";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css'

const Home = () => {
    return (
        <>
            <main>
                <Header />
                <HomePage />
            </main>
        </>
    );
};

export default Home;
