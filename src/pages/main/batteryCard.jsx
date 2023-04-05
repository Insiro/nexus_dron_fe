import styled from 'styled-components';
import { CardWrapper, SimpleCard } from '../../components/card';

const BatteryDiv = styled.div`
    margin: 0.5rem;
    border-radius: 10px;
    padding: 0.5rem;
    background-color: ${(props) => (props.bg ? props.bg : 'gray')};
    color: ${(props) => (props.color ? props.color : 'black')};
    width: 90%;
    font-weight: bold;
`;

const BatteryLine = ({ level, counts }) => {
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
            <span>Battery Level {level} : </span> {counts}
        </BatteryDiv>
    );
};

export const BatteryCard = () => (
    <CardWrapper multiline="true">
        <SimpleCard height="20rem" title="배터리">
            {/* <Table>
                <TableRow>level = 0, count = 1</TableRow>
            </Table> */}
            <BatteryLine level="0" counts="1" />
            <BatteryLine level="1" counts="2" />
            <BatteryLine level="2" counts="3" />
            <BatteryLine level="3" counts="4" />
        </SimpleCard>
    </CardWrapper>
);
