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
                        ID="001WGNW"
                        state="in transit"
                        position="latitude : 60 longitude : 80"
                        battery="80%"
                        alt="Drone_img"
                        src="https://dji-official-fe.djicdn.com/cms/uploads/1d5df050695b621ed32cd2593759ffed.png"
                    />
                </CardItem>
            </CardWrapper>
        </>
    );
};
