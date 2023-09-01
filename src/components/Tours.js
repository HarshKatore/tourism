import Card from "./Card";
import React from "react";
function Tours(props){
return (
    <div className="container">

        <div>
            <h2 className="title">Plan with Harsh</h2>
        </div>

        <div className="cards">

            {
                /* //maps an array's each element  with something here we map array element with card and for each element now map will replace particular thing ie card */
                /* good practice when uyou use map fn always pass key with it it can be any unique identifier like id here and if not any pass index  */
                props.tours.map((tour)=> {
                    return <Card key = {tour.id} tour={tour} removeTour={props.removeTour}></Card>
                } )
            }

        </div>


    </div>
);
}

export default Tours;