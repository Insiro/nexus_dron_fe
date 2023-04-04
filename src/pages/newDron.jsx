import { useState } from 'react';

import { CardItem, CardWrapper } from '../components/card';
import { LabeledInput } from '../components/labeledInput';

export const NewDron = () => {
    const [dronName, setDronName] = useState('');
    const onDronNameChangead = (e) => {
        setDronName(e.target.value);
    };
    return (
        <CardWrapper>
            <CardItem>
                <LabeledInput
                    label="DronName"
                    value={dronName}
                    onChange={onDronNameChangead}
                />
            </CardItem>
            <CardItem>
                <LabeledInput label="Dron Informations Will Be Here" />
            </CardItem>
            <CardItem>
                <button>Submit</button>
            </CardItem>
        </CardWrapper>
    );
};
