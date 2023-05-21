import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addButton } from '../stores/droneReducer';

import { CardItem, CardWrapper } from '../components/card';
import { LabeledInput } from '../components/labeledInput';
import { useLocation } from 'react-router-dom';

export const EditDron = () => {
    const location = useLocation();
    const drone = location.state.drone;

    const [droneName, setDroneName] = useState('');
    const [droneState, setDroneState] = useState('');
    const [droneModel, setDroneModel] = useState('');
    const [droneLatitude, setDroneLatitude] = useState('');
    const [dronelongitude, setDroneLongitude] = useState('');
    const [droneBattery, setDroneBattery] = useState('');
    const [droneMgrDate, setDroneMgrDate] = useState('');
    const [droneType, setDroneType] = useState('');

    const dispatch = useDispatch();

    const buttons = useSelector((state) => state.drone.butttons);

    const handleButtonClick = () => {
        // 입력한 정보로 버튼 정보 객체 생성
        const buttonInfo = {
            droneName,
            droneState,
            droneModel,
            droneLatitude,
            dronelongitude,
            droneBattery,
            droneMgrDate,
            droneType,
        };

        if (
            droneName &&
            droneState &&
            droneModel &&
            droneLatitude &&
            dronelongitude &&
            droneBattery &&
            droneMgrDate &&
            droneType
        ) {
            // Redux store에 버튼 정보 추가 액션 디스패치
            console.log('update_drone_request');
        } else {
            alert('수정된 값을 입력해 주세요.');
        }
    };

    return (
        <CardWrapper>
            <CardItem>
                <LabeledInput
                    label="DronName"
                    value={drone.name}
                    onChange={(e) => setDroneName(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronModel"
                    value={drone.model}
                    onChange={(e) => setDroneModel(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronState"
                    value={drone.state}
                    onChange={(e) => setDroneState(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronLatitude"
                    value={drone.position[0]}
                    onChange={(e) => setDroneLatitude(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronLongitude"
                    value={drone.position[1]}
                    onChange={(e) => setDroneLongitude(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronBattery"
                    value={drone.battery}
                    onChange={(e) => setDroneBattery(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronMgrDate"
                    value={drone.mgrDate}
                    onChange={(e) => setDroneMgrDate(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronType"
                    value={drone.type}
                    onChange={(e) => setDroneType(e.target.value)}
                />
            </CardItem>
            <CardItem onClick={handleButtonClick} color="#9f9fff">
                <b
                    style={{
                        fontSize: '2rem',
                        width: '100%',
                        height: '100%',
                        textAlign: 'center',
                    }}
                >
                    submit
                </b>
            </CardItem>
        </CardWrapper>
    );
};
