import styled from 'styled-components';
import * as styles from '../styles';
const Contrainer = styled.div`
    width: 100%;
    ${styles.MEDIAQUERY_OVER_L} {
        display: grid;
        grid-template-columns: 100%;
    }
`;

export const NoticeCardContainer = ({ children }) => (
    <Contrainer>{children}</Contrainer>
);
