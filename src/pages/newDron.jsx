import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addButton } from '../stores/droneReducer';

import { CardItem, CardWrapper } from '../components/card';
import { LabeledInput } from '../components/labeledInput';

export const NewDron = () => {
    const [droneId, setDroneId] = useState('');
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
            droneId,
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
            buttons != undefined &&
            buttons.some((button) => button.droneId === droneId)
        ) {
            alert('이미 존재하는 ID입니다. ID를 바꾸어 입력해주세요.');
            return;
        }

        if (
            droneId &&
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
            dispatch(addButton(buttonInfo));
        } else {
            alert('모든 값들을 입력해주세요.');
        }
    };

    return (
        <CardWrapper>
            <CardItem>
                <LabeledInput
                    label="DronId"
                    value={droneId}
                    onChange={(e) => setDroneId(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronName"
                    value={droneName}
                    onChange={(e) => setDroneName(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronModel"
                    value={droneModel}
                    onChange={(e) => setDroneModel(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronState"
                    value={droneState}
                    onChange={(e) => setDroneState(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronLatitude"
                    value={droneLatitude}
                    onChange={(e) => setDroneLatitude(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronLongitude"
                    value={dronelongitude}
                    onChange={(e) => setDroneLongitude(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronBattery"
                    value={droneBattery}
                    onChange={(e) => setDroneBattery(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronMgrDate"
                    value={droneMgrDate}
                    onChange={(e) => setDroneMgrDate(e.target.value)}
                />
            </CardItem>
            <CardItem>
                <LabeledInput
                    label="DronType"
                    value={droneType}
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
