import React from "react";
import Card from './Carditem.js';
import Drone_Card from "./DroneCard.js";
import GMap from "./Google_Map";

function Cards() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Card>
                            <GMap/>
                        </Card>   
                    </ul>    
                    <ul className='cards__items'>
                        <Card>
                            <Drone_Card 
                            ID="001WGNW"
                            state="in transit"
                            position="latitude : 60 longitude : 80"
                            battery="80%"
                            alt="Drone_img"
                            src="https://dji-official-fe.djicdn.com/cms/uploads/1d5df050695b621ed32cd2593759ffed.png"
                            />
                        </Card>  
                    </ul>    
                </div>
            </div>            
        </div>
    )
}

export default Cards;
