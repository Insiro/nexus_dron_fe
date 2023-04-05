import styled from 'styled-components';
import { CardItemContent } from './cardItemContent';

const SimpleCardWrapper = styled.div`
    max-width: 80%;
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-grow: 1;
    margin: 0 1rem;
    border-radius: 10px;
    margin: auto;
`;

export const SimpleCard = ({ title, children, ...props }) => {
    return (
        <SimpleCardWrapper className="cards__items">
            <CardItemContent {...props}>
                <h2>{title}</h2>
                {children}
            </CardItemContent>
        </SimpleCardWrapper>
    );
};
