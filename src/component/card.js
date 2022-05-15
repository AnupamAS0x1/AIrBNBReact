import React from "react";
import girl from "./img/3.png"

const Card = () => {
    return  (
        <div className="card">
            <img src ={girl} className="card-girl" />
            <div className="text-girl">
            <span>⭐️5.6</span>
            <span>(6)</span>
            <span>USA</span>
            </div>
            <p>life lessons with katie Zaferes</p>
            <p> from $136/person</p>
        </div>
    
    
       
)


}

export default Card