import styled from 'styled-components';
import { TodoContext } from '../../../../context';
import { useContext } from 'react';

const StyledDatePickerInputContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDatePickerInput = styled.input`
  margin-right: 10px;
  border: none;
  outline: none;
  height: 35px;
  text-indent: 5px;
  border-radius: 5px;
  padding-right: 5px;
  font-weight: 500;
`;

export default function DatePickerInput() {
  const { selectedDayString, setSelectedDayString } = useContext(TodoContext);

  function handleChangeDate(event) {
    const newSelectedDayString = event.target.value;
    setSelectedDayString(newSelectedDayString);
  }

  return (
    <StyledDatePickerInputContainer>
      <StyledDatePickerInput
        type="date"
        onChange={handleChangeDate}
        value={selectedDayString}
      />
    </StyledDatePickerInputContainer>
  );
}
