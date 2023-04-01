function Drone_Card(props){
    return (
        <div className="cards_Drone_info">
            <div>
                <h1 className="Drone_ID">Drone ID : {props.ID}</h1>
                <hr className="Drone_hr"/>
                <p className="Drone_text">current state : {props.state}</p>
                <p className="Drone_text">position : {props.position}</p>
                <p className="Drone_text">battery level : {props.battery}</p>
            </div>
            <img 
                className="cards__item__img"
                alt={props.alt}
                src={props.src}>
            </img>
        </div>
    )
}

export default Drone_Card; 