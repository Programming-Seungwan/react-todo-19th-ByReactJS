import styled from 'styled-components';

const StyledTodoContentArea = styled.div`
  flex-grow: 9;
  flex-shrink: 0;
`;

export default function TodoContentArea() {
  return (
    <StyledTodoContentArea>
      This is todo content area!
    </StyledTodoContentArea>
  );
}
