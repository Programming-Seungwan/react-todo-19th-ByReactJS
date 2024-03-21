import styled from 'styled-components';

const StyledTodoItemUI = styled.div`
  background-color: tomato;
`;

export default function TodoItemUI({ text }) {
  return <StyledTodoItemUI>{text}</StyledTodoItemUI>;
}
