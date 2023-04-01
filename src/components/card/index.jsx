export const CardWrapper = ({ children }) => {
    return (
        <div className="cards">
            <div className="cards__container">
                <div className="cards__wrapper">{children}</div>
            </div>
        </div>
    );
};

export const CardItem = ({ children }) => {
    return (
        <ul className="cards__items">
            <li className="cards__item">
                <div className="cards__item__link">{children}</div>
            </li>
        </ul>
    );
};
