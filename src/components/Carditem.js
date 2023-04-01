import React from "react";

function Card(props){
    return (

        <>
            <li className="cards__item">
                <div className="cards__item__link">{props.children}</div>
            </li>
        </>

    )
}

export default Card;