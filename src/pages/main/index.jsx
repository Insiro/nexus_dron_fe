import { CardWrapper } from '../../components/card';
import { SimpleCard, SimpleCardContainer, NoticeCardContainer } from '../../components/card';
import { MaintenanceCard } from './maintenanceCard';
import { ActivityCard } from './activityCard';
import { BatteryCard } from './batteryCard';
import {NoticeCard} from './NoticeCard'
import GMap from '../../components/Google_Map';

export const Main = () => {
    return (
        <>
            <NoticeCardContainer>
                <NoticeCard />
            </NoticeCardContainer>            
            <SimpleCardContainer>
                <CardWrapper multiline="true">
                    <SimpleCard height="20rem" title="Map Area">
                        <GMap />
                    </SimpleCard>
                </CardWrapper>

                <ActivityCard />
                <BatteryCard />
                <MaintenanceCard />
            </SimpleCardContainer>
        </>
    );
};
