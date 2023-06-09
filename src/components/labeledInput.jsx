import styled from 'styled-components';
const StyledH3 = styled.h3`
    display: inline-block;
    margin: 1rem;
`;

const StyledLabel = styled.label`
    width: 100%;
    display: flex;
    align-items: baseline;
`;

const StyledInput = styled.input`
    display: inline-block;
    flex-grow: 1;
`;

export const LabeledInput = ({ label, value, onChange }) => {
    return (
        <>
            <StyledLabel>
                <StyledH3>{label}</StyledH3>
                <StyledInput value={value} onChange={onChange} />
            </StyledLabel>
        </>
    );
};
