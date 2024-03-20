import styled from 'styled-components';
import TodoLabel from './TodoLabel';
import TodoContentArea from './TodoContentArea';

const StyledTodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  flex-shrink: 0;
  width: 50%;
`;

export default function TodoContainer() {
  return (
    <StyledTodoContainer>
      <TodoLabel />
      <TodoContentArea />
    </StyledTodoContainer>
  );
}
