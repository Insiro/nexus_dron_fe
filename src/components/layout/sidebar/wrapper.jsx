import styled from 'styled-components';
import * as styles from '../../styles';

export const SideBarWrapper = styled.div`
    z-index: 20;
    ${styles.TRANSITION_SLOW}
    transition-property: left;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 17%;
    width: 256px;
    overflow-y: auto;
    ${styles.MEDIAQUERY_UNDER_R} {
        left: -256px;
        ${(props) => props.opened && { left: 0 }}
    }
`;
