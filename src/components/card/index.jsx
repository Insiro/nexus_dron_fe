import styled from 'styled-components';
import { CardItemContent } from './cardItemContent';
import { SimpleCard } from './simpleCard';
import { SimpleCardContainer } from './simpleCardContainer';
import { NoticeCardContainer } from './NoticeCardContainer';

const CradWrapperOuter = styled.div`
    justify-content: center;
    margin-left: 1rem;
    margin-right: 1rem;
    height: 100%;
    flex-grow: 1;
    display: flex;
    align-items: center;
`;

export const CardWrapper = ({ children, ...props }) => {
    return (
        <CradWrapperOuter {...props}>
            <div className="cards__container" style={{ height: '100%'}}>
                <div className="cards__wrapper" style={{ height: '100%'}}>
                    {children}
                </div>
            </div>
        </CradWrapperOuter>
    );
};

export const CardItem = ({ children, title, ...props }) => {
    return (
        <ul className="cards__items">
            <li className="cards__item">
                <CardItemContent {...props}>
                    {title && <h3>{title}</h3>}
                    {children}
                </CardItemContent>
            </li>
        </ul>
    );
};

export { SimpleCard, SimpleCardContainer, NoticeCardContainer };
