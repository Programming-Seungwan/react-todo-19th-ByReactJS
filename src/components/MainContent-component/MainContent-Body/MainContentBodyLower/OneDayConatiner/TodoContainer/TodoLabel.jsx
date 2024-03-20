import styled from 'styled-components';

const StyledTodoLabel = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-shrink: 0;
`;

export default function TodoLabel() {
  return <StyledTodoLabel>Todo</StyledTodoLabel>;
}
