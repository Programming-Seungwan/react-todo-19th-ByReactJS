import styled from 'styled-components';
import DatePickerInput from './DatePickerInput';
import TodoInput from './TodoInput';

const StyledMainContentBodyUpper = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MainContentBodyUpper() {
  return (
    <StyledMainContentBodyUpper>
      <DatePickerInput />
      <TodoInput />
    </StyledMainContentBodyUpper>
  );
}
