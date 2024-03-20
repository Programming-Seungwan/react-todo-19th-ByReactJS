import styled from 'styled-components';

const StyledDatePickerInputContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%
`;

const StyledDatePickerInput = styled.input``;

export default function DatePickerInput(second) {
  return (
    <StyledDatePickerInputContainer>
      <StyledDatePickerInput type="date" />
    </StyledDatePickerInputContainer>
  );
}
