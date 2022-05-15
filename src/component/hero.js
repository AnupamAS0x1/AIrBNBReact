import React  from "react";
import group37 from "./img/2.png";


const Hero = () => {
    return (
        <section className="hero">
            <img src={group37} className="hero--photo" />
            <h1 className="hero--header"> Online Experiance </h1>
            <p className="hero--para"> Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. </p>
        </section>
    )
}

export default Hero