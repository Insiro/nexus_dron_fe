import { CardWrapper, CardItem } from '../components/card';
import Drone_Card from '../components/DroneCard';
import GMap from '../components/Google_Map';

export const Drons = () => {
    return (
        <>
            <CardWrapper>
                <CardItem padding="0">
                    <GMap />
                </CardItem>
                <CardItem>
                    <Drone_Card
                        ID="001-00-001"
                        name="WGNW"
                        type="test_type"
                        state="in transit"
                        mgrDate="MM:DD:YYYY"
                        position={[60, 80]}
                        model="test_model"
                        battery="80%"
                        alt="Drone_img"
                        src="https://dji-official-fe.djicdn.com/cms/uploads/1d5df050695b621ed32cd2593759ffed.png"
                    />
                </CardItem>
            </CardWrapper>
        </>
    );
};
