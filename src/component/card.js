import React from "react";


const Card = (props) => {

    let badgeText 
    if  (props.item.openSpots == 0){
        badgeText = "SOLD OUT"
    }
        else if (props.item.location == "Online"){
            badgeText = "Online"
        }

    return  (
        <div className="card">
           {badgeText && <div className="card--badge">{badgeText} </div>}
            <img src ={`/img/${props.item.coverImg}`} className="card-girl" />
            <div className="text-girl">
            <span>{props.item.rating}</span>
             <span className="gray">({props.item.stats.reviewCount}) • </span>
             <span className="gray">{props.item.location}</span>

            </div>
            <p className="card--title">{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>

        </div>

)


}

export default Card