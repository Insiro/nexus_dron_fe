import { CardWrapper } from '../components/card';
import { SimpleCard, SimpleCardContainer } from '../components/card';

export const Main = () => {
    return (
        <>
            <h1>Main Page</h1>
            <h2>TODO: Add Main Page Contents</h2>
            <h2>Will Pe Filled</h2>
            <SimpleCardContainer>
                <CardWrapper>
                    <SimpleCard height="20rem" title="Map Area">
                        Map Area
                    </SimpleCard>
                </CardWrapper>

                <CardWrapper>
                    <SimpleCard height="20rem" title="half card1">
                        {' '}
                        활동 상태
                    </SimpleCard>
                </CardWrapper>
                <CardWrapper>
                    <SimpleCard height="20rem" title="Batteries">
                        {' '}
                        배터리들
                    </SimpleCard>
                </CardWrapper>
                <CardWrapper>
                    <SimpleCard height="20rem" title="점검필요">
                        점검대상
                    </SimpleCard>
                </CardWrapper>
            </SimpleCardContainer>
        </>
    );
};
