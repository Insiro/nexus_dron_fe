import styled from 'styled-components';

const DronInfoWrapper = styled.div`
    margin-bottom: 0.5em;
    justify-content: center;
    border-radius: 1em;
    box-shadow: 6px 6px 8px 0px makerShadow;
    background-color: makerDark;
    color: makerWhite;
    width: 100%;
    height: 100%;
`;

const DronTitle = styled.div`
    width: 100%;
`;

const DronDataWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const BatteryDiv = styled.div`
    margin: 0.5rem;
    border-radius: 10px;
    padding: 0.5rem;
    background-color: ${(props) => (props.bg ? props.bg : 'gray')};
    color: ${(props) => (props.color ? props.color : 'black')};
    width: 40%;
    font-weight: bold;
`;

const BatteryLine = ({ level }) => {
    let bg = 'gray';
    let color = 'white';
    if (level == 0) bg = 'red';
    else if (level == 1) {
        bg = 'orange';
        color = '#101070';
    } else if (level == 2) bg = 'green';
    else if (level == 3) bg = 'blue';
    return (
        <BatteryDiv bg={bg} color={color}>
            <span>Battery Level {level} : </span>
        </BatteryDiv>
    );
};

const DronTextDataWrapper = styled.div`
    width: 55%;
    max-height: 400px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ccc;
    }
`;

const DronImgWrapper = styled.div`
    width: 45%;
    height: 100%;
`;

const DronImg = styled.img`
    display: block;
    width: 100%;
    hegith: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
`;

const DronTextData = (props) => {
    return (
        <div style={{ alignItems: 'center' }}>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3 className="Drone_text">Drone ID : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                {props.id}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3 className="Drone_text">Drone Type : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                {props.type}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3 className="Drone_text">current state : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                {props.state}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3 className="Drone_text">Drone position : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                lat : {props.position[0]}, lng: {props.position[0]}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3 className="Drone_text">Drone battery : </h3>
            </div>
            <div
                style={{
                    textAlign: 'left',
                    marginRight: '10px',
                    display: 'flex',
                }}
            >
                <p style={{ marginLeft: 'auto' }}>status :</p>
                <BatteryDiv level={props.level} />
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3 className="Drone_text">Drone last service date : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                {props.mgrDate}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3 className="Drone_text">Drone Model : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                {props.model}
            </div>
        </div>
    );
};

function Drone_Card(props) {
    return (
        <DronInfoWrapper>
            <DronTitle>
                <h2 className="Drone_ID">Dron Name : {props.name}</h2>
                <hr />
            </DronTitle>
            <DronDataWrapper>
                <DronTextDataWrapper>
                    <DronTextData
                        id={props.ID}
                        type={props.type}
                        state={props.state}
                        position={props.position}
                        level={props.level}
                        mgrDate={props.mgrDate}
                        model={props.model}
                    ></DronTextData>
                </DronTextDataWrapper>
                <DronImgWrapper>
                    <DronImg alt={props.alt} src={props.src} />
                </DronImgWrapper>
            </DronDataWrapper>
        </DronInfoWrapper>
    );
}

export default Drone_Card;
