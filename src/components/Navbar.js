import React from "react";
import airbnbLogo from "../images/airbnb 1 .png";
import "../index.css";
export default function Navbar()
{
    return(
        <nav>
            <img src={airbnbLogo} alt="air-bnb"  className="nav--logo"/>

            </nav>
    )
}