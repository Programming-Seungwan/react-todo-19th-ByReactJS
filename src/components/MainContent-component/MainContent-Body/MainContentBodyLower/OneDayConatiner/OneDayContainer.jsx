import styled from 'styled-components';
import TodoContainer from './TodoContainer/TodoContainer';
import DoneContainer from './DoneContainer/DoneContainer';

const StyledOneDayContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default function OneDayContainer() {
  return (
    <StyledOneDayContainer>
      <TodoContainer />
      <DoneContainer />
    </StyledOneDayContainer>
  );
}
