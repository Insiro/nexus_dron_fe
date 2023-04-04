import styled from 'styled-components';

export const CardWrapper = ({ children }) => {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">{children}</div>
            </div>
        </div>
    );
};

const CardItemContent = styled.div`
    display: flex;
    flex-flow: ${(props) => props.direction || 'column'};
    background: #fff;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    padding: ${(props) => (props.padding ? props.padding : '1rem')};
`;

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
