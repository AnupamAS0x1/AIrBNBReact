import React from "react";
import logo from "./img/1.png"


const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="img-n">
                    <img src={logo} className="nav-img" />
                </div>

            </nav>
        </div>
    )
}

export default Navbar