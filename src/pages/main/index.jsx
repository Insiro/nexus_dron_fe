import { CardWrapper } from '../../components/card';
import { SimpleCard, SimpleCardContainer } from '../../components/card';
import { MaintenanceCard } from './maintenanceCard';
import { ActivityCard } from './activityCard';
import { BatteryCard } from './batteryCard';

export const Main = () => {
    return (
        <>
            <SimpleCardContainer>
                <CardWrapper>
                    <SimpleCard height="20rem" title="Map Area">
                        Map Area
                    </SimpleCard>
                </CardWrapper>

                <ActivityCard />
                <BatteryCard />
                <MaintenanceCard />
            </SimpleCardContainer>
        </>
    );
};
