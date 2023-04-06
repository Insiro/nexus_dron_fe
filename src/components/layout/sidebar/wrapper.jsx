import styled from 'styled-components';
import * as styles from '../../styles';

export const SideBarWrapper = styled.div`
    ${styles.TRANSITION_SLOW}
    max-width: 256px;
    width: 256px;
    min-width: 256px;
    max-width: 256px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    ${styles.MEDIAQUERY_UNDER_R} {
        display: ${(props) => (props.opened ? 'flex' : 'none')};
    }
`;
