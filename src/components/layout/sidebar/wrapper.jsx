import styled from 'styled-components';
import * as styles from '../../styles';

export const SideBarWrapper = styled.div`
    ${styles.TRANSITION_SLOW}
    max-width: 256px;
    width: 256px;
    height: 100%;

    overflow-y: auto;
    ${styles.MEDIAQUERY_UNDER_R} {
        width: ${(props) => (props.opened ? '0px' : '256px')};
    }
`;
