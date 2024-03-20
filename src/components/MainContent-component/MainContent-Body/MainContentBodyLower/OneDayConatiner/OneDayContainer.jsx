import styled from 'styled-components';
import TodoLabel from './TodoLabel';
import DoneLabel from './DoneLabel';

const StyledOneDayContainer = styled.div``;

export default function OneDayContainer() {
  return (
    <StyledOneDayContainer>
      <TodoLabel />
      <DoneLabel />
    </StyledOneDayContainer>
  );
}
