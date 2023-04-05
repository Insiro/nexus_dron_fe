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
    width: 400px;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    padding-top: 2rem;
    padding-right: ${(props) => (props.padding ? props.padding : '1rem')};
    padding-left: ${(props) => (props.padding ? props.padding : '1rem')};
    padding-bottom: 2rem;
    margin: 0 auto;
    text-align: center;
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
export const InputBox = styled.input`
    border-radius: 5px;
    padding: 5px;
`;
export const BackGround = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #c0c0c0;
`;
