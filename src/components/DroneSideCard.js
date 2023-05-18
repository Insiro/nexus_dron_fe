import { useNavigate } from 'react-router';
import styled from 'styled-components';

const SideCardWaraper = styled.button`
    justify-content: center;
    border-radius: 1em;
    margin-top: 5px;
    margin-bottom: 5px;
    background-color: white;
    border-width: 0px;
    &:hover {
        background: silver;
    }
`;

const SideCardTitle = styled.div`
    width: 100%;
    margin-left: 3px;
`;

const SideCardData = styled.div`
    display: flex;
    width: 100%;
`;

const DronImgWrapper = styled.div`
    width: 35%;
    height: 100%;
`;

const DronBatteryWrapper = styled.div`
    width: 65%;
    height: 100%;
`;

const ImgDrone = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
`;

const BatteryDiv = styled.div`
    margin: 0.5rem;
    border-radius: 10px;
    padding: 0.5rem;
    background-color: ${(props) => (props.bg ? props.bg : 'gray')};
    color: ${(props) => (props.color ? props.color : 'black')};
    width: 80%;
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

function DroneSideCard(props) {
    const navigate = useNavigate();
    const onclicked = () => navigate(`/drons/${props.id}`);
    return (
        <SideCardWaraper onClick={onclicked}>
            <SideCardTitle>
                <h4>Drone Name : {props.name}</h4>
            </SideCardTitle>
            <SideCardData>
                <DronImgWrapper>
                    <ImgDrone alt={props.alt} src={props.src} />
                </DronImgWrapper>
                <DronBatteryWrapper>
                    Battery status : <BatteryDiv level={props.level} />
                </DronBatteryWrapper>
            </SideCardData>
        </SideCardWaraper>
    );
}

export default DroneSideCard;
