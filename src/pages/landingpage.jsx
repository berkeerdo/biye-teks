import React from 'react'
import Navbar from "../components/navbar/index";
import Vid from "../components/header/index.jsx";
import MainAbout from "../components/main/index.jsx";
import Productmain from "../components/productMain/index.jsx";
import Footer from "../components/footer/index.jsx";

const Landingpage = () => {
    return (
        <>
            <Navbar/>
            <Vid/>
            <MainAbout/>
            <Productmain/>
            <Footer/>
        </>
    )
}

export default Landingpage
