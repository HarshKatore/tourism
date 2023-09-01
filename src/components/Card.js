import { useState } from "react";

function Card(props){


const [readmore, setReadmore] = useState(false);
const [description,setdesc ]= useState(`${props.tour.info.substring(0,200)}....`);

function readmoreHandler(){
    if(readmore === false) {setdesc(props.tour.info);}
    else{setdesc(`${props.tour.info.substring(0,200)}....`);}
    setReadmore(!readmore);
    
   
}




return(
    <div className="card">
        <img src={props.tour.image} className="image"></img>
        <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price"> ₹{props.tour.price}</h4>
                <h4 className="tour-name">{props.tour.name}</h4>
            </div>
            <div className="description">
                {description}
                <span className="read-more" onClick={readmoreHandler}>
                    {readmore ? 'show less' : 'show more'}
                </span>
            </div>
        </div>

        
        {/* //as we know we cant pass fn in prop by argument and ( ) so used fn insude fn which calles removeTour */}
        <button className="btn" onClick={()=>props.removeTour(props.tour.id)}>
            Not Intrested
        </button>

    </div>
);
}
export default Card;