import styled from 'styled-components';

const DronInfoWrapper = styled.div`
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
                <h3 className="Drone_text">permission : {props.permission}</h3>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3 className="Drone_text">ID : {props.ID}</h3>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '10px' }}>
                <h3 className="Drone_text">password : {props.password}</h3>
            </div>
        </div>
    );
};

function Drone_Card(props) {
    return (
        <DronInfoWrapper>
            <DronTitle>
                <h2 className="uuid">uuid : {props.uuid}</h2>
                <hr />
            </DronTitle>
            <DronDataWrapper>
                <DronTextDataWrapper>
                    <DronTextData
                        permission={props.permission}
                        ID={props.ID}
                        password={props.password}
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
