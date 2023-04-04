import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleSidebar } from '../../stores/globalReducer';

import * as styles from '../styles';

const HamBurgerDiv = styled.div`
    z-index: 30;
    position: absolute;
    right: 2rem;
    top: 20;
    display: none;
    padding: 5px;
    flex-flow: column;
    justify-content: space-between;
    height: 30px;
    width: 30px;
    cursor: pointer;
    ${styles.MEDIAQUERY_UNDER_R} {
        display: flex;
    }
`;

const Hambar = styled.div`
    width: 100%;
    height: 23%;
    background-color: black;
    border-radius: 10px;
`;

export const HamBurger = () => {
    const dispatch = useDispatch();
    const onclicked = (e) => {
        e.stopPropagation();
        dispatch(toggleSidebar());
    };
    return (
        <HamBurgerDiv onClick={onclicked}>
            <Hambar />
            <Hambar />
            <Hambar />
        </HamBurgerDiv>
    );
};
