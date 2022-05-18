import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Card from "./component/card";
import data from "./data";
console.log(data);

const App = () => {

        
    const cards = data.map(item => {
        return(
            <Card 
                item={item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            {/* <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                location="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            /> */}
            <Hero />
             {cards}

        </div>
    )
}

export default App