import React from "react";
import heroLogo from "../images/Group 77.png";
export default function Hero()
{
    return(
        <section className="hero--div">
            <img src={heroLogo} alt="group77" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}