import styled from 'styled-components';
import * as styles from '../../styles';

export const SideBarWrapper = styled.div`
    ${styles.TRANSITION_SLOW}
    max-width: 256px;
    width: 256px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    ${styles.MEDIAQUERY_UNDER_R} {
        width: ${(props) => (props.opened ? '0px' : '256px')};
    }
`;
