import { CardItemContent } from './cardItemContent';
import { SimpleCard } from './simpleCard';
import { SimpleCardContainer } from './simpleCardContainer';

export const CardWrapper = ({ children }) => {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">{children}</div>
            </div>
        </div>
    );
};

export const CardItem = ({ children, title, ...props }) => {
    return (
        <ul className="cards__items">
            <li className="cards__item">
                <CardItemContent {...props}>
                    {title && <div>{title}</div>}
                    {children}
                </CardItemContent>
            </li>
        </ul>
    );
};

export { SimpleCard, SimpleCardContainer };
