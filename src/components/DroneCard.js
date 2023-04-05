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
                <h3>Drone ID : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                {props.id}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3>Drone Type : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                {props.type}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3>current state : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                {props.state}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3>Drone position : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                lat : {props.position[0]}, lng: {props.position[0]}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3>Drone battery : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                {props.battery}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3>Drone last service date : </h3>
            </div>
            <div style={{ textAlign: 'right', marginRight: '10px' }}>
                {props.mgrDate}
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3>Drone Model : </h3>
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
                <h2>Dron Name : {props.name}</h2>
                <hr />
            </DronTitle>
            <DronDataWrapper>
                <DronTextDataWrapper>
                    <DronTextData
                        id={props.ID}
                        type={props.type}
                        state={props.state}
                        position={props.position}
                        battery={props.battery}
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
